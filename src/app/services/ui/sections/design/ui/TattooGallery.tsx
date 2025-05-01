import Image from 'next/image'
import 'photoswipe/style.css'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { useEffect } from 'react'
import { ScanSearch } from 'lucide-react'
import { motion } from 'framer-motion'

export const TattooGallery = () => {
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
      <motion.a
        className="relative"
        href="/images/home/header/1.webp"
        data-pswp-width="800"
        data-pswp-height="1200"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <Image className="rounded-lg" src="/images/home/header/1.webp" alt="Tattoo 1" width={600} height={300} />
        <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
      </motion.a>

      <motion.a
        className="relative"
        href="/images/home/header/2.webp"
        data-pswp-width="800"
        data-pswp-height="1200"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Image className="rounded-lg" src="/images/home/header/2.webp" alt="Tattoo 2" width={600} height={300} />
        <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
      </motion.a>

      <motion.a
        className="relative"
        href="/images/home/header/1.webp"
        data-pswp-width="800"
        data-pswp-height="1200"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Image className="rounded-lg" src="/images/home/header/1.webp" alt="Tattoo 1" width={600} height={300} />
        <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
      </motion.a>

      <motion.a
        className="relative"
        href="/images/home/header/2.webp"
        data-pswp-width="800"
        data-pswp-height="1200"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Image className="rounded-lg" src="/images/home/header/2.webp" alt="Tattoo 2" width={600} height={300} />
        <ScanSearch size={100} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" />
      </motion.a>
    </div>
  )
}
