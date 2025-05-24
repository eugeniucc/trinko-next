import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { ContactPackage } from './ui/ContactPackage'
import { MapBox } from '../ui/MapBox'
import { MapBoxContacts } from './ui/MapBoxContacts'
import { ContactFaq } from './ui/ContactFaq'
import { ContactAction } from './ui/ContactAction'

export default function Contacts() {
  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto flex min-h-screen flex-col gap-10 px-4">
        <div className="pt-35 pb-5 lg:pt-60">
          <CustomBreadcrumb />
        </div>
        <ContactPackage />
        <MapBoxContacts />
        <MapBox />
        <ContactFaq />
        <ContactAction />
      </div>
    </MainTag>
  )
}
