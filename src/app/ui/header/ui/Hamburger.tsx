import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Instagram,
  Menu,
  MessageCircleHeart,
  MessageCircleMore,
  PhoneOutgoing,
  Send,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Hamburger = () => {
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-red-500" />
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px]" side="left">
          <SheetHeader>
            <SheetTitle>
              <span className="text-red-500 mb-12">Trinko Tattoo</span>
            </SheetTitle>
            <SheetDescription>
              Navigate through the menu to explore our services.
            </SheetDescription>
            <nav className="py-10">
              <ul className="flex flex-col gap-4 ">
                <li>
                  <Link
                    href="/"
                    className={`${
                      pathname === "/"
                        ? "text-red-500 border-red-500 font-bold border-b-1"
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
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
                        : "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-red-500 after:duration-300 hover:after:w-full "
                    }`}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <a
                  className="flex gap-2 items-center hover:text-red-500 duration-200"
                  href="tel:+37360833389"
                >
                  <PhoneOutgoing className="w-5 h-5" />
                  <p>+37360833389</p>
                </a>
                <p>Opening Hours: Mn-Sun: 10 am-8 pm</p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/trinko_tattoo/"
                  target="_blank"
                  className="hover:text-red-500 duration-200 flex items-center gap-2"
                >
                  Instagram <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/Trinkonfox"
                  target="_blank"
                  className="hover:text-red-500 duration-200 flex items-center gap-2"
                >
                  Telegram <Send className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/37360833389"
                  target="_blank"
                  className="hover:text-red-500 duration-200 flex items-center gap-2"
                >
                  WhatsApp <MessageCircleMore className="w-5 h-5" />
                </a>
                <a
                  href="viber://chat?number=%2B37360833389"
                  target="_blank"
                  className="hover:text-red-500 duration-200 flex items-center gap-2"
                >
                  Viber <MessageCircleHeart className="w-5 h-5" />
                </a>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
