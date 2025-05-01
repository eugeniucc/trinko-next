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
          <AccordionTrigger>What is tattoo correction?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Overview</h3>
            <p>
              Tattoo correction is the process of modifying an existing tattoo to improve its appearance, fix imperfections, or
              prepare it for a cover-up. It may involve color adjustment, line refinement, or blending techniques.
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
          <AccordionTrigger>Can any tattoo be corrected?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Correction Possibilities</h3>
            <p>
              Most tattoos can be corrected depending on their age, ink color, and placement. Some may require multiple sessions
              or even partial laser removal before successful correction or cover-up is possible.
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
          <AccordionTrigger>Is tattoo correction painful?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Pain Level</h3>
            <p>
              Tattoo correction is generally no more painful than getting a new tattoo. However, since the area has already been
              tattooed, some clients may experience increased sensitivity.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    </Accordion>
  )
}
