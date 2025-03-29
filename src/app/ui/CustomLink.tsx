import { cn } from "@/lib/utils";
import Link from "next/link";

type CustomLinkProps = {
  href: string;
  text?: string;
  className?: string;
};

export const CustomLink = ({ href, text, className }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-8 py-4 bg-white block rounded-md hover:bg-zinc-800 hover:text-white duration-300",
        className
      )}
    >
      <span className="font-bold">{text}</span>
    </Link>
  );
};
