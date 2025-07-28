'use client';

import BlogPost from '@/components/blog/BlogPost';
import Content from './content.mdx';

const metadata = {
  title: 'Introducing Harrison\'s Law',
  date: '2025-07-27',
  readTime: '4 min read',
  category: 'TypeScript',
  author: {
    name: 'Rhett Harrison',
    image: '/images/rhett_profile.jpeg',
  },
  coverImage: '/images/blogs/introducing-harrisons-law/Digital-Time-Blocking.webp',

};

export default function TypeScriptPost() {
  return (
    <BlogPost postMetadata={metadata}>
      <Content/>
    </BlogPost>
  );
}
