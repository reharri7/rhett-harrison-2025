'use client';

import BlogPost from '@/components/blog/BlogPost';
import Content from './content.mdx';

const metadata = {
  title: 'Building Scalable Web Applications with Next.js',
  date: '2024-02-20',
  readTime: '5 min read',
  category: 'Next.js',
  author: {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
  },
  coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
};

export default function BuildingScalableAppsPost() {
  return <BlogPost metadata={metadata}><Content /></BlogPost>;
}