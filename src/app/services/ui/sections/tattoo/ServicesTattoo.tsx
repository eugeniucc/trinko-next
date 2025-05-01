'use client'

import { TattooFaq } from './ui/TattooFaq'
import { TattooGallery } from './ui/TattooGallery'
import { TattooIntro } from './ui/TattooIntro'
import { TattooPricing } from './ui/TattooPricing'

export const ServicesTattoo = () => {
  return (
    <section id="tattoo" className="flex flex-col gap-6 py-10 md:py-25">
      <TattooIntro />
      <TattooGallery />
      <TattooPricing />
      <TattooFaq />
    </section>
  )
}
