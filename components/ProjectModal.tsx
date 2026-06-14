"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Tag } from "lucide-react";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-8 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#161616] border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header color bar */}
              <div
                className="h-1.5 rounded-t-2xl"
                style={{ background: `${project.color}aa` }}
              />

              <div className="p-8">
                {/* Close button */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-1">
                      {project.category} · {project.year}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 shrink-0"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Thumbnail placeholder */}
                <div
                  className="w-full h-44 rounded-xl mb-6 flex items-center justify-center"
                  style={{ background: project.color }}
                >
                  <span className="text-white/20 text-sm">Project Preview</span>
                </div>

                {/* Overview */}
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* Role */}
                <div className="mb-5">
                  <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-1.5">
                    Role
                  </p>
                  <p className="text-sm text-white/80 font-medium">{project.role}</p>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-xs text-white/30 uppercase tracking-[0.15em] mb-1.5">
                    About
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/8 text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/20 text-sm text-white/70 hover:text-white transition-all duration-300"
                >
                  View Project
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
