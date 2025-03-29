"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
  "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?q=80&w=1000",
];

const LatestTattooSlider = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="container mb-30"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true, el: ".swiper-pagination-latest" }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={true}
        speed={1000}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="w-[280px]! h-[380px]! md:w-[650px]! md:h-[550px]! rounded-xl overflow-hidden"
          >
            <div className="relative w-full h-full group">
              <img
                src={img}
                alt={`Tattoo ${index + 1}`}
                className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Artwork #{index + 1}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <div className="swiper-pagination-latest flex justify-center pt-10 gap-2"></div>
      </div>
    </motion.div>
  );
};

export default LatestTattooSlider;
