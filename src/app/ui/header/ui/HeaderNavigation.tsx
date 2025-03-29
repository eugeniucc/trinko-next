"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export const HeaderNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="items-center gap-12 lg:gap-20 hidden lg:flex">
      <ul className="flex gap-4 lg:gap-8 items-center">
        <li>
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`${
              pathname === "/services"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className={`${
              pathname === "/gallery"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className={`${
              pathname === "/blog"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/course"
            className={`${
              pathname === "/course"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Course
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={`${
              pathname === "/contacts"
                ? "text-red-500 border-red-500 font-bold border-b-1"
                : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full text-white"
            }`}
          >
            Contacts
          </Link>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  );
};
