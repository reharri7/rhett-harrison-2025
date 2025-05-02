import {NextResponse} from 'next/server';
import {Feed} from 'feed';
import {posts} from '@/lib/blog-data';

export async function GET() {
  // Blog metadata
  const siteURL = 'https://rhettharrison.com';
  const author = {
    name: 'Rhett Harrison',
    email: 'rhettharrison.dev@gmail.com', // Using a generic contact email
    link: 'https://rhettharrison.com/about',
  };

  // Create new Feed instance
  const feed = new Feed({
    title: 'Rhett Harrison Blog',
    description: 'Thoughts, tutorials, and insights about web development and software engineering.',
    id: siteURL,
    link: siteURL,
    language: 'en',
    image: `${siteURL}/images/og-image.jpg`, // Assuming there's an OG image
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Rhett Harrison`,
    updated: new Date(), // Today's date
    feedLinks: {
      rss2: `${siteURL}/api/rss`,
    },
    author,
  });

  // Add each post to the feed
  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.content || '',
      author: [author],
      contributor: [author],
      date: new Date(post.date),
      category: [{name: post.category}],
    });
  });

  // Return the RSS feed as XML
  return new NextResponse(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}