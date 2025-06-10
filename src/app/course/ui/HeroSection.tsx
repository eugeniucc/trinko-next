'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
export const HeroSection = () => {
  const getNextCourseDate = () => {
    const startDate = new Date(2025, 4, 1)
    const today = new Date()
    const diffInDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const cyclesPassed = Math.ceil(diffInDays / 7)
    const nextDate = new Date(startDate)
    nextDate.setDate(startDate.getDate() + cyclesPassed * 7)
    return nextDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-4xl font-bold break-words md:text-5xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          {t('coursePage.heroSection.title')}
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-gray-300"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('coursePage.heroSection.text')}
        </motion.p>
        <motion.div
          className="flex w-fit flex-col gap-4 rounded-lg bg-zinc-800 p-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl font-semibold">
            {t('coursePage.heroSection.subscribe')} : <span className="block">{getNextCourseDate()}</span>
          </p>
          <Link
            className="mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
            href="#"
          >
            {t('coursePage.heroSection.subscribeButton')}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">{t('coursePage.courseSection.title')}</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-lg">{t('coursePage.courseSection.text')}</p>
            <p className="text-lg font-bold">{t('coursePage.courseSection.about')}:</p>
            <ul className="flex list-disc flex-col gap-3 pl-6 marker:text-red-500">
              {(t('coursePage.courseSection.items', { returnObjects: true }) as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="sticky top-25 flex flex-col gap-4 self-start rounded-lg bg-zinc-800 p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">{t('coursePage.courseSection.detailsTitle.title')}</h3>
            <ul className="flex flex-col gap-4">
              {(
                t('coursePage.courseSection.detailsTitle.items', { returnObjects: true }) as {
                  title: string
                  items: string[]
                }[]
              ).map((section, index) => (
                <li key={index}>
                  <p className="mb-2 text-lg font-bold text-red-500">{section.title}</p>
                  <ul className="flex list-disc flex-col gap-3 pl-6 marker:text-red-500">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold">{t('coursePage.courseSection.coursesTypes.title')}</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-3">
          {(
            t('coursePage.courseSection.coursesTypes.items', { returnObjects: true }) as {
              title: string
              text: string
            }[]
          ).map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-lg text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
