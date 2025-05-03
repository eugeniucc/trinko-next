import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { PricingSection } from './ui/PricingSection'
import { HeroSection } from './ui/HeroSection'
import { FaqSection } from './ui/FaqSection'
import { Contacts } from '../about/ui/Contacts'

export default function Course() {
  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto flex min-h-screen flex-col gap-10 px-4 text-white">
        <div className="pt-35 pb-5 lg:pt-60">
          <CustomBreadcrumb />
        </div>
        <HeroSection />
        <PricingSection />
        <FaqSection />
      </div>
      <Contacts titleColor="text-white" />
    </MainTag>
  )
}
