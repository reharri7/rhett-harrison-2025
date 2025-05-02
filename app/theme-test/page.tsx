'use client';

import {useTheme} from 'next-themes';
import {Button} from '@/components/ui/button';
import {useEffect} from 'react';

export default function ThemeTestPage() {
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
      <h1 className="text-4xl font-bold text-theme-title mb-6">Theme Test Page</h1>
      <p className="text-theme-body mb-8">
        This page demonstrates how the theme-specific typography classes adapt to different themes.
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
          <h2 className="text-2xl font-bold text-theme-title mb-4">Theme-Specific Typography</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Title Text</h3>
              <p className="text-theme-title">This text uses the text-theme-title class</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Subtitle Text</h3>
              <p className="text-theme-subtitle">This text uses the text-theme-subtitle class</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Body Text</h3>
              <p className="text-theme-body">This text uses the text-theme-body class</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Link Text</h3>
              <a href="#" className="text-theme-link">This text uses the text-theme-link class</a>
            </div>
          </div>
        </div>

        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-theme-title mb-4">Theme-Specific Backgrounds</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Primary Background</h3>
              <div className="bg-theme-primary text-white p-4 rounded">
                This element uses the bg-theme-primary class
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Tag Background</h3>
              <span className="bg-theme-tag px-3 py-1 rounded-full inline-block">
                This element uses the bg-theme-tag class
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 border rounded-lg">
        <h2 className="text-2xl font-bold text-theme-title mb-4">Current Theme: {theme}</h2>
        <p className="text-theme-body">
          The theme-specific classes automatically adapt to the current theme. Try switching between themes using the
          buttons above.
        </p>
      </div>
    </div>
  );
}
