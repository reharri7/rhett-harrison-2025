// Central data source for blog posts
export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  content?: string; // Optional content field
};

export const posts: BlogPost[] = [
  {
    title: 'Learning to Learn: My Experience',
    excerpt: "I recently completed an online course on how to learn. Here's how it went",
    date: '2025-03-19',
    readTime: '12 min read',
    slug: 'learning-to-learn',
    category: 'Learning',
  },
];