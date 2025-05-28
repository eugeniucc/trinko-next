'use client'

import { useTranslation } from 'react-i18next'
import { TattooIntro } from './ui/TattooIntro'
import { TattooPricing } from './ui/TattooPricing'
import { TattooFaq } from '../TattooFaq'
import { galleryData } from '@/app/services/mocks/mocks'
import { TattooGallery } from '../TattooGallery'

export const ServicesPiercing = () => {
  const { t } = useTranslation()

  const listItems = t('servicesPage.sections.piercing.piercingFaq.items', { returnObjects: true }) as {
    question: string
    answer: string
  }[]

  return (
    <section id="piercing" className="flex flex-col gap-6 py-10 md:pt-0 md:pb-25">
      <TattooIntro />
      <TattooGallery images={galleryData} />
      <TattooPricing />
      <TattooFaq items={listItems} />
    </section>
  )
}
