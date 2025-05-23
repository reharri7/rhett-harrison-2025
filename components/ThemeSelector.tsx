'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Check, ChevronDown, Moon, Palette, Sun} from 'lucide-react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from '@/components/ui/dropdown-menu';

const themes = [
  {id: 'light', name: 'Light', icon: Sun},
  {id: 'dark', name: 'Dark', icon: Moon},
  {id: 'theme-cyberpunk', name: 'Cyberpunk', icon: Palette},
  {id: 'theme-forest', name: 'Forest', icon: Palette},
  {id: 'theme-synthwave', name: 'Synthwave', icon: Palette},
  {id: 'theme-aqua', name: 'Aqua', icon: Palette},
  {id: 'theme-luxury', name: 'Luxury', icon: Palette},
  {id: 'theme-garden', name: 'Garden', icon: Palette},
  {id: 'theme-coffee', name: 'Coffee', icon: Palette},
  {id: 'theme-abyss', name: 'Abyss', icon: Palette},
];

export function ThemeSelector() {
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

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];
  const ThemeIcon = currentTheme.icon;

  return (
    <div className="relative inline-block text-left">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" size="icon" aria-label="Select theme">
            <ThemeIcon className="h-5 w-5"/>
            <ChevronDown className="ml-1 h-4 w-4"/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes.map((t) => {
            const Icon = t.icon;
            return (
              <DropdownMenuItem
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  localStorage.setItem('theme', t.id);
                }}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4"/>
                {t.name}
                {theme === t.id && <Check className="ml-auto h-4 w-4"/>}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
