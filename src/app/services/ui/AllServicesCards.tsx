'use client'

import { Gem, Palette, SprayCan, Ear, PenTool, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const AllServicesCards = () => {
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <div className="h-48 overflow-hidden">
          <Image src="/images/home/header/1.webp" alt="Tattoo" width={500} height={300} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.tattoo.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.tattoo.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.tattoo.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('tattoo')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 90
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.tattoo.pricing')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Piercing"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Ear className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.piercing.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.piercing.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.piercing.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('piercing')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.piercing.pricing')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Filling"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <SprayCan className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.coverup.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.coverup.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.coverup.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('correction')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.coverup.pricing')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Design"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.design.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.design.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.design.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('design')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.design.pricing')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Permanent Makeup"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.permanent.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.permanent.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.permanent.steps', { returnObjects: true }) as string[]).map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('permanent')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.permanent.pricing')}
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Correction"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{t('servicesPage.cards.correction.title')}</h3>
          </div>
          <p className="mb-3 text-zinc-400">{t('servicesPage.cards.correction.text')}</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            {(t('servicesPage.cards.correction.steps', { returnObjects: true }) as string[]).map(
              (step: string, index: number) => (
                <li key={index}>{step}</li>
              )
            )}
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('correction')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 120
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            {t('servicesPage.cards.correction.pricing')}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
