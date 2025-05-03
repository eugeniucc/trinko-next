'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'

export const CustomBreadcrumb = () => {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white duration-300 hover:text-red-500" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathParts.map((item, index) => {
          const href = `/${pathParts.slice(0, index + 1).join('/')}`
          const isLast = index === pathParts.length - 1
          return (
            <BreadcrumbItem key={index}>
              {isLast ? (
                <span className="font-semibold text-red-500">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              ) : (
                <BreadcrumbLink className="text-white duration-300 hover:text-red-500" href={href}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
