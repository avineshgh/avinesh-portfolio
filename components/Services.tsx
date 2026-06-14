"use client";

import { motion } from "framer-motion";
import { Mic, Network, Database, Cloud } from "lucide-react";
import { services } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  mic: <Mic size={16} />,
  network: <Network size={16} />,
  database: <Database size={16} />,
  cloud: <Cloud size={16} />,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Services() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20"
      >
        <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">
          What I Do
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white/90 max-w-xl mx-auto leading-snug">
          <span className="font-semibold text-white">Collaborate</span> with brands and
          agencies to create{" "}
          <span className="font-semibold text-white">impactful results.</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white/80 transition-all duration-300 mb-5">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">
              {service.title}
            </h3>
            <p className="text-xs text-white/40 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
