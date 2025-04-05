type Props = {
  children: React.ReactNode
}

export const MainTag = ({ children }: Props) => {
  return <main className="flex flex-col">{children}</main>
}
