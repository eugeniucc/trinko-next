'use client'

import { MainTag } from '@/app/ui/main/MainTag'
import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { getGalleryImages } from '@/app/gallery/hooks/getGalleryImages'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { SkeletonLoader } from '../ui/SkeletonLoader'
import { CustomPagination } from '@/app/components/CustomPagination'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { ScanSearch } from 'lucide-react'

export default function Gallery() {
  const [page, setPage] = useState(1)

  const { data, isLoading } = useQuery({
    queryKey: ['images', page],
    queryFn: () => getGalleryImages(page)
  })

  interface ImportMeta {
    webpackHot?: {
      decline: () => void
    }
  }

  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox

    if (galleryRef.current) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#portfolio-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe').then((mod) => mod)
      })

      lightbox.init()
    }

    return () => {
      lightbox?.destroy()
      if (typeof import.meta !== 'undefined' && (import.meta as ImportMeta).webpackHot) {
        ;(import.meta as ImportMeta).webpackHot?.decline()
      }
    }
  }, [])

  return (
    <MainTag className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="pt-35 pb-20 lg:pt-60">
          <CustomBreadcrumb />
          <div
            id="portfolio-gallery"
            ref={galleryRef}
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            {isLoading
              ? Array.from({ length: 10 }).map((_, index) => <SkeletonLoader key={index} className="h-96 w-full" />)
              : data?.images.map((img) => (
                  <a
                    key={img.id}
                    href={img.url}
                    className="relative w-full object-cover"
                    data-pswp-width="1200"
                    data-pswp-height="1600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      width={900}
                      height={900}
                      src={img.url}
                      alt={'Тату Кишинев'}
                      className="rounded-lg object-cover"
                      loading="lazy"
                    />
                    <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                  </a>
                ))}
          </div>
          <CustomPagination
            paginationClassName="mt-20"
            btnNext="bg-white duration-200 hover:text-red-500 cursor-pointer"
            btnPrev="bg-white duration-200 hover:text-red-500 cursor-pointer"
            btnLink="bg-white duration-200 hover:text-red-500 cursor-pointer"
            btnEllipsis="bg-white rounded-lg duration-200 hover:text-red-500 cursor-pointer"
            currentPage={page}
            totalPages={data?.totalPages || 1}
            onPageChange={setPage}
          />
        </div>
      </div>
    </MainTag>
  )
}
