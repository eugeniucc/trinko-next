'use client'

import { Container } from '@/app/ui/Container'
import { useEffect, useRef, useState } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageType {
  src: string
  width: number
  height: number
  alt: string
  category: string
}

interface ImportMeta {
  webpackHot?: {
    decline: () => void
  }
}

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all')
  const galleryRef = useRef<HTMLDivElement>(null)

  // const [currentPage, setCurrentPage] = useState(1)
  // const itemsPerPage = 6

  // useEffect(() => {
  //   setCurrentPage(1)
  // }, [activeTab])

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'tattoo', name: 'Tattoo' },
    { id: 'piercing', name: 'Piercing' },
    { id: 'design', name: 'Design' }
  ]

  const images: ImageType[] = [
    {
      src: '/images/home/sections/portfolio/1.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'tattoo'
    },
    {
      src: '/images/home/sections/portfolio/1.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'tattoo'
    },
    {
      src: '/images/home/sections/portfolio/2.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'piercing'
    },
    {
      src: '/images/home/sections/portfolio/2.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'piercing'
    },
    {
      src: '/images/home/sections/portfolio/3.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'design'
    },
    {
      src: '/images/home/sections/portfolio/3.png',
      width: 800,
      height: 1200,
      alt: 'Tattoo 1',
      category: 'design'
    }
  ]

  useEffect(() => {
    let lightbox: PhotoSwipeLightbox

    if (galleryRef.current) {
      lightbox = new PhotoSwipeLightbox({
        gallery: '#portfolio-gallery',
        children: 'a',
        pswpModule: () => import('photoswipe')
      })

      lightbox.init()
    }

    return () => {
      lightbox?.destroy()
      if (typeof import.meta !== 'undefined' && (import.meta as ImportMeta).webpackHot) {
        ;(import.meta as ImportMeta).webpackHot?.decline()
      }
    }
  }, [activeTab])

  const filteredImages = activeTab === 'all' ? images : images.filter((img) => img.category === activeTab)

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

        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === category.id ? 'bg-white text-black shadow' : 'text-gray-600 hover:text-black'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div id="portfolio-gallery" ref={galleryRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-pswp-width={image.width}
              data-pswp-height={image.height}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  quality={85}
                  priority={index < 3}
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </Container>
  )
}
