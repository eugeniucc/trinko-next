import { MainTag } from '@/app/ui/main/MainTag'
import { Artists } from './ui/Artists'
import { Hero } from './ui/Hero'
import { ContactsSection } from './ui/ContactsSection'
import { FaqAccordion } from './ui/FaqAccordion'

export default function About() {
  return (
    <MainTag>
      <Hero />
      <Artists />
      <ContactsSection />
      <FaqAccordion />
    </MainTag>
  )
}
