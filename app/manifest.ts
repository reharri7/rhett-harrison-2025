import {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rhett Harrison',
    short_name: 'RH',
    description: 'Rhett Harrison | Senior Full-Stack Software Engineer',
    start_url: '/',
    display: 'standalone',
    background_color: '#020817',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/ico',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
