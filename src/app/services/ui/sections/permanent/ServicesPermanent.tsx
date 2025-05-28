'use client'

import { useTranslation } from 'react-i18next'
import { TattooIntro } from './ui/TattooIntro'
import { TattooPricing } from './ui/TattooPricing'
import { TattooFaq } from '../TattooFaq'
import { TattooGallery } from '../TattooGallery'
import { galleryData } from '@/app/services/mocks/mocks'

export const ServicesPermanent = () => {
  const { t } = useTranslation()

  const faqItems = t('servicesPage.sections.permanent.permanentFaq.items', { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <section id="permanent" className="flex flex-col gap-6 py-10 md:pt-0 md:pb-25">
      <TattooIntro />
      <TattooGallery images={galleryData} />
      <TattooPricing />
      <TattooFaq items={faqItems} />
    </section>
  )
}
