'use client'

import { Container } from '@/app/ui/Container'
import { useEffect, useRef } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getSupabaseImages } from '@/lib/getSupabaseImages'
import { useQuery } from '@tanstack/react-query'
import { SkeletonLoader } from '@/app/ui/SkeletonLoader'
import { ScanSearch } from 'lucide-react'
import { CustomLink } from '@/app/ui/CustomLink'

interface ImportMeta {
  webpackHot?: {
    decline: () => void
  }
}

export const Portfolio = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['portfolio', 1],
    queryFn: () => getSupabaseImages('portfolio', 1, 10)
  })

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
    <Container>
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-4xl md:text-6xl">Our Portfolio</h1>
          <p className="mx-auto my-12 max-w-3xl text-center">
            Our salon provides tattoos of various complexity. From simple to highly creative artworks, we gather all our
            achievements in the portfolio. Feel free to take a look at the gallery below to discover our best works.
          </p>
        </motion.div>

        <div id="portfolio-gallery" ref={galleryRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 9 }).map((_, index) => <SkeletonLoader className="h-[460px]" key={index} />)
            : data?.map((url, index) => (
                <a
                  key={index}
                  href={url}
                  className="relative w-full object-cover"
                  data-pswp-width="1200"
                  data-pswp-height="1600"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image width={900} height={900} src={url} alt={'Тату Кишинев'} className="rounded-lg" />
                  <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
                </a>
              ))}
        </div>
        <CustomLink
          href="/gallery"
          className="mx-auto mt-10 block w-fit border border-zinc-800 bg-zinc-800 text-white hover:bg-white hover:text-zinc-800"
          text="View all"
        />
      </section>
    </Container>
  )
}
