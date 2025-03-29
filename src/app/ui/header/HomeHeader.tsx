"use client";

import { useEffect, useState } from "react";
import { HeaderLogo } from "./ui/HeaderLogo";
import { HeaderNavigation } from "./ui/HeaderNavigation";
import { Hamburger } from "./ui/Hamburger";
import LanguageSwitcher from "./ui/LanguageSwitcher";

const HomeHeader = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isFixed ? " w-full h-[40px]" : ""}>
      <header
        className={` w-full mx-auto p-4 z-2 left-1/2 transform -translate-x-1/2 flex items-center gap-4 justify-between transition-all duration-300 ${
          isFixed ? "fixed top-0 bg-zinc-900" : "absolute top-4 lg:top-22"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <HeaderLogo />
          <HeaderNavigation />
          <div className="lg:hidden flex gap-6 items-center pr-2">
            <Hamburger />
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
