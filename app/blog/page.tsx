'use client';

import {motion} from 'framer-motion';
import {ArrowRight, Calendar, Clock, Search, Tag} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';
import {posts} from '@/lib/blog-data';

const categories = ['All', 'Learning'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-theme-title mb-4">Blog</h1>
        <p className="text-xl text-theme-body max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and software engineering.
        </p>
      </motion.div>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-theme-primary text-white'
                    : 'bg-theme-muted text-theme-body hover:bg-opacity-80'
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
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 rounded-lg border border-theme-muted bg-theme-input focus:outline-none focus:ring-2 focus:ring-theme-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="bg-theme-card rounded-lg p-6 shadow-lg"
          >
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <span
                className="bg-theme-tag px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Tag className="h-4 w-4"/>
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-theme-body">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4"/>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4"/>
                  {post.readTime}
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-theme-title mb-3">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-theme-body mb-4">{post.excerpt}</p>
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
    </div>
  );
}
