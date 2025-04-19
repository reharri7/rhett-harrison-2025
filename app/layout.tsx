import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {Suspense} from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {ThemeProvider} from '@/components/theme-provider';
import {Toaster} from 'sonner';
import {Analytics} from '@vercel/analytics/react';
import {metadata as mData} from '../lib/metadata';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...mData,
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Rhett Harrison Blog"
        href="/api/rss"
      />
    </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <Suspense fallback={null}>
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>
            )}
          </Suspense>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
          >
            Skip to main content
          </a>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            theme={'dark'}
            position={'bottom-center'}
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'bg-emerald-400',
                warning: 'bg-yellow-400',
                info: 'bg-blue-400',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
