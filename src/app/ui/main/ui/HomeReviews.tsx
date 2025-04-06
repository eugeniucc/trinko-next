'use client'

import { Container } from '@/app/ui/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'

export const HomeReviews = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
        <motion.div
          className="flex flex-col gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl">Client Love & Stories</h3>
          <p className="text-lg font-semibold">
            Every review is a story we cherish. Your feedback fuels our passion to create better art and experiences.
          </p>
          <p className="text-gray-600">
            We are not just about tattoos - we are about creating lasting relationships. Our clients become part of the Inkvo
            family, and their honest feedback helps us grow. Share your Inkvo experience with us!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            className="h-full"
            modules={[Autoplay, EffectCreative]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            effect={'creative'}
            creativeEffect={{
              prev: { translate: [0, 0, -400] },
              next: { translate: ['100%', 0, 0] }
            }}
            loop={true}
            grabCursor={true}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-10 rounded-xl bg-gray-50 p-5">
                <h3 className="text-xl font-bold">Our Client</h3>
                <div className="h-px w-full bg-gray-300"></div>
                <p className="text-lg font-semibold">
                  Inkvo is a place where you can get a high-quality tattoo, and even order a custom design based on your wishes
                  and expectations. This is exactly what I received during my first visit to the salon, and I will certainly come
                  here again to have another tattoo done.
                </p>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-10 rounded-xl bg-gray-50 p-5">
                <h3 className="text-xl font-bold">Our Client</h3>
                <div className="h-px w-full bg-gray-300"></div>
                <p className="text-lg font-semibold">
                  Inkvo is a place where you can get a high-quality tattoo, and even order a custom design based on your wishes
                  and expectations. This is exactly what I received during my first visit to the salon, and I will certainly come
                  here again to have another tattoo done.
                </p>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-10 rounded-xl bg-gray-50 p-5">
                <h3 className="text-xl font-bold">Our Client</h3>
                <div className="h-px w-full bg-gray-300"></div>
                <p className="text-lg font-semibold">
                  Inkvo is a place where you can get a high-quality tattoo, and even order a custom design based on your wishes
                  and expectations. This is exactly what I received during my first visit to the salon, and I will certainly come
                  here again to have another tattoo done.
                </p>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </Container>
  )
}
