"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

type Project = (typeof projects)[number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-light text-white/90">
          Projects <span className="font-semibold text-white">&amp; Case Studies</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            onClick={() => setSelected(project)}
            className="group relative rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 overflow-hidden cursor-pointer transition-all duration-300"
          >
            {/* Thumbnail */}
            <div
              className="w-full h-44 flex items-center justify-center transition-all duration-500 group-hover:brightness-110"
              style={{ background: project.color }}
            >
              <span className="text-white/20 text-xs">{project.category}</span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs text-white/30 mb-1">{project.year}</p>
                  <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center text-white/30 group-hover:text-white/70 transition-all duration-300 shrink-0">
                  <ArrowUpRight size={12} />
                </div>
              </div>
              <p className="text-xs text-white/40 leading-relaxed line-clamp-2">
                {project.overview}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
