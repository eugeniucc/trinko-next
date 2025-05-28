'use client'

import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { AllServicesCards } from './AllServicesCards'
import { ServicesTattoo } from './sections/tattoo/ServicesTattoo'
import { motion } from 'framer-motion'
import { ServicesPiercing } from './sections/piercing/ServicesPiercing'
import { ServicesDesign } from './sections/design/ServicesDesign'
import { ServicesPermanent } from './sections/permanent/ServicesPermanent'
import { ServicesCorrection } from './sections/correction/ServicesCorrection'
import { AllServicesFaq } from './sections/AllServicesFaq'
import { useTranslation } from 'react-i18next'

export const AllServices = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="bg-zinc-900">
        <div className="container mx-auto min-h-screen px-4 py-35 lg:pt-60 lg:pb-35">
          <div className="mb-10">
            <CustomBreadcrumb />
          </div>
          <div className="mb-16">
            <motion.h1
              className="mb-4 text-4xl font-bold break-words text-white md:text-5xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              {t('servicesPage.title')}
            </motion.h1>
            <div className="flex flex-col gap-4">
              <motion.p
                className="text-lg text-zinc-400"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('servicesPage.subtitle')}
              </motion.p>
              <motion.p
                className="text-lg text-zinc-400"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('servicesPage.text')}
              </motion.p>
            </div>
          </div>
          <AllServicesCards />
        </div>
      </section>
      <div className="container mx-auto px-4">
        <ServicesTattoo />
        <ServicesPiercing />
        <ServicesDesign />
        <ServicesPermanent />
        <ServicesCorrection />
        <AllServicesFaq />
      </div>
    </>
  )
}
