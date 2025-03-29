"use client";

import { useEffect, useState } from "react";
import { HeaderLogo } from "./ui/HeaderLogo";
import { HeaderNavigation } from "./ui/HeaderNavigation";
import { Hamburger } from "./ui/Hamburger";
import LanguageSwitcher from "./ui/LanguageSwitcher";

const HomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 bg-zinc-900 shadow-md py-2"
          : "absolute top-4 lg:top-22 py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <HeaderLogo />
        <HeaderNavigation />
        <div className="lg:hidden flex gap-6 items-center pr-2">
          <Hamburger />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
