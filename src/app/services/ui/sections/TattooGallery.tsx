import Image from 'next/image'
import 'photoswipe/style.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'
import { ScanSearch } from 'lucide-react'
import { motion } from 'framer-motion'
import { GalleryProps } from '@/app/services/types/services.types'

export const TattooGallery = ({ images }: GalleryProps) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
    }
  }, [])

  return (
    <div id="gallery" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((image, index) => (
        <motion.a
          key={index}
          className="relative"
          href={image.src}
          data-pswp-width={image.pswpWidth}
          data-pswp-height={image.pswpHeight}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Image className="rounded-lg" src={image.src} alt={image.alt} width={image.width} height={image.height} />
          <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
        </motion.a>
      ))}
    </div>
  )
}
