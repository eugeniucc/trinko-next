import { HeaderContacts } from "./ui/header/ui/HeaderContacts";
import { HomeMain } from "./ui/main/HomeMain";
import { HomeFooter } from "./ui/footer/HomeFooter";
import HomeHeader from "./ui/header/HomeHeader";
import HeroSlider from "./ui/HeroSlider";

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
