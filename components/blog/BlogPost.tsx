import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { useMDXComponents } from '@/mdx-components';

interface Author {
  name: string;
  image: string;
}

interface BlogPostMetadata {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  coverImage: string;
}

interface BlogPostProps {
  metadata: BlogPostMetadata;
  children: ReactNode;
}

export default function BlogPost({ metadata, children }: BlogPostProps) {
  const components = useMDXComponents({});

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
            src={metadata.coverImage}
            alt={metadata.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {metadata.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(metadata.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {metadata.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            {metadata.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={metadata.author.image}
                alt={metadata.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-gray-900 dark:text-gray-100">
                {metadata.author.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Author
              </div>
            </div>
          </div>

          <article className="prose prose-blue dark:prose-invert max-w-none">
            <MDXProvider components={components}>
              {children}
            </MDXProvider>
          </article>
        </div>
      </motion.div>
    </div>
  );
}