'use client';

import BlogPost from '@/components/blog/BlogPost';
import Content from './content.mdx';

const metadata = {
  title: 'The Power of TypeScript in Modern Web Development',
  date: '2024-02-15',
  readTime: '4 min read',
  category: 'TypeScript',
  author: {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
  },
  coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
};

export default function TypeScriptPost() {
  return (
    <BlogPost postMetadata={metadata}>
      <Content/>
    </BlogPost>
  );
}
