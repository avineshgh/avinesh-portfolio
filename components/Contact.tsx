"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-white/[0.03] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 outline-none transition-all duration-300";

  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs text-white/30 uppercase tracking-[0.2em] mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-light text-white/90 leading-snug mb-4">
            Tell me about your{" "}
            <span className="font-semibold text-white">next project</span>
          </h2>
          <p className="text-sm text-white/40">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s build
            something great together.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={`${inputBase} ${
                  focused === "name"
                    ? "border-white/25 bg-white/[0.06]"
                    : "border-white/8 hover:border-white/15"
                }`}
              />
            </div>
            <div>
              <input
                name="user_email"
                type="email"
                placeholder="Your Email"
                required
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={`${inputBase} ${
                  focused === "email"
                    ? "border-white/25 bg-white/[0.06]"
                    : "border-white/8 hover:border-white/15"
                }`}
              />
            </div>
          </div>

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} ${
              focused === "subject"
                ? "border-white/25 bg-white/[0.06]"
                : "border-white/8 hover:border-white/15"
            }`}
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`${inputBase} resize-none ${
              focused === "message"
                ? "border-white/25 bg-white/[0.06]"
                : "border-white/8 hover:border-white/15"
            }`}
          />

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
            className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-white text-[#111111] text-sm font-semibold hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
          >
            {status === "loading" && (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                />
                Sending...
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle size={16} />
                Message Sent!
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={16} />
                Failed — Try Again
              </>
            )}
            {status === "idle" && (
              <>
                Send Message
                <Send
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </>
            )}
          </motion.button>

          {status === "error" && (
            <p className="text-xs text-red-400/70 text-center">
              Something went wrong. Please email me directly at{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="underline hover:text-red-400"
              >
                {personalInfo.email}
              </a>
            </p>
          )}
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-10 pt-10 border-t border-white/5"
        >
          {[
            { label: "LinkedIn", href: personalInfo.social.linkedin },
            { label: "GitHub", href: personalInfo.social.github },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-sm text-white/30 hover:text-white transition-colors duration-200"
            >
              {item.label}
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
