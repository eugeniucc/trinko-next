'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/parallax'
import 'swiper/css/pagination'
import { EffectFade, Autoplay, Pagination, Parallax, Navigation } from 'swiper/modules'
import { CustomLink } from '@/app/ui/CustomLink'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/images/sliders/header/slide-1-1920x879.jpg',
    title: 'Reliable & Affordable',
    subtitle: 'TATTOO SERVICES',
    text: 'Our highly qualified team of tattooists is always ready to help you make even the wildest ideas come true. The level of our artists’ creativity & skills allows them to work on the most stunning artworks. Our team ensures that you will get what you want for you body to look exceptional.'
  },
  {
    image: '/images/sliders/header/slide-2-1920x879.jpg',
    title: 'Creative & Unique',
    subtitle: 'TATTOO ART',
    text: 'At Inkvo, we guarantee safe tattooing at any of our salons. Even if you haven’t had any tattoos yet, rest assured that our artists will minimize any negative impressions from your first-time tattoo. We wil also take care of all healing procedures depending on your skin type.'
  },
  {
    image: '/images/sliders/header/slide-3-1920x879.jpg',
    title: 'Top-notch Professionals',
    subtitle: 'INK TATTOO',
    text: 'Welcome to Inkvo, a leading tattoo studio providing top-notch tattooing services. We love to give the opportunity to all tattoo lovers to enjoy a wider range of styles from Neo Traditional tattoos to Colour realism tattoos to Dotwork tattoos. With us, you can be sure of the result.'
  }
]

export const HeroSlider = () => {
  return (
    <div className="relative h-screen w-full">
      <Swiper
        effect="fade"
        modules={[EffectFade, Autoplay, Pagination, Parallax, Navigation]}
        autoplay={{
          delay: 3000
        }}
        navigation={{
          nextEl: '.swiper-button-next-hero',
          prevEl: '.swiper-button-prev-hero'
        }}
        pagination={{ clickable: true, el: '.swiper-pagination-hero' }}
        loop
        speed={1000}
        parallax={true}
        className="absolute h-full w-full"
      >
        {slides.map((el) => (
          <SwiperSlide key={el.image}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${el.image})`
              }}
              data-swiper-parallax="-50%"
            >
              <div className="absolute top-1/2 left-1/2 container flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-start gap-4 p-4 text-left">
                <h2 className="text-4xl text-white lg:text-5xl" data-swiper-parallax="-600">
                  {el.title}
                </h2>
                <h3 className="text-5xl font-bold text-white lg:text-8xl" data-swiper-parallax="-400">
                  {el.subtitle}
                </h3>
                <p className="mb-8 max-w-3xl text-[18px] text-white" data-swiper-parallax="-300">
                  {el.text}
                </p>
                <CustomLink href="/" text="Book Now" className="mr-auto" />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-4 left-1/2 z-2 container flex -translate-x-1/2 transform items-center justify-end gap-4">
          <button className="swiper-button-prev-hero cursor-pointer">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <div className="relative flex justify-center">
            <div className="swiper-pagination-hero flex gap-1"></div>
          </div>
          <button className="swiper-button-next-hero cursor-pointer">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </Swiper>
    </div>
  )
}
