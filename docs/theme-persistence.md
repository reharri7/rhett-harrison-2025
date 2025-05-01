# Theme Persistence with localStorage

This document explains how theme persistence is implemented in the project using localStorage.

## Overview

The project uses the `next-themes` library for theme management, which already provides basic theme persistence using
localStorage. However, we've added explicit localStorage handling to ensure consistent behavior across all theme
selectors and test pages.

## Implementation Details

### ThemeProvider Configuration

The ThemeProvider is configured in `app/layout.tsx` with the following options:

```jsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
  themes={['light', 'dark', 'theme-cyberpunk', 'theme-forest']}
>
  {/* ... */}
</ThemeProvider>
```

### Theme Selection Components

All theme selection components have been updated to:

1. Save the selected theme to localStorage when a theme is selected
2. Load the theme from localStorage on initial mount

#### ThemeSelector.tsx

```jsx
// Load theme from localStorage on initial mount
useEffect(() => {
  setMounted(true);
  
  // Load theme from localStorage on initial mount
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && themes.some(t => t.id === savedTheme)) {
    setTheme(savedTheme);
  }
}, [setTheme]);

// Save theme to localStorage when selected
onClick={() => {
  setTheme(t.id);
  localStorage.setItem('theme', t.id);
}}
```

Similar changes have been made to:

- SimpleThemeSelector.tsx
- ModifiedThemeSelector.tsx
- Theme test pages (theme-test/page.tsx and theme-variant-test/page.tsx)

## How It Works

1. When a user selects a theme, the theme is set using `setTheme()` from next-themes and also saved to localStorage with
   the key 'theme'.
2. When the application loads, it checks localStorage for a saved theme and applies it if found.
3. This ensures that the user's theme preference persists across page refreshes and browser sessions.

## Available Themes

The following themes are available:

- light
- dark
- theme-cyberpunk
- theme-forest

## Testing

You can test theme persistence by:

1. Selecting a theme using any of the theme selectors
2. Refreshing the page
3. Navigating to different pages

The selected theme should persist across all these actions.