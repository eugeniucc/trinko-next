"use client";

import { Container } from "../../Container";
import LatestTattooSlider from "./LatestTattooSlider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function LatestTattoo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-zinc-800"
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 50 }}
    >
      <Container>
        <div className="py-20 sm:py-30">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <h2 className="md:text-6xl text-4xl text-white">
              Our Latest Tatoo
            </h2>
            <p className="text-white max-w-2xl">
              Inkvo has a team of talented and highly creative artists whose
              main goal is not just to keep you satisfied but also impress you
              with a unique art that will help you stand out from the crowd. The
              experience and unmatched skills of our tattooists are reasons of
              our salon’s success.
            </p>
          </div>
        </div>
        <LatestTattooSlider />
      </Container>
    </motion.div>
  );
}
