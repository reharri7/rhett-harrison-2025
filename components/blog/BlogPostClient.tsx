'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Author {
  name: string;
  image: string;
}

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  coverImage: string;
  content: string;
}

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center mb-6">
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

          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {post.author.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Author
              </div>
            </div>
          </div>

          <article className="prose prose-blue dark:prose-invert max-w-none">
            {post.content.split('\n').map((line, index) => {
              if (line.trim() === '') return <br key={index} />;
              
              // Code blocks
              if (line.startsWith('```')) {
                const [, ...codeLines] = line.split('\n');
                const code = codeLines.slice(0, -1).join('\n');
                return (
                  <pre key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                    <code>{code}</code>
                  </pre>
                );
              }

              // Regular text with markdown
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: line
                      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
                      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
                      .replace(/^- (.*$)/gm, '<ul><li>$1</li></ul>')
                      .replace(/^(\d+)\. (.*$)/gm, '<ol><li>$2</li></ol>')
                      .replace(/`([^`]+)`/g, '<code>$1</code>')
                  }}
                />
              );
            })}
          </article>
        </div>
      </motion.div>
    </div>
  );
}