'use client';

// This file is deprecated and has been replaced by ThemeSelector.tsx
// It is kept here for reference purposes only

import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';

export function ThemeToggle() {
  console.warn('ThemeToggle is deprecated. Please use ThemeSelector instead.');

  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
    </Button>
  );
}
