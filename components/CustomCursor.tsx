"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    const handleHoverIn = () => setHovered(true);
    const handleHoverOut = () => setHovered(false);

    const interactives = document.querySelectorAll(
      "a, button, input, textarea, [data-hover]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverIn);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, [visible]);

  const ringSize = hovered ? 48 : clicked ? 20 : 36;
  const dotSize = clicked ? 3 : 6;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white/50"
        animate={{
          x: pos.x - ringSize / 2,
          y: pos.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          opacity: visible ? (hovered ? 0.8 : 0.5) : 0,
          backgroundColor: hovered ? "rgba(255,255,255,0.08)" : "transparent",
        }}
        transition={{
          x: { type: "spring", damping: 25, stiffness: 250, mass: 0.4 },
          y: { type: "spring", damping: 25, stiffness: 250, mass: 0.4 },
          width: { duration: 0.2 },
          height: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        animate={{
          x: pos.x - dotSize / 2,
          y: pos.y - dotSize / 2,
          width: dotSize,
          height: dotSize,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          x: { type: "spring", damping: 40, stiffness: 500, mass: 0.1 },
          y: { type: "spring", damping: 40, stiffness: 500, mass: 0.1 },
          width: { duration: 0.15 },
          height: { duration: 0.15 },
        }}
      />
    </>
  );
}
