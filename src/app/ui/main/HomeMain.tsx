import FewWords from "./ui/FewWords";
import { HomeServices } from "./ui/HomeServices";
import LatestTattoo from "./ui/LatestTattoo";
import Advantages from "./ui/Advantages";

export const HomeMain = () => {
  return (
    <main className="flex flex-col">
      <FewWords />
      <HomeServices />
      <LatestTattoo />
      <Advantages />
    </main>
  );
};
