'use client'

import { TattooIntro } from './ui/TattooIntro'
import { TattooPricing } from './ui/TattooPricing'
import { TattooExtra } from './ui/TattooExtra'
import { TattooFaq } from '../TattooFaq'
import { useTranslation } from 'react-i18next'
import { galleryData } from '@/app/services/mocks/mocks'
import { TattooGallery } from '../TattooGallery'

export const ServicesTattoo = () => {
  const { t } = useTranslation()

  const faqItems = t('servicesPage.sections.tattoo.tattooFaq.items', { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <section id="tattoo" className="flex flex-col gap-6 py-10 md:py-25">
      <TattooIntro />
      <TattooGallery images={galleryData} />
      <TattooPricing />
      <TattooExtra />
      <TattooFaq items={faqItems} />
    </section>
  )
}
