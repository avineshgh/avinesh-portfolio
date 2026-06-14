"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
        >
          {personalInfo.email}
        </Link>

        <div className="flex items-center gap-6">
          {[
            { label: "LinkedIn", href: personalInfo.social.linkedin },
            { label: "GitHub", href: personalInfo.social.github },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
