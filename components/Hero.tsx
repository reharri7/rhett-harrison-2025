'use client';

import {motion} from 'framer-motion';
import {ArrowRight, Github, Linkedin} from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-theme-title mb-6">Rhett Harrison</h1>
        <h2 className="text-3xl font-semibold text-theme-subtitle mb-4">
          Senior Software Engineer
        </h2>
        <p className="text-xl text-theme-body mb-8 max-w-2xl mx-auto">
          Building beautiful, responsive, and user-friendly web applications with modern
          technologies.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <Link
            href="https://github.com/reharri7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-link transition-colors"
          >
            <Github className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rhettharrison/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-link transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </Link>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-theme-primary text-white px-8 py-3 rounded-lg transition-colors"
        >
          Let&apos;s work together
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}
