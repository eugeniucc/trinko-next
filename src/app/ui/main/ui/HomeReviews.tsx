'use client'

import { Container } from '@/app/ui/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import 'swiper/css/autoplay'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const HomeReviews = () => {
  const reviews = [
    {
      name: 'Аля',
      text: 'Мастер отличный, с уверенной рукой. Учитывает все пожелания, успокаивает если повизгиваешь, все стерильно, чистенько - в целом все круть :) Приходите, не бойтесь - однозначно рек 🙌✨',
      rating: 5
    },
    {
      name: 'Вадим',
      text: 'Спасибо большое за выполненную работу, очень сильно понравилось, качество высший класс😊👌',
      rating: 5
    },
    {
      name: 'Zlata',
      text: 'Отличный тату-салон! Мастера просто замечательные — профессиональные, внимательные и с хорошим вкусом. Работают аккуратно, всё стерильно, атмосфера уютная. Очень довольна результатом, обязательно приду ещё!',
      rating: 5
    },
    {
      name: 'Wasaby',
      text: 'Отличный тату мастер Красиво ровно быстро Отлично перекрыла старый партак и исправила по моему желанию эскиз',
      rating: 5
    },
    {
      name: 'Iulian',
      text: 'Просто не могу не выразить благодарность за татуировку! Она вышла просто потрясающей! Татуировка превзошла все мои ожидания, каждая деталь выполнена с такой тщательностью и профессионализмом. Спасибо за ваш талант и внимание к мелочам. Теперь у меня настоящее произведение искусства на теле, за что я вам очень признателен.',
      rating: 5
    }
  ]

  const { t } = useTranslation()

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
            <h3 className="text-4xl text-white">{t('homePage.reviews.title')}</h3>
            <p className="text-lg font-semibold text-white">{t('homePage.reviews.subtitle')}</p>
            <p className="text-white">{t('homePage.reviews.text')}</p>
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
