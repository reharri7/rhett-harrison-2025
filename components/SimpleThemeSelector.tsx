'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Moon, Palette, Sun} from 'lucide-react';

const themes = [
  {id: 'light', name: 'Light', icon: Sun},
  {id: 'dark', name: 'Dark', icon: Moon},
  {id: 'theme-cyberpunk', name: 'Cyberpunk', icon: Palette},
  {id: 'theme-forest', name: 'Forest', icon: Palette},
];

export function SimpleThemeSelector() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the selector after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    // Load theme from localStorage on initial mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes.some(t => t.id === savedTheme)) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  console.log('SimpleThemeSelector rendering, current theme:', theme);

  return (
    <div className="flex items-center space-x-2 border border-green-500 p-2 rounded-md">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;

        return (
          <Button
            key={t.id}
            variant={isActive ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setTheme(t.id);
              localStorage.setItem('theme', t.id);
            }}
            className="flex items-center gap-1"
          >
            <Icon className="h-4 w-4"/>
            <span className="hidden sm:inline">{t.name}</span>
          </Button>
        );
      })}
    </div>
  );
}
