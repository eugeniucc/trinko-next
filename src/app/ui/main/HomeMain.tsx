import FewWords from "./ui/FewWords";
import { HomeServices } from "./ui/HomeServices";

export const HomeMain = () => {
  return (
    <main className="flex flex-col">
      <FewWords />
      <HomeServices />
    </main>
  );
};
