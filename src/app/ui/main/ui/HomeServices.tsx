"use client";

import { Container } from "../../Container";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const HomeServices = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Container className="py-20 sm:py-30">
      <div ref={ref1} className="flex flex-col gap-6 mb-20">
        <motion.h2
          className="md:text-6xl text-4xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          We provide a wide variety of tattooing services to both regular and
          new clients. At Inkvo, you can expect first-class treatment as well as
          100% safe and sterile environment & equipment.
        </motion.p>
      </div>

      <div ref={ref2} className="grid grid-cols-1 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex border-b border-black hover:scale-105 duration-300 hover:border-none flex-col p-6 text-center gap-6 items-center justify-center bg-zinc-100"
          >
            <Image
              src="/images/home/sections/services/icon-01-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex flex-col p-6 text-center gap-6 items-center justify-center border-b md:border-x border-black hover:scale-105  hover:border-none bg-zinc-100 duration-300"
          >
            <Image
              src="/images/home/sections/services/icon-02-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex flex-col p-6 hover:scale-105 duration-300 hover:border-none border-b border-black text-center gap-6 items-center bg-zinc-100 justify-center"
          >
            <Image
              src="/images/home/sections/services/icon-03-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex border-black hover:scale-105 duration-300 hover:border-none flex-col p-6 text-center gap-6 items-center justify-center bg-zinc-100"
          >
            <Image
              src="/images/home/sections/services/icon-04-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex flex-col p-6 text-center gap-6 items-center justify-center border-y md:border-x md:border-y-0 border-black hover:scale-105  hover:border-none bg-zinc-100 duration-300"
          >
            <Image
              src="/images/home/sections/services/icon-05-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <Link
            href="/"
            className="flex flex-col p-6 hover:scale-105 duration-300 hover:border-none border-black text-center gap-6 items-center bg-zinc-100 justify-center"
          >
            <Image
              src="/images/home/sections/services/icon-06-80x80.png"
              alt="Service"
              width={80}
              height={80}
            />
            <h2>Tattooing</h2>
            <p>
              At our tattoo salon, we combine modern technics with traditional
              ones for a premium result.
            </p>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};
