import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const TattooExtra = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-bold lg:text-4xl">{t('servicesPage.sections.tattoo.tattooExtra.title')}</h2>
      <p className="text-lg font-bold">{t('servicesPage.sections.tattoo.tattooExtra.subtitle')}</p>
      <p className="text-lg font-bold"> {t('servicesPage.sections.tattoo.tattooExtra.text')}</p>
      <p className="text-lg font-bold"> {t('servicesPage.sections.tattoo.tattooExtra.description')}</p>
    </motion.div>
  )
}
