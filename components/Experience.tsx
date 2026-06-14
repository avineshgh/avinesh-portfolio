"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
          Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white/90">
          Work <span className="font-semibold text-white">Experience</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 0 }}
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative pl-10"
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border border-white/20 bg-[#111111] flex items-center justify-center"
              >
                <div className="w-[5px] h-[5px] rounded-full bg-white/50" />
              </motion.div>

              {/* Content */}
              <div className="group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-white/90">
                      {exp.company}
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-white/40">
                      {exp.type}
                    </span>
                  </div>
                  <span className="text-xs text-white/30 font-mono">{exp.duration}</span>
                </div>

                <p className="text-sm text-white/50 font-medium mb-3">{exp.role}</p>

                <p className="text-sm text-white/35 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/6 text-white/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
