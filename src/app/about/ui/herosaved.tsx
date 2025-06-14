'use client'

import { CustomBreadcrumb } from '@/app/components/CustomBreadcrumb'
import { Award, Users, Palette, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export const Hero = () => {
  return (
    <section className="bg-zinc-900">
      <div className="container mx-auto min-h-screen px-4">
        <div className="pt-40 pb-10 lg:pt-60">
          <CustomBreadcrumb />
        </div>
        <div className="mb-10 flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white lg:text-6xl"
          >
            About Trinko Tattoo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl text-xl text-gray-300 lg:text-2xl"
          >
            Moldovas premier tattoo studio dedicated to turning your vision into exceptional body art since 2015.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-10 pb-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-4 text-white"
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p>
              Founded in 2015 in the heart of Chisinau, Trinko Tattoo began as a small, passionate project by two artists
              determined to elevate tattoo art in Moldova. What started as a modest studio has grown into a creative sanctuary for
              both artists and clients.
            </p>
            <p>
              Our journey has been defined by continuous learning, artistic growth, and building a community that values
              self-expression through quality body art. Today, were proud to be recognized as one of Chisinaus leading tattoo
              destinations.
            </p>
            <p>
              At Trinko, we believe that every tattoo tells a story, and were dedicated to helping you tell yours through
              stunning, personalized artwork that lasts a lifetime.
            </p>
            <p>
              At Trinko, we believe that every tattoo tells a story, and were dedicated to helping you tell yours through
              stunning, personalized artwork that lasts a lifetime.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="rounded-lg bg-zinc-800 p-4 sm:p-6"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">Why Choose Us</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Award className="mt-1 size-8 text-red-600" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                  <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Shield className="mt-1 size-8 text-red-600" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                  <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Palette className="mt-1 size-8 text-red-600" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                  <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Users className="mt-1 size-8 text-red-600" />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">Excellence in Artistry</h3>
                  <p className="text-white">Our artists have won multiple awards at international tattoo conventions.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
