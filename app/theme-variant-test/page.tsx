'use client';

import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';
import {useEffect} from 'react';

export default function ThemeVariantTestPage() {
  const {theme, setTheme} = useTheme();

  // Load theme from localStorage on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark', 'theme-cyberpunk', 'theme-forest'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Theme Variant Test Page</h1>
      <p className="mb-8">
        This page tests if the theme-specific variants are working correctly.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <Button
          onClick={() => {
            setTheme('light');
            localStorage.setItem('theme', 'light');
          }}
          variant={theme === 'light' ? 'default' : 'outline'}
        >
          Light Theme
        </Button>
        <Button
          onClick={() => {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
          }}
          variant={theme === 'dark' ? 'default' : 'outline'}
        >
          Dark Theme
        </Button>
        <Button
          onClick={() => {
            setTheme('theme-cyberpunk');
            localStorage.setItem('theme', 'theme-cyberpunk');
          }}
          variant={theme === 'theme-cyberpunk' ? 'default' : 'outline'}
        >
          Cyberpunk Theme
        </Button>
        <Button
          onClick={() => {
            setTheme('theme-forest');
            localStorage.setItem('theme', 'theme-forest');
          }}
          variant={theme === 'theme-forest' ? 'default' : 'outline'}
        >
          Forest Theme
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Theme-Specific Typography Test</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Standard Tailwind Classes:</h3>
              <p className="text-blue-600 dark:text-blue-400">This uses standard Tailwind classes (text-blue-600
                dark:text-blue-400)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Theme-Specific Classes:</h3>
              <p className="text-theme-title">This uses text-theme-title class</p>
              <p className="text-theme-subtitle">This uses text-theme-subtitle class</p>
              <p className="text-theme-body">This uses text-theme-body class</p>
              <a href="#" className="text-theme-link">This uses text-theme-link class</a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Direct Theme Variants:</h3>
              <p className="text-blue-600 dark:text-blue-400 theme-cyberpunk:text-primary theme-forest:text-primary">
                This uses direct theme variants (theme-cyberpunk:text-primary)
              </p>
            </div>
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Current Theme Information</h2>
          <p className="mb-4">Current theme: <strong>{theme}</strong></p>
          <p className="mb-4">
            The theme-specific variants should apply styles based on the current theme.
            Try switching between themes using the buttons above.
          </p>

          <div
            className="p-4 bg-gray-100 dark:bg-gray-800 theme-cyberpunk:bg-primary/20 theme-forest:bg-primary/20 rounded-lg">
            <p>This box uses theme-specific background colors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
