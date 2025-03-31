"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-2 items-center">
          <p className="text-white">Languages</p>
          <Languages
            className={`w-4 h-4 ${pathname === "/" ? "text-white" : ""}`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Button
            onClick={() => i18n.changeLanguage("en")}
            className="w-full"
            variant={"outline"}
          >
            EN
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            onClick={() => i18n.changeLanguage("ru")}
            className="w-full"
            variant={"outline"}
          >
            RU
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
