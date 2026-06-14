"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = ["AI", "AI Framework", "Voice AI", "Backend", "Automation", "Cloud"];

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
          Tech Stack
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white/90">
          Key <span className="font-semibold text-white">Skills</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {categories.map((cat, ci) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: ci * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <span className="text-xs text-white/25 uppercase tracking-[0.15em] w-32 shrink-0">
                {cat}
              </span>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill, si) => (
                  <motion.span
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.07 + si * 0.04 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    className="text-sm px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/8 hover:border-white/20 hover:bg-white/[0.08] text-white/60 hover:text-white/90 transition-colors duration-200"
                  >
                    {skill.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
