'use client'

import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { AllServicesCards } from './AllServicesCards'
import { ServicesTattoo } from './sections/tattoo/ServicesTattoo'
import { motion } from 'framer-motion'
import { ServicesPiercing } from './sections/piercing/ServicesPiercing'
import { ServicesFilling } from './sections/filling/ServicesFilling'
import { ServicesDesign } from './sections/design/ServicesDesign'
import { ServicesPermanent } from './sections/permanent/ServicesPermanent'
import { ServicesCorrection } from './sections/correction/ServicesCorrection'
import { AllServicesFaq } from './sections/AllServicesFaq'

export const AllServices = () => {
  return (
    <>
      <section className="bg-zinc-900">
        <div className="container mx-auto min-h-screen px-4 py-35 lg:pt-60 lg:pb-35">
          <div className="mb-10">
            <CustomBreadcrumb />
          </div>
          <div className="mb-16">
            <motion.h1
              className="mb-4 text-4xl font-bold text-white md:text-5xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              Tattoo Services in Chisinau: Find Your Perfect Ink
            </motion.h1>
            <motion.p
              className="text-lg text-zinc-400"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Looking for exceptional tattoo services in Chisinau? Our studio offers a diverse range of tattooing styles and
              techniques, delivered by experienced and passionate artists. Whether you&#39;re seeking your first piece or adding
              to an existing collection, we&#39;re dedicated to providing you with high-quality, personalized body art in a safe
              and comfortable environment. Explore our services below to discover how we can bring your vision to life.
            </motion.p>
          </div>
          <AllServicesCards />
        </div>
      </section>
      <div className="container mx-auto px-4">
        <ServicesTattoo />
        <ServicesPiercing />
        <ServicesFilling />
        <ServicesDesign />
        <ServicesPermanent />
        <ServicesCorrection />
        <AllServicesFaq />
      </div>
    </>
  )
}
