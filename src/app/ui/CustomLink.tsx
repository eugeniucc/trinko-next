import { cn } from '@/lib/utils'
import Link from 'next/link'

type CustomLinkProps = {
  href: string
  text?: string
  className?: string
}

export const CustomLink = ({ href, text, className }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'block cursor-pointer rounded-md bg-white px-8 py-4 duration-300 hover:bg-zinc-800 hover:text-white',
        className
      )}
    >
      <span className="font-bold">{text}</span>
    </Link>
  )
}
