import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import {Toaster} from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rhett Harrison | Senior Software Engineer',
  description: 'Full-stack Senior Software Engineer specializing in modern web technologies',
  applicationName: "Rhett Harrison",
  authors: [{name: "Rhett Harrison", url: 'https://rhettharrison.com'}],
  creator: "Rhett Harrison",
  openGraph: {
    type: "website",
    url: "https://rhettharrison.com",
    description: "Full-stack Senior Software Engineer specializing in modern web technologies",
    siteName: "Rhett Harrison",
    images: [
      {
        url: "/images/rhett_profile.jpeg",
        height: "512",
        width: "512",
        type: "image/jpeg",
        alt: "Rhett Profile Picture",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: '@site',
    creator: '@creator',
    title: 'Rhett Harrison',
    description: 'Senior Software Engineer',
    images: {
      url: "/images/rhett_profile.jpeg",
      height: "512",
      width: "512",
      type: "image/jpeg",
      alt: "Rhett Profile Picture",
    }
  },
  appleWebApp: { capable: true, title: "Rhett Harrison", statusBarStyle: "black-translucent" },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster
            theme={"dark"}
            position={"bottom-center"}
            toastOptions={{
              classNames: {
                error: 'bg-red-400',
                success: 'bg-emerald-400',
                warning: 'bg-yellow-400',
                info: 'bg-blue-400',
              },
            }}/>
        </ThemeProvider>
      </body>
    </html>
  );
}