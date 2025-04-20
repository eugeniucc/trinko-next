import Image from 'next/image'
import { cn } from '@/lib/utils'

type SkeletonLoaderProps = {
  className?: string
}

export const SkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div className={cn('flex w-full animate-pulse items-center justify-center rounded-md bg-red-100', className || '')}>
      <Image className="animate-spin" src="/logo/icon.png" alt="Logo" width={72} height={72} priority />
    </div>
  )
}
