import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const TattooIntro = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      <motion.h2
        className="mb-4 text-4xl font-bold md:text-5xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
      >
        {t('servicesPage.sections.piercing.title')}
      </motion.h2>
      <motion.p
        className="text-black"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('servicesPage.sections.piercing.text')}
      </motion.p>
    </div>
  )
}
