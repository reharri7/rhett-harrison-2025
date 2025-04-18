'use client';

import BlogPost from '@/components/blog/BlogPost';
import Content from './content.mdx';

const metadata = {
  title: 'Learning to Learn: My Experience',
  date: '2025-03-19',
  readTime: '12 min read',
  category: 'TypeScript',
  author: {
    name: 'Rhett Harrison',
    image: '/images/rhett_profile.jpeg',
  },
  coverImage: '/images/blogs/learning-to-learn/learning-to-learn-cover.webp',
};

export default function TypeScriptPost() {
  return (
    <BlogPost postMetadata={metadata}>
      <Content/>
    </BlogPost>
  );
}
