'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

export const PricingSection = () => {
  const ref1 = useRef(null)
  const inView1 = useInView(ref1, { once: true })

  const ref2 = useRef(null)
  const inView2 = useInView(ref2, { once: true })

  const ref3 = useRef(null)
  const inView3 = useInView(ref3, { once: true })

  const { t } = useTranslation()

  const first = t('coursePage.courseDescription.first.items', { returnObjects: true }) as string[]
  const second = t('coursePage.courseDescription.second.items', { returnObjects: true }) as string[]

  return (
    <div className="flex flex-col gap-10">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('coursePage.pricingSection.certification.title')}
        </motion.h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid grid-cols-1 items-center gap-12 2xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-lg">{t('coursePage.pricingSection.certification.subtitle')}</p>
            <ul className="flex flex-col gap-4">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0 * 0.1, duration: 0.4 }}
              >
                <span className="text-lg">{t('coursePage.pricingSection.certification.text')}</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 * 0.1, duration: 0.4 }}
              >
                <span className="text-lg">{t('coursePage.pricingSection.certification.description')}</span>
              </motion.li>
            </ul>
            <span className="text-lg">{t('coursePage.pricingSection.certification.extra')}</span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border-2 border-zinc-700"
            >
              <Image
                src="/images/course/1.webp"
                alt="Professional Tattoo Artist Certificate"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border-2 border-zinc-700"
            >
              <Image
                src="/images/course/2.webp"
                alt="Professional Tattoo Artist Certificate"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">{t('coursePage.instructorsSection.title')}</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center rounded-lg bg-zinc-800 p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{t('coursePage.instructorsSection.first.name')}</h3>
              <p className="text-red-500">{t('coursePage.instructorsSection.first.job')}</p>
              <p>{t('coursePage.instructorsSection.first.text')}</p>
            </div>
          </div>

          <div className="flex items-center rounded-lg bg-zinc-800 p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{t('coursePage.instructorsSection.second.name')}</h3>
              <p className="text-red-500">{t('coursePage.instructorsSection.second.job')}</p>
              <p>{t('coursePage.instructorsSection.second.text')}</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">{t('coursePage.courseDescription.title')}</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6">
            <h3 className="text-2xl font-bold">{t('coursePage.courseDescription.first.name')}</h3>
            <p className="text-4xl font-bold">
              {t('coursePage.courseDescription.first.price')}: €450 ({t('coursePage.courseDescription.first.price_description')})
            </p>
            <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
              {first.map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
            <a
              className="mt-auto mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
              href="#"
            >
              {t('coursePage.courseDescription.first.button')}
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6">
            <h3 className="text-2xl font-bold">{t('coursePage.courseDescription.second.name')}</h3>
            <p className="text-4xl font-bold">{t('coursePage.courseDescription.second.price')}: 300 €</p>
            <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
              {second.map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
            <a
              className="mt-auto mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
              href="#"
            >
              {t('coursePage.courseDescription.second.button')}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
