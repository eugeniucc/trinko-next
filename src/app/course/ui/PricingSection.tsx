'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const PricingSection = () => {
  const ref1 = useRef(null)
  const inView1 = useInView(ref1, { once: true })

  const ref2 = useRef(null)
  const inView2 = useInView(ref2, { once: true })

  const ref3 = useRef(null)
  const inView3 = useInView(ref3, { once: true })

  return (
    <div className="flex flex-col gap-10">
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={inView1 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional Certification
        </motion.h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid grid-cols-1 items-center gap-12 2xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              Upon successful completion of the course, you will receive two professional certificates that verify your skills and
              knowledge as a tattoo artist:
            </p>
            <ul className="flex flex-col gap-4">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0 * 0.1, duration: 0.4 }}
              >
                <span className="text-lg">
                  <strong>Professional Tattoo Artist Certificate</strong> - Confirms your practical skills and ability to perform
                  tattoos safely and professionally.
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 * 0.1, duration: 0.4 }}
              >
                <span className="text-lg">
                  <strong>Hygiene and Safety Standards Certificate</strong> - Verifies your knowledge of sterilization,
                  cross-contamination prevention, and health regulations.
                </span>
              </motion.li>
            </ul>
            <p className="text-lg">
              These certificates are recognized throughout the industry and will help you establish your reputation as a qualified
              tattoo artist.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border-2 border-zinc-700"
            >
              <Image
                src="/images/course/1.webp"
                alt="Professional Tattoo Artist Certificate"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-lg border-2 border-zinc-700"
            >
              <Image
                src="/images/course/2.webp"
                alt="Professional Tattoo Artist Certificate"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Meet Your Instructors</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center rounded-lg bg-zinc-800 p-6">
            <div>
              <h3 className="text-xl font-bold">Alex Morgan</h3>
              <p className="text-red-500">Lead Instructor</p>
              <p>15+ years of professional tattooing experience specializing in realistic and portrait tattoos.</p>
            </div>
          </div>

          <div className="flex items-center rounded-lg bg-zinc-800 p-6">
            <div>
              <h3 className="text-xl font-bold">Sarah Chen</h3>
              <p className="text-red-500">Design Specialist</p>
              <p>Award-winning tattoo artist with expertise in Japanese and neo-traditional tattoo styles.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-3xl font-bold">Course Pricing</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6">
            <h3 className="text-2xl font-bold">Complete Course Package</h3>
            <p className="text-4xl font-bold">€1,200</p>
            <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0 * 0.1, duration: 0.4 }}
              >
                <span>All course modules</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 * 0.1, duration: 0.4 }}
              >
                <span>Practice materials</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2 * 0.1, duration: 0.4 }}
              >
                <span>Starter equipment kit</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 3 * 0.1, duration: 0.4 }}
              >
                <span>Two professional certificates</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 4 * 0.1, duration: 0.4 }}
              >
                <span>Portfolio development assistance</span>
              </motion.li>
            </ul>
            <a
              className="mt-auto mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
              href="#"
            >
              Enroll Now
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6">
            <h3 className="text-2xl font-bold">Payment Options</h3>
            <p>We offer flexible payment plans to make our course accessible to everyone.</p>
            <ul className="ml-4 flex list-disc flex-col gap-4 marker:text-red-500">
              <motion.li
                className="border-b border-zinc-700 pb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0 * 0.1, duration: 0.4 }}
              >
                <p className="text-lg font-bold">Full Payment</p>
                <p>Save 10% when paying the full amount upfront</p>
              </motion.li>
              <motion.li
                className="border-b border-zinc-700 pb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 * 0.1, duration: 0.4 }}
              >
                <p className="text-lg font-bold">Monthly Installments</p>
                <p>3 monthly payments of €400</p>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2 * 0.1, duration: 0.4 }}
              >
                <p className="text-lg font-bold">Student Discount</p>
                <p>15% discount available with valid student ID</p>
              </motion.li>
            </ul>
            <a
              className="mt-auto mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
              href="#"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
