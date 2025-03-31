type ContainerProps = {
  children: React.ReactNode
  className?: string
}

import { cn } from '@/lib/utils'

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn('container mx-auto flex flex-col px-4', className)}>{children}</div>
}
