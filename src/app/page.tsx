import { MainTag } from '@/app/ui/main/MainTag'
import { HomeServices } from '@/app/ui/main/ui/HomeServices'
import { LatestTattoo } from '@/app/ui/main/ui/LatestTattoo'
import { Advantages } from '@/app/ui/main/ui/Advantages'
import { Portfolio } from '@/app/ui/main/ui/Portfolio'
import { FewWords } from '@/app/ui/main/ui/FewWords'
import { HomeReviews } from '@/app/ui/main/ui/HomeReviews'
import { MapBox } from '@/app/ui/MapBox'
import { HeroSlider } from '@/app/ui/HeroSlider'
import { MapBoxContent } from '@/app/ui/main/ui/MapBoxContent'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MainTag>
        <HomeServices />
        <FewWords />
        <LatestTattoo />
        <Advantages />
        <Portfolio />
        <HomeReviews />
        <MapBoxContent />
        <MapBox />
      </MainTag>
    </>
  )
}
