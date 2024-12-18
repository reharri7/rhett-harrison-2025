'use client';

import BlogPost from '@/components/blog/BlogPost';
import Content from './content.mdx';

const metadata = {
  title: 'Mastering Tailwind CSS for Rapid UI Development',
  date: '2024-02-10',
  readTime: '6 min read',
  category: 'Web Development',
  author: {
    name: 'John Doe',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
  },
  coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=600&fit=crop',
};

export default function TailwindPost() {
  return <BlogPost metadata={metadata}><Content /></BlogPost>;
}