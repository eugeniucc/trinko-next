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
          <AccordionTrigger>How long does a custom tattoo design take?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Design Time</h3>
            <p>
              Custom tattoo designs can take anywhere from a few hours to several weeks, depending on the complexity, size, and
              details of the artwork. The process involves consultation, sketching, and adjustments to match your vision.
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
          <AccordionTrigger>Can I bring my own tattoo design?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Custom Designs</h3>
            <p>
              Yes, you can bring your own tattoo design. Our artists will work with you to refine the concept and adapt it to the
              best possible placement and style for your body.
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
          <AccordionTrigger>What should I consider when choosing a tattoo design?</AccordionTrigger>
          <AccordionContent>
            <h3 className="mb-2 text-lg font-semibold">Design Considerations</h3>
            <p>
              Consider the symbolism, size, placement, and style of the tattoo. It&#39;s important to choose a design that
              resonates with you personally and works well with your body&#39;s contours. Our artists can help guide you in
              choosing the best design for your needs.
            </p>
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    </Accordion>
  )
}
