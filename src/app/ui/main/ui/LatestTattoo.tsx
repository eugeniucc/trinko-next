'use client'

import { Container } from '@/app/ui/Container'
import LatestTattooSlider from '@/app/ui/main/ui/LatestTattooSlider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'
export const LatestTattoo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4
  })

  const { t } = useTranslation()

  return (
    <motion.div
      ref={ref}
      className="bg-zinc-800"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
    >
      <Container>
        <div className="py-20 sm:py-30">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <h2 className="text-4xl text-white md:text-6xl">{t('homePage.latestTattoo.title')}</h2>
            <p className="max-w-2xl text-white">{t('homePage.latestTattoo.text')}</p>
          </div>
        </div>
        <LatestTattooSlider />
      </Container>
    </motion.div>
  )
}
