'use client';

import React, {useState} from 'react';
import {ArrowLeft, Calendar, Clock, Tag} from 'lucide-react';
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
      <ClientMotion>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-theme-link mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4"/>
            Back to Blog
          </Link>

          <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
              className="object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center mb-6">
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

            <h1 className="text-4xl font-bold text-theme-title mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  sizes="48px"
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4="
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-theme-body">
                  {post.author.name}
                </div>
                <div className="text-sm text-theme-body">Author</div>
              </div>
            </div>

            <article className="prose prose-blue dark:prose-invert max-w-none">
              {post.content.split('\n').map((line, index) => {
                if (line.trim() === '') return <br key={index}/>;

                // Code blocks
                if (line.startsWith('```')) {
                  const [, ...codeLines] = line.split('\n');
                  const code = codeLines.slice(0, -1).join('\n');
                  return (
                    <pre key={index} className="bg-theme-muted rounded-lg p-4">
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
                        .replace(/`([^`]+)`/g, '<code>$1</code>'),
                    }}
                  />
                );
              })}
            </article>
          </div>
        </motion.div>
      </ClientMotion>
    </div>
  );
}
