'use client'

import { motion } from 'framer-motion'
export const HeroSection = () => {
  const getNextCourseDate = () => {
    const startDate = new Date(2025, 4, 1)
    const today = new Date()
    const diffInDays = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const cyclesPassed = Math.ceil(diffInDays / 7)
    const nextDate = new Date(startDate)
    nextDate.setDate(startDate.getDate() + cyclesPassed * 7)
    return nextDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <motion.h1
          className="text-4xl font-bold md:text-5xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Professional Tattoo Courses in Chisinau
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-gray-300"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Master the art of tattooing with our comprehensive professional training program. From beginners to advanced techniques,
          our courses will prepare you for a successful career in the tattoo industry.
        </motion.p>
        <motion.div
          className="flex w-fit flex-col gap-4 rounded-lg bg-zinc-800 p-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl font-semibold">Next course starts: {getNextCourseDate()}</p>
          <a
            className="mr-auto rounded-lg bg-white px-8 py-3 font-medium text-black transition duration-200 hover:bg-zinc-900 hover:text-white"
            href="#"
          >
            Enroll Now
          </a>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Course Overview</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              During the course, you will cover many aspects of tattooing, including both basic and advanced techniques.
              Here&#39;s what you will learn:
            </p>
            <ul className="flex list-disc flex-col gap-3 pl-6 marker:text-red-500">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Tattoo machine operation</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Needle configurations</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Hygiene and sterilization</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Workspace setup</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Basic composition in tattoo design</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Creating sketches</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Color theory and its application</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Stencil preparation</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Advanced tattooing techniques</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Working with different tattoo styles</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Retouching and working with skin imperfections</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <span>Tattoo artist ethics and client communication</span>
              </motion.li>
            </ul>
          </div>
          <motion.div
            className="sticky top-25 flex flex-col gap-4 self-start rounded-lg bg-zinc-800 p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">Course Details</h3>
            <ul className="space-y-3">
              <li>
                <span>Duration: 8 weeks</span>
              </li>
              <li>
                <span>Schedule: 3 days per week, 4 hours per day</span>
              </li>
              <li>
                <span>Class size: Maximum 6 students</span>
              </li>
              <li>
                <span>All materials and equipment provided</span>
              </li>
              <li>
                <span>Two professional certificates upon completion</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl font-bold">What You&#39;ll Learn</h2>
        <div className="h-px w-full bg-zinc-700"></div>
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <motion.div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6" initial={false} animate={false}>
              <h3 className="mb-3 text-xl font-bold">Fundamentals</h3>
              <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
                <li>
                  <span>Tattoo machine operation</span>
                </li>
                <li>
                  <span>Needle configurations</span>
                </li>
                <li>
                  <span>Hygiene and sterilization</span>
                </li>
                <li>
                  <span>Workspace setup</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6" initial={false} animate={false}>
              <h3 className="mb-3 text-xl font-bold">Design Skills</h3>
              <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
                <li>
                  <span>Drawing techniques</span>
                </li>
                <li>
                  <span>Color theory and application</span>
                </li>
                <li>
                  <span>Stencil preparation</span>
                </li>
                <li>
                  <span>Custom design creation</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div className="flex flex-col gap-4 rounded-lg bg-zinc-800 p-6" initial={false} animate={false}>
              <h3 className="text-xl font-bold">Tattooing Techniques</h3>
              <ul className="ml-4 flex list-disc flex-col gap-2 marker:text-red-500">
                <li>
                  <span>Line work</span>
                </li>
                <li>
                  <span>Shading methods</span>
                </li>
                <li>
                  <span>Color packing</span>
                </li>
                <li>
                  <span>Various tattoo styles</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
