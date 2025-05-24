'use client'

import { motion } from 'framer-motion'

export const MapBoxContent = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-4 px-4"
      >
        <h2 className="text-center text-4xl">Tattoo Salon in Chisinau on the Map</h2>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p>Looking for the best tattoo salon in Chisinau? Visit Trinkotattoo, located right in the heart of the city.</p>
          <p>
            Our talented artists have years of experience and are ready to bring any of your tattoo ideas to life. Whether you’re
            looking for a small, intricate design or a full sleeve, we offer custom tattoos tailored to your style. We prioritize
            cleanliness, safety, and comfort, ensuring you have a memorable experience.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
