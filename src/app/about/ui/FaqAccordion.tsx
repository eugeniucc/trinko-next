'use client'

import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const FaqAccordion = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="container mx-auto mb-20 px-4">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 0, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="1">
            <AccordionTrigger>Does getting a tattoo hurt?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Does getting a tattoo hurt?</h3>
              <p>
                Yes, getting a tattoo involves some level of pain, but the intensity varies depending on the placement and your
                pain tolerance.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 1, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="2">
            <AccordionTrigger>How long does a tattoo take to heal?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">How long does a tattoo take to heal?</h3>
              <p>Generally, tattoos take 2 to 3 weeks to heal on the surface, but full healing can take up to 2 months.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 2, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="3">
            <AccordionTrigger>Can I go swimming after getting a tattoo?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Can I go swimming after getting a tattoo?</h3>
              <p>
                No, you should avoid swimming in pools, oceans, or lakes until the tattoo is fully healed to prevent infection.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 3, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="4">
            <AccordionTrigger>How do I take care of a new tattoo?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">How do I take care of a new tattoo?</h3>
              <p>Keep it clean, moisturized, and protected from the sun. Follow your artist’s specific aftercare instructions.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 4, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="5">
            <AccordionTrigger>Are tattoos safe?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Are tattoos safe?</h3>
              <p>Yes, when done by a professional using sterile equipment, tattoos are generally safe.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 5, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="6">
            <AccordionTrigger>Can tattoos be removed?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Can tattoos be removed?</h3>
              <p>
                Yes, tattoos can be removed using laser treatments, though it can be time-consuming, expensive, and not always
                100% effective.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 6, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="7">
            <AccordionTrigger>Will my tattoo fade over time?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Will my tattoo fade over time?</h3>
              <p>
                Yes, tattoos can fade due to sun exposure, aging, and poor aftercare, but proper care can keep them vibrant
                longer.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 7, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="8">
            <AccordionTrigger>What should I do before getting a tattoo?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">What should I do before getting a tattoo?</h3>
              <p>
                Make sure you’re well-rested, hydrated, have eaten, and that you’ve researched both the design and the artist.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 8, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="9">
            <AccordionTrigger>How much does a tattoo cost?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">How much does a tattoo cost?</h3>
              <p>
                The cost depends on the size, complexity, and location of the studio, ranging anywhere from $50 to several hundred
                dollars.
              </p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 * 9, duration: 0.5 }}
        >
          <AccordionItem className="cursor-pointer" value="10">
            <AccordionTrigger>Can I bring my own design?</AccordionTrigger>
            <AccordionContent>
              <h3 className="mb-2 text-lg font-semibold">Can I bring my own design?</h3>
              <p>Absolutely. Most artists will gladly work with your design or help customize it to make it tattoo-ready.</p>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      </Accordion>
    </section>
  )
}
