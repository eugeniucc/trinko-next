"use client";

import { PhoneOutgoing } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { MessageCircleHeart } from "lucide-react";
import { usePathname } from "next/navigation";

export const HeaderContacts = () => {
  const pathname = usePathname();

  return (
    <div className="container mx-auto p-4 absolute z-20 top-4 left-1/2 transform -translate-x-1/2">
      <div
        className={`lg:block hidden ${
          pathname === ""
            ? "bg-zinc-900 text-white"
            : "bg-transparent text-black"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-20 items-center">
            <a
              className="flex gap-2 items-center text-white hover:text-red-500 duration-200"
              href="tel:+37360833389"
            >
              <PhoneOutgoing className="w-5 h-5" />
              <p>+37360833389</p>
            </a>
            <p className="text-white">Opening Hours: Mn-Sun: 10 am-8 pm</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/trinko_tattoo/"
              target="_blank"
              className="hover:text-red-500 text-white duration-200 flex items-center gap-2"
            >
              Instagram <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/Trinkonfox"
              target="_blank"
              className="hover:text-red-500 text-white duration-200 flex items-center gap-2"
            >
              Telegram <Send className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/37360833389"
              target="_blank"
              className="hover:text-red-500 text-white duration-200 flex items-center gap-2"
            >
              WhatsApp <MessageCircleMore className="w-5 h-5" />
            </a>
            <a
              href="viber://chat?number=%2B37360833389"
              target="_blank"
              className="hover:text-red-500 text-white duration-200 flex items-center gap-2"
            >
              Viber <MessageCircleHeart className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
