'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Instagram, Menu, MessageCircleHeart, MessageCircleMore, PhoneOutgoing, Send } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Hamburger = () => {
  const pathname = usePathname()

  return (
    <div className="flex items-center lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-red-500" />
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>
              <span className="mb-12 text-red-500">Trinko Tattoo</span>
            </SheetTitle>
            <SheetDescription>Navigate through the menu to explore our services.</SheetDescription>
            <nav className="py-10">
              <ul className="flex flex-col gap-4">
                <li>
                  <SheetClose>
                    <Link
                      href="/"
                      className={`${
                        pathname === '/'
                          ? 'border-b-1 border-red-500 font-bold text-red-500'
                          : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                      }`}
                    >
                      Home
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${
                      pathname === '/about'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className={`${
                      pathname === '/services'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className={`${
                      pathname === '/gallery'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`${
                      pathname === '/blog'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/course"
                    className={`${
                      pathname === '/course'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    Course
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className={`${
                      pathname === '/contacts'
                        ? 'border-b-1 border-red-500 font-bold text-red-500'
                        : "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full"
                    }`}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <a className="flex items-center gap-2 duration-200 hover:text-red-500" href="tel:+37360833389">
                  <PhoneOutgoing className="h-5 w-5" />
                  <p>+37360833389</p>
                </a>
                <p>Opening Hours: Mn-Sun: 10 am-8 pm</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Instagram <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/Trinkonfox"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Telegram <Send className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  WhatsApp <MessageCircleMore className="h-5 w-5" />
                </a>
                <a
                  href="viber://chat?number=%2B37360833389"
                  target="_blank"
                  className="flex items-center gap-2 duration-200 hover:text-red-500"
                >
                  Viber <MessageCircleHeart className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
