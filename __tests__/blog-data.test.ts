import {posts} from '@/lib/blog-data';

describe('Blog Data', () => {
  it('exports an array of blog posts', () => {
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThan(0);
  });

  it('has correctly structured blog posts', () => {
    posts.forEach((post) => {
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('excerpt');
      expect(post).toHaveProperty('date');
      expect(post).toHaveProperty('readTime');
      expect(post).toHaveProperty('slug');
      expect(post).toHaveProperty('category');
    });
  });

  it('has valid date format (YYYY-MM-DD)', () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    posts.forEach((post) => {
      expect(post.date).toMatch(dateRegex);

      // Verify it's a valid date
      const date = new Date(post.date);
      expect(date.toString()).not.toBe('Invalid Date');
    });
  });

  it('has unique slugs for each post', () => {
    const slugs = posts.map(post => post.slug);
    const uniqueSlugs = [...new Set(slugs)];

    expect(slugs.length).toBe(uniqueSlugs.length);
  });

  it('has non-empty required fields', () => {
    posts.forEach((post) => {
      expect(post.title.trim()).not.toBe('');
      expect(post.excerpt.trim()).not.toBe('');
      expect(post.slug.trim()).not.toBe('');
      expect(post.category.trim()).not.toBe('');
    });
  });
});