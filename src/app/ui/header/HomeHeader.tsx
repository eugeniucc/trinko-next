"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderLogo } from "./ui/HeaderLogo";
import { HeaderNavigation } from "./ui/HeaderNavigation";
import { Hamburger } from "./ui/Hamburger";
import LanguageSwitcher from "./ui/LanguageSwitcher";
import { useInView } from "react-intersection-observer";

const HomeHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div ref={ref}>
      <motion.header
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        className={`w-full mx-auto p-4 z-50 left-1/2 transform -translate-x-1/2 flex items-center gap-4 justify-between transition-all duration-300 ${
          !inView
            ? "fixed top-0 bg-zinc-900 shadow-md"
            : "absolute top-4 lg:top-22"
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
      </motion.header>
    </div>
  );
};

export default HomeHeader;
