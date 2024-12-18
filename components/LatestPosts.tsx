'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn how to build and deploy scalable web applications using Next.js and modern best practices.',
    date: '2024-02-20',
    readTime: '5 min read',
    slug: 'building-scalable-web-applications',
  },
  {
    title: 'The Power of TypeScript in Modern Web Development',
    excerpt: 'Discover how TypeScript can improve your development workflow and catch errors before they reach production.',
    date: '2024-02-15',
    readTime: '4 min read',
    slug: 'power-of-typescript',
  },
  {
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    excerpt: 'Tips and tricks for building beautiful user interfaces quickly with Tailwind CSS.',
    date: '2024-02-10',
    readTime: '6 min read',
    slug: 'mastering-tailwind-css',
  },
];

export default function LatestPosts() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {post.excerpt}
              </p>
            </div>
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
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}