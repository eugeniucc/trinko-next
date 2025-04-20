type Props = {
  children: React.ReactNode
  className?: string
}

export const MainTag = ({ children, className }: Props) => {
  return <main className={`flex flex-col ${className || ''}`}>{children}</main>
}
