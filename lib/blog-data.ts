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
  {
    title: 'Introducing Harrison\'s Law',
    excerpt: "Early in my career, I was given three months to build a full app from scratch. It took me six. Then I rewrote it... Three more times.",
    date: '2025-07-27',
    readTime: '12 min read',
    slug: 'introducing-harrisons-law',
    category: 'Learning',
  },
];