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
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          John Doe
        </h1>
        <h2 className="text-3xl font-semibold text-blue-800 dark:text-blue-400 mb-4">
          Full-Stack Web Developer
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Building beautiful, responsive, and user-friendly web applications
          with modern technologies.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Github className="w-8 h-8" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </Link>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Let&apos;s work together
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </section>
  );
}