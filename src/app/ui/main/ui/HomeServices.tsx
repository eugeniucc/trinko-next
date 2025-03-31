'use client'

import { Container } from '@/app/ui/Container'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { SquareArrowOutUpRight } from 'lucide-react'

export const HomeServices = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <Container className="py-20 sm:py-30">
      <div ref={ref1} className="mb-20 flex flex-col gap-6">
        <motion.h2
          className="text-center text-4xl md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mx-auto max-w-xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          We provide a wide variety of tattooing services to both regular and new clients. At Inkvo, you can expect first-class
          treatment as well as 100% safe and sterile environment & equipment.
        </motion.p>
      </div>

      <div ref={ref2} className="grid grid-cols-1 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-b border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none"
          >
            <Image
              src="/images/home/sections/services/icon-01-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-b border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none md:border-x"
          >
            <Image
              src="/images/home/sections/services/icon-02-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-b border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none"
          >
            <Image
              src="/images/home/sections/services/icon-03-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none"
          >
            <Image
              src="/images/home/sections/services/icon-04-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-y border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none md:border-x md:border-y-0"
          >
            <Image
              src="/images/home/sections/services/icon-05-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            href="/"
            className="group relative flex flex-col items-center justify-center gap-6 border-black bg-zinc-100 p-6 text-center duration-300 hover:scale-105 hover:border-none"
          >
            <Image
              src="/images/home/sections/services/icon-06-80x80.png"
              alt="Service"
              width={80}
              height={80}
              className="transition-transform duration-600 group-hover:rotate-45"
            />
            <h2>Tattooing</h2>
            <p>At our tattoo salon, we combine modern technics with traditional ones for a premium result.</p>
            <SquareArrowOutUpRight className="absolute top-4 right-6 h-4 w-4 duration-900 group-hover:rotate-360" />
          </Link>
        </motion.div>
      </div>
    </Container>
  )
}
