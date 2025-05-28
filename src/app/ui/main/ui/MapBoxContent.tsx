'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const MapBoxContent = () => {
  const { t } = useTranslation()

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-4 px-4"
      >
        <h2 className="mb-4 text-center text-4xl">{t('homePage.mapBoxContent.title')}</h2>
        <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 text-center">
          <p>{t('homePage.mapBoxContent.subtitle')}</p>
          <p className="text-lg font-bold">{t('homePage.mapBoxContent.text')}</p>
          <p>{t('homePage.mapBoxContent.description')}</p>
        </div>
      </motion.div>
    </section>
  )
}
