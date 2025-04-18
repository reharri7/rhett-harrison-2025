'use client';

import {motion} from 'framer-motion';
import {ExternalLink, Github} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">Some of my recent work</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-48">
              <Image src={project.image} alt={project.title} fill className="object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                  Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ExternalLink className="w-5 h-5" />
                  Demo
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
