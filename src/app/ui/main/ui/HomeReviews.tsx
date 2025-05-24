'use client'

import { Container } from '@/app/ui/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export const HomeReviews = () => {
  const reviews = [
    {
      name: 'Алексей',
      text: 'Inkvo - это место, где можно получить качественную татуировку по разумной цене. Мастер внимательно выслушал мои пожелания и создал именно то, что я хотел. Процесс был практически безболезненным, а результат превзошёл все ожидания!',
      rating: 5
    },
    {
      name: 'Марина',
      text: 'Очень довольна своей новой тату! Мастер проявил терпение и профессионализм, когда я несколько раз меняла детали эскиза. Гигиена на высшем уровне, чувствовала себя в безопасности. Обязательно вернусь за новым рисунком!',
      rating: 5
    },
    {
      name: 'Дмитрий',
      text: 'Делал первую татуировку в Inkvo и остался в восторге! Атмосфера студии расслабляющая, персонал дружелюбный. Мастер подробно объяснил весь процесс и дал чёткие рекомендации по уходу. Татуировка заживала быстро и без проблем.',
      rating: 5
    },
    {
      name: 'Ольга',
      text: 'Пришла на коррекцию старой татуировки, которую делала в другом месте. Мастер Inkvo смог исправить все огрехи и превратить её в настоящий шедевр! Теперь это моя любимая татуировка. Спасибо за профессионализм!',
      rating: 5
    },
    {
      name: 'Иван',
      text: 'Делал тут масштабный проект на руке - пока доволен результатом. Единственное, процесс занял больше времени, чем изначально предполагалось. Но качество работы на высоте, так что ожидание того стоило.',
      rating: 5
    }
  ]

  return (
    <section className="mt-10 bg-zinc-800">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl text-white">Client Love & Stories</h3>
            <p className="text-lg font-semibold text-white">
              Every review is a story we cherish. Your feedback fuels our passion to create better art and experiences.
            </p>
            <p className="text-white">
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
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-6 rounded-xl bg-gray-50 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">{review.name}</h3>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />
                        ))}
                      </div>
                    </div>
                    <div className="h-px w-full bg-gray-300"></div>
                    <p className="text-lg font-semibold">{review.text}</p>
                    <div className="h-px w-full bg-gray-300"></div>
                    <p className="text-sm text-gray-500">
                      {index + 1} / {reviews.length}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
