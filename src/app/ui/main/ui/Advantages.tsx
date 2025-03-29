"use client";

import { Container } from "../../Container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Advantages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="py-20 sm:py-30"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2>Our advantages</h2>
                <p>
                  For over 10 years of constant improvement, we have become one
                  of the most successful tattoo salons. Here’s why people choose
                  us.
                </p>
                <p>
                  Continuous learning and advanced training is essential in the
                  tattoo industry. That’s why constant evolving and new products
                  and techniques are vitally important to our staff. Every
                  tattoo artist at Inkvo works on their skills and creativity.
                  We are also dedicated to delivering you the best possible
                  result at an affordable price.
                </p>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  );
}
