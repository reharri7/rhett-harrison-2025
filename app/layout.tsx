import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import {Toaster} from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Web Developer',
  description: 'Full-stack web developer specializing in modern web technologies',
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