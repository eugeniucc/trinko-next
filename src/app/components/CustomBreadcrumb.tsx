'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation'

export const CustomBreadcrumb = () => {
  const pathname = usePathname()

  // Разделение пути на части
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
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink className="text-white duration-300 hover:text-red-500" href={href}>
                {index === 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item}
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
