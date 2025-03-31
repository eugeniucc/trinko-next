import { HomeServices } from '@/app/ui/main/ui/HomeServices'
import { LatestTattoo } from '@/app/ui/main/ui/LatestTattoo'
import { Advantages } from '@/app/ui/main/ui/Advantages'
import { Portfolio } from '@/app/ui/main/ui/Portfolio'
import { FewWords } from '@/app/ui/main/ui/FewWords'

export const HomeMain = () => {
  return (
    <main className="flex flex-col">
      <FewWords />
      <HomeServices />
      <LatestTattoo />
      <Advantages />
      <Portfolio />
    </main>
  )
}
