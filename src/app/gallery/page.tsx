'use client'
import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { getGalleryImages } from './hooks/fetchGallery'
import { useQuery } from '@tanstack/react-query'
// import { SkeletonLoader } from '../ui/SkeletonLoader'
// import Image from 'next/image'
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious
// } from '@/components/ui/pagination'
// import { useState } from 'react'

export default function Gallery() {
  const { data, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: () => getGalleryImages(1)
  })

  console.log(data, isLoading)

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="py-35 lg:py-60">
          <CustomBreadcrumb />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* {isLoading
              ? Array.from({ length: 4 }).map((_, index) => <SkeletonLoader className="h-[460px]" key={index} />)
              : data?.map((url, index) => (
                  <Image key={index} width={400} height={460} src={url} alt={'Тату Кишинев'} className="rounded shadow-md" />
                ))} */}
          </div>
          {/* <Pagination className="mt-6">
            <PaginationContent className="flex justify-center gap-2">
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage((p) => Math.max(p - 1, 1))} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive>{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext onClick={() => setPage((p) => p + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination> */}
        </div>
      </div>
    </MainTag>
  )
}
