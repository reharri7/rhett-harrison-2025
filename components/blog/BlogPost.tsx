import {motion} from 'framer-motion';
import {ArrowLeft, Calendar, Clock, Tag} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {ReactNode} from 'react';
import {MDXProvider} from '@mdx-js/react';
import {useMDXComponents} from '@/mdx-components';

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
  postMetadata: BlogPostMetadata;
  children: ReactNode;
}

export default function BlogPost({postMetadata, children}: BlogPostProps) {
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
          className="inline-flex items-center text-theme-link mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={postMetadata.coverImage}
            alt={postMetadata.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <span className="bg-theme-tag px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {postMetadata.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-theme-body">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(postMetadata.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {postMetadata.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-theme-title mb-6">{postMetadata.title}</h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={postMetadata.author.image}
                alt={postMetadata.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-semibold text-theme-body">
                {postMetadata.author.name}
              </div>
              <div className="text-sm text-theme-body">Author</div>
            </div>
          </div>

          <article className="prose prose-blue dark:prose-invert max-w-none">
            <MDXProvider components={components}>{children}</MDXProvider>
          </article>
        </div>
      </motion.div>
    </div>
  );
}
