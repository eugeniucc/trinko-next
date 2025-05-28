'use client'

import { Container } from '@/app/ui/Container'
import { CustomLink } from '@/app/ui/CustomLink'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

export const FewWords = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6
  })

  const { t } = useTranslation()

  return (
    <section
      ref={ref}
      className="relative bg-[url('/images/home/sections/fewWords/1.webp')] bg-cover bg-center bg-no-repeat grayscale filter"
    >
      <div className="absolute inset-0 z-0 bg-black opacity-30"></div>
      <Container>
        <div className="z-1 py-30 sm:py-60">
          <div className="flex flex-col gap-6 sm:ml-auto sm:max-w-xl">
            <motion.h2
              className="text-5xl font-semibold text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {t('homePage.fewWords.title')}
            </motion.h2>

            <motion.p
              className="text-xl font-semibold text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              {t('homePage.fewWords.subtitle')}
            </motion.p>

            <motion.p
              className="text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
            >
              {t('homePage.fewWords.text')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
              className="flex"
            >
              <CustomLink href="/" text="Book Now" className="mr-auto" />
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  )
}
