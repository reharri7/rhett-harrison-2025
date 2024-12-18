'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories = ['All', 'Web Development', 'TypeScript', 'React', 'Next.js', 'Backend'];

const posts = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build and deploy scalable web applications using Next.js and modern best practices.',
    date: '2024-02-20',
    readTime: '5 min read',
    slug: 'building-scalable-web-applications',
    category: 'Next.js',
  },
  {
    title: 'The Power of TypeScript in Modern Web Development',
    excerpt: 'Discover how TypeScript can improve your development workflow and catch errors before they reach production.',
    date: '2024-02-15',
    readTime: '4 min read',
    slug: 'power-of-typescript',
    category: 'TypeScript',
  },
  {
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    excerpt: 'Tips and tricks for building beautiful user interfaces quickly with Tailwind CSS.',
    date: '2024-02-10',
    readTime: '6 min read',
    slug: 'mastering-tailwind-css',
    category: 'Web Development',
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and software engineering.
        </p>
      </motion.div>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
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
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
}