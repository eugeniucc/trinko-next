'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' },
  { src: '/images/home/sections/portfolio/1.png' }
]

const LatestTattooSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="container mb-20"
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: true
        }}
        pagination={{ clickable: true, el: '.swiper-pagination-latest' }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={true}
        speed={1000}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="h-[380px]! w-[280px]! overflow-hidden rounded-xl md:h-[750px]! md:w-[550px]!">
            <div className="group relative h-full w-full">
              <Image
                src={img.src}
                alt={`Tattoo ${index + 1}`}
                width={650}
                height={550}
                className="h-full w-full object-cover brightness-90 transition-all duration-300 group-hover:brightness-110"
                priority={index < 3}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="translate-y-4 text-xl font-bold text-white transition-transform duration-300 group-hover:translate-y-0">
                  Artwork #{index + 1}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <div className="swiper-pagination-latest flex justify-center gap-2 pt-10"></div>
      </div>
    </motion.div>
  )
}

export default LatestTattooSlider
