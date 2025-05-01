'use client'

import { Gem, Palette, SprayCan, Ear, PenTool, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const AllServicesCards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <div className="h-48 overflow-hidden">
          <Image src="/images/home/header/1.webp" alt="Tattoo" width={500} height={300} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Tattoo</h3>
          </div>
          <p className="mb-3 text-zinc-400">
            High-quality custom tattoo art from our skilled artists. We create unique designs tailored to your personality.
          </p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Custom Design Expertise</li>
            <li>Wide Range of Styles</li>
            <li>Sterile and Safe Process</li>
          </ul>
          <Button
            onClick={() => {
              const el = document.getElementById('tattoo')
              if (el) {
                const y = el.getBoundingClientRect().top + window.scrollY - 90
                window.scrollTo({ top: y })
              }
            }}
            className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white"
          >
            Pricing
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Piercing"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Ear className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Piercing</h3>
          </div>
          <p className="mb-3 text-zinc-400">
            Professional body piercing services with sterile equipment and premium jewelry options.
          </p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Variety of Piercing Options</li>
            <li>High-Quality Jewelry</li>
            <li>Experienced Piercing Specialists</li>
          </ul>
          <Button className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white">Pricing</Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Filling"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <SprayCan className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Tattoo Filling</h3>
          </div>
          <p className="mb-3 text-zinc-400">
            Expert tattoo filling and recoloring services to refresh and revitalize your existing tattoos.
          </p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Color Boost and Refresh</li>
            <li>Detailed Touch-Up Work</li>
            <li>Extends Tattoo Lifespan</li>
          </ul>
          <Button className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white">Pricing</Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Design"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Palette className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Tattoo Design</h3>
          </div>
          <p className="mb-3 text-zinc-400">
            Custom tattoo design services to bring your ideas to life before the inking process begins.
          </p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Personalized Consultations</li>
            <li>Unique and Original Artwork</li>
            <li>Digital Preview Options</li>
          </ul>
          <Button className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white">Pricing</Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Permanent Makeup"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <Gem className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Permanent Makeup</h3>
          </div>
          <p className="mb-3 text-zinc-400">Semi-permanent cosmetic procedures including eyebrows, eyeliner, and lip blush.</p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Enhance Natural Features</li>
            <li>Long-Lasting Results</li>
            <li>Professional Application</li>
          </ul>
          <Button className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white">Pricing</Button>
        </div>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="h-48 overflow-hidden">
          <Image
            src="/images/home/header/1.webp"
            alt="Tattoo Correction"
            width={500}
            height={300}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 flex items-center">
            <div className="mr-4 rounded-full bg-red-600 p-3">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Tattoo Correction</h3>
          </div>
          <p className="mb-3 text-zinc-400">
            Professional tattoo correction and cover-up services to fix or improve existing tattoos.
          </p>
          <ul className="mb-4 list-inside list-disc text-zinc-400">
            <li>Expert Cover-Up Techniques</li>
            <li>Improve Existing Tattoos</li>
            <li>Consultation for Best Approach</li>
          </ul>
          <Button className="mt-auto rounded-md bg-white px-6 py-2 text-black transition-colors hover:text-white">Pricing</Button>
        </div>
      </motion.div>
    </div>
  )
}
