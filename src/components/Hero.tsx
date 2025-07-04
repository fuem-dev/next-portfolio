// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Fabio Hernández
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-xl"
      >
        Frontend Developer — Crafting beautiful, fast, and accessible experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <a
          href="/Fabio_Hernandez_CV_ENG.pdf"
          target="_blank"
          className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:scale-105 transition"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full border font-medium hover:scale-105 transition"
        >
          Contact me
        </a>
      </motion.div>
    </section>
  );
}
