'use client'

import { TattooFaq } from './ui/TattooFaq'
import { TattooGallery } from './ui/TattooGallery'
import { TattooIntro } from './ui/TattooIntro'
import { TattooPricing } from './ui/TattooPricing'

export const ServicesDesign = () => {
  return (
    <section id="design" className="flex flex-col gap-6 py-10 md:pt-0 md:pb-25">
      <TattooIntro />
      <TattooGallery />
      <TattooPricing />
      <TattooFaq />
    </section>
  )
}
