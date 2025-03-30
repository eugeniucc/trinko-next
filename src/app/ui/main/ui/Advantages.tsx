"use client";

import { Container } from "../../Container";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Advantages() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-30"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 md:gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="md:text-6xl text-4xl font-semibold">
                Our advantages
              </h2>
              <p className="text-lg font-semibold">
                For over 10 years of constant improvement, we have become one of
                the most successful tattoo salons. Here’s why people choose us.
              </p>
              <p>
                Continuous learning and advanced training is essential in the
                tattoo industry. That’s why constant evolving and new products
                and techniques are vitally important to our staff. Every tattoo
                artist at Inkvo works on their skills and creativity. We are
                also dedicated to delivering you the best possible result at an
                affordable price.
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
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 50 }}
                animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="relative py-10 text-left flex justify-end"
              >
                <Quote className="h-30 w-30 text-stone-200 absolute top-0 left-0" />
                <p className="relative text-right max-w-xl text-lg font-semibold">
                  Inkvo is a unique tattoo salon that offers a wide range of
                  tattoo styles, colors, and designs. We are committed to
                  providing our clients with the best possible tattoo
                  experience.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div className="flex flex-col gap-14">
            <div className="aspect-video rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p>
              Every artist at Inkvo understands that safety always comes first.
              That’s why the team of our salon uses only the best tattoing
              equipment and consumables. Moreover, we guarantee 100% sterility
              and complete medical care in each and after each procedure. Tattoo
              artists at our salon will make every effort to provide you with a
              painless experience.
            </p>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="aspect-video rounded-lg overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              >
                <source src="/videos/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
}
