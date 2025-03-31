"use client";

import { Container } from "@/app/ui/Container";
import { CustomLink } from "@/app/ui/CustomLink";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const FewWords = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section
      ref={ref}
      className="sm:bg-[url('/images/home/sections/fewWords/home-01-1920x662.jpg')] bg-[url('/images/home/sections/fewWords/home-02.png')] bg-cover bg-no-repeat bg-center relative"
    >
      <div className="absolute z-0 inset-0 bg-black opacity-30"></div>
      <Container>
        <div className="py-30 sm:py-50 z-1">
          <div className="flex flex-col gap-6 sm:max-w-xl sm:ml-auto">
            <motion.h2
              className="text-5xl font-semibold text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              A few words about our tattoo salon
            </motion.h2>

            <motion.p
              className="font-semibold text-xl text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              We have been numerously recognized as #1 tattoo salon in Los
              Angeles. We aim to deliver the best tattooing services.
            </motion.p>

            <motion.p
              className="text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              Our staff consistently upgrades their ability and knowledge
              through training and seminars to ensure your tattoo or piercing is
              performed using the latest industry standards.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className="flex"
            >
              <CustomLink href="/" text="Book Now" className="mr-auto" />
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
};
