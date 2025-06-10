'use client'

import { Container } from '@/app/ui/Container'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

export const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.6
  })

  const { t } = useTranslation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-30"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl lg:text-6xl">{t('homePage.ourAdvantagesSection.title')}</h2>
              <p className="text-lg font-semibold">{t('homePage.ourAdvantagesSection.subtitle')}</p>
              <p>{t('homePage.ourAdvantagesSection.text')}</p>
              <div className="aspect-video overflow-hidden rounded-lg">
                <video autoPlay loop muted playsInline controls className="h-full w-full object-cover">
                  <source src="https://res.cloudinary.com/da3wbhyei/video/upload/v1745148088/1_dnbito.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex justify-end py-10 text-left">
                <p className="max-w-2xl text-right text-lg font-semibold">{t('homePage.ourAdvantagesSection.description')}</p>
              </div>
            </div>
          </div>

          <motion.div className="flex flex-col gap-14">
            <div className="aspect-video overflow-hidden rounded-lg">
              <video autoPlay loop muted playsInline controls className="h-full w-full object-cover">
                <source src="https://res.cloudinary.com/da3wbhyei/video/upload/v1745148087/3_opeqaw.mp4" type="video/mp4" />
              </video>
            </div>
            <p>{t('homePage.ourAdvantagesSection.extra')}</p>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="aspect-video overflow-hidden rounded-lg"
            >
              <video autoPlay loop muted playsInline controls className="h-full w-full object-cover">
                <source src="https://res.cloudinary.com/da3wbhyei/video/upload/v1745148087/2_lyk0z5.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  )
}
