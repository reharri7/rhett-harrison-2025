'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';

const posts = [
  {
    title: 'Learning to Learn: My Experience',
    excerpt: "I recently completed an online course on how to learn. Here's how it went",
    date: '2025-03-20',
    readTime: '12 min read',
    slug: 'learning-to-learn',
  },
];

export default function LatestPosts() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-theme-title mb-4">Latest Blog Posts</h2>
        <p className="text-theme-body">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>
      {/* TODO: Add class md:grid-cols-3 once there are 3 blog posts*/}
      <div className={cn('grid gap-8', posts.length > 2 && 'md:grid-cols-3')}>
        {posts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.2}}
            className="bg-theme-card rounded-lg p-6 shadow-lg"
          >
            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm text-theme-body opacity-80 mb-2">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="text-theme-title hover:text-theme-link">{post.title}</Link>
              </h3>
              <p className="text-theme-body">{post.excerpt}</p>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-theme-link"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
          </motion.article>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-block bg-theme-primary text-white px-8 py-3 rounded-lg transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
}
