import {metadata} from '@/lib/metadata';

describe('Metadata', () => {
  it('has the correct base properties', () => {
    expect(metadata).toHaveProperty('title');
    expect(metadata).toHaveProperty('description');
    expect(metadata).toHaveProperty('applicationName');
    expect(metadata).toHaveProperty('authors');
    expect(metadata).toHaveProperty('creator');
  });

  it('has the correct metadataBase URL', () => {
    expect(metadata.metadataBase).toBeInstanceOf(URL);
    expect(metadata.metadataBase?.toString()).toBe('https://rhettharrison.com/');
  });

  it('has the correct title and description', () => {
    expect(metadata.title).toBe('Rhett Harrison | Senior Software Engineer');
    expect(metadata.description).toBe('Full-stack Senior Software Engineer specializing in modern web technologies');
  });

  it('has correctly structured authors', () => {
    expect(Array.isArray(metadata.authors)).toBe(true);
    expect(metadata.authors?.[0]).toHaveProperty('name', 'Rhett Harrison');
    expect(metadata.authors?.[0]).toHaveProperty('url', 'https://rhettharrison.com');
  });

  it('has correctly structured OpenGraph data', () => {
    expect(metadata.openGraph).toHaveProperty('type', 'website');
    expect(metadata.openGraph).toHaveProperty('url', 'https://rhettharrison.com');
    expect(metadata.openGraph).toHaveProperty('description');
    expect(metadata.openGraph).toHaveProperty('siteName', 'Rhett Harrison');
    expect(metadata.openGraph).toHaveProperty('images');

    const images = metadata.openGraph?.images;
    expect(Array.isArray(images)).toBe(true);
    expect(images?.[0]).toHaveProperty('url', '/images/rhett_profile.jpeg');
    expect(images?.[0]).toHaveProperty('height', '512');
    expect(images?.[0]).toHaveProperty('width', '512');
  });

  it('has correctly structured Twitter card data', () => {
    expect(metadata.twitter).toHaveProperty('card', 'summary_large_image');
    expect(metadata.twitter).toHaveProperty('site', '@site');
    expect(metadata.twitter).toHaveProperty('creator', '@creator');
    expect(metadata.twitter).toHaveProperty('title', 'Rhett Harrison');
    expect(metadata.twitter).toHaveProperty('description', 'Senior Software Engineer');
    expect(metadata.twitter).toHaveProperty('images');

    const images = metadata.twitter?.images;
    expect(images).toHaveProperty('url', '/images/rhett_profile.jpeg');
    expect(images).toHaveProperty('height', '512');
    expect(images).toHaveProperty('width', '512');
  });

  it('has correctly structured Apple web app data', () => {
    expect(metadata.appleWebApp).toHaveProperty('capable', true);
    expect(metadata.appleWebApp).toHaveProperty('title', 'Rhett Harrison');
    expect(metadata.appleWebApp).toHaveProperty('statusBarStyle', 'black-translucent');
  });

  it('has correctly structured icons', () => {
    expect(metadata.icons).toHaveProperty('shortcut', '/favicon.ico');
  });
});