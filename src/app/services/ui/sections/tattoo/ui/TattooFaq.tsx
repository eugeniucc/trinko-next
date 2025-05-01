import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export const TattooFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <AccordionItem value="faq-1">
          <AccordionTrigger>Does getting a tattoo hurt?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Pain Level</h3>
            <p>
              The pain from a tattoo varies depending on the person&#39;s pain tolerance and the area being tattooed. Most
              describe it as a mild burning or scratching sensation.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <AccordionItem value="faq-2">
          <AccordionTrigger>How should I care for my tattoo after getting it?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Aftercare Instructions</h3>
            <p>
              Keep the tattoo clean and moisturized. Avoid sun exposure, swimming, and scratching while it&#39;s healing. Follow
              your artist&#39;s specific aftercare advice.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AccordionItem value="faq-3">
          <AccordionTrigger>How long does a tattoo take to heal?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Healing Time</h3>
            <p>
              Most tattoos take about 2 to 4 weeks to heal on the surface, but full healing under the skin can take up to a few
              months depending on size and placement.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    </Accordion>
  )
}
