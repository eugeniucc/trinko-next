import { MainTag } from '@/app/ui/main/MainTag'
// import { Artists } from './ui/Artists'
// import { ContactsSection } from './ui/ContactsSection'
// import { FaqAccordion } from './ui/FaqAccordion'
import { HeroAnimation } from './ui/HeroAnimation'
import { HeroContent } from './ui/HeroContent'

export default function About() {
  return (
    <MainTag>
      <div className="bg-zinc-900">
        <HeroAnimation>
          <HeroContent />
        </HeroAnimation>
      </div>
      {/* 
      <Artists />
      <ContactsSection />
      <FaqAccordion /> */}
    </MainTag>
  )
}
