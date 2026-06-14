"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const words = ["Building", "voice", "AI,", "agentic", "systems,", "and", "intelligent", "products."];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl relative z-10">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <div className="w-44 h-44 rounded-full border border-white/10 overflow-hidden">
            <Image
              src="/avinesh.png"
              alt={personalInfo.name}
              width={176}
              height={176}
              className="w-full h-full object-cover scale-175"
              style={{ objectPosition: "center -25%" }}
              priority
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-sm text-white/50 mb-6 tracking-wide"
        >
          {personalInfo.greeting} 👋
        </motion.p>

        {/* Animated headline */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight mb-10"
        >
          {words.map((word, i) => {
            const isBold = word === "agentic" || word === "intelligent";
            return (
              <motion.span
                key={i}
                variants={wordVariant}
                className={`inline-block mr-[0.25em] ${
                  isBold ? "font-semibold text-white" : "font-light text-white/80"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-full transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.07]"
        >
          Latest Work
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
