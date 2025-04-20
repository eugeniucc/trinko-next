import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const FaqAccordion = () => {
  return (
    <section className="container mx-auto mb-20 px-4">
      <h2 className="mb-6 text-4xl font-bold lg:text-6xl">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className="cursor-pointer" value="1">
          <AccordionTrigger>Does getting a tattoo hurt?</AccordionTrigger>
          <AccordionContent>
            Yes, getting a tattoo involves some level of pain, but the intensity varies depending on the placement and your pain
            tolerance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="2">
          <AccordionTrigger>How long does a tattoo take to heal?</AccordionTrigger>
          <AccordionContent>
            Generally, tattoos take 2 to 3 weeks to heal on the surface, but full healing can take up to 2 months.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="3">
          <AccordionTrigger>Can I go swimming after getting a tattoo?</AccordionTrigger>
          <AccordionContent>
            No, you should avoid swimming in pools, oceans, or lakes until the tattoo is fully healed to prevent infection.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="4">
          <AccordionTrigger>How do I take care of a new tattoo?</AccordionTrigger>
          <AccordionContent>
            Keep it clean, moisturized, and protected from the sun. Follow your artist’s specific aftercare instructions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="5">
          <AccordionTrigger>Are tattoos safe?</AccordionTrigger>
          <AccordionContent>
            Yes, when done by a professional using sterile equipment, tattoos are generally safe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="6">
          <AccordionTrigger>Can tattoos be removed?</AccordionTrigger>
          <AccordionContent>
            Yes, tattoos can be removed using laser treatments, though it can be time-consuming, expensive, and not always 100%
            effective.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="7">
          <AccordionTrigger>Will my tattoo fade over time?</AccordionTrigger>
          <AccordionContent>
            Yes, tattoos can fade due to sun exposure, aging, and poor aftercare, but proper care can keep them vibrant longer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="8">
          <AccordionTrigger>What should I do before getting a tattoo?</AccordionTrigger>
          <AccordionContent>
            Make sure you’re well-rested, hydrated, have eaten, and that you’ve researched both the design and the artist.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="9">
          <AccordionTrigger>How much does a tattoo cost?</AccordionTrigger>
          <AccordionContent>
            The cost depends on the size, complexity, and location of the studio, ranging anywhere from $50 to several hundred
            dollars.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="cursor-pointer" value="10">
          <AccordionTrigger>Can I bring my own design?</AccordionTrigger>
          <AccordionContent>
            Absolutely. Most artists will gladly work with your design or help customize it to make it tattoo-ready.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
