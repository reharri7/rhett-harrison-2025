'use client';

import React, {useState} from 'react';
import {ExternalLink, Github, Tag} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Import framer-motion directly
import {motion} from 'framer-motion';

// Create a client-only wrapper for framer-motion
const ClientMotion = ({children}: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);

  // Only show the motion components after mounting on the client
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="animate-pulse">{children}</div>;
  }

  return <>{children}</>;
};

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with features like product management, cart functionality, and secure payments using Stripe integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaborative task management application with features like task assignment, due dates, and team chat.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Full Stack',
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern and responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and animations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard with location search, forecast data, and interactive weather maps.',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    category: 'Frontend',
  },
  {
    title: 'API Gateway Service',
    description:
      'Microservice-based API gateway handling authentication, rate limiting, and request routing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    github: 'https://github.com',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'Backend',
  },
  {
    title: 'Content Management System',
    description:
      'Headless CMS built with Node.js and GraphQL, featuring role-based access control and content versioning.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    category: 'Backend',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <ClientMotion>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of my work showcasing my skills in web development, from frontend
            applications to full-stack solutions.
          </p>
        </motion.div>
      </ClientMotion>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Tag className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <ClientMotion key={project.title}>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={index < 2 ? 'eager' : 'lazy'}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                  <span
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
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
                    <Github className="w-5 h-5"/>
                    Code
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5"/>
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </ClientMotion>
        ))}
      </div>
    </div>
  );
}