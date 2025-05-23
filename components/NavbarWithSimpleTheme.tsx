'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, Rss, X} from 'lucide-react';
import {cn} from '@/lib/utils';
import {SimpleThemeSelector} from '@/components/SimpleThemeSelector';

const navigation = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  // { name: 'Projects', href: '/projects' },
  {name: 'Blog', href: '/blog'},
  {name: 'Contact', href: '/contact'},
  {name: 'Resume', href: '/resume'},
];

export default function NavbarWithSimpleTheme() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              RH
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors',
                  pathname === item.href && 'text-blue-600 dark:text-blue-400'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/api/rss"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              aria-label="RSS Feed"
            >
              <Rss className="h-5 w-5"/>
            </Link>
            {/* Using SimpleThemeSelector for debugging */}
            <SimpleThemeSelector/>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/api/rss"
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              aria-label="RSS Feed"
            >
              <Rss className="h-5 w-5"/>
            </Link>
            {/* Using SimpleThemeSelector for debugging */}
            <SimpleThemeSelector/>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {mobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
                  pathname === item.href && 'text-blue-600 dark:text-blue-400'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}