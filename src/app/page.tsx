import { HeaderContacts } from "@/app/ui/header/ui/HeaderContacts";
import { HomeMain } from "@/app/ui/main/HomeMain";
import { HomeFooter } from "@/app/ui/footer/HomeFooter";
import { HomeHeader } from "@/app/ui/header/HomeHeader";
import { HeroSlider } from "@/app/ui/HeroSlider";

export default function Home() {
  return (
    <>
      <HeaderContacts />
      <HomeHeader />
      <HeroSlider />
      <HomeMain />
      <HomeFooter />
    </>
  );
}
