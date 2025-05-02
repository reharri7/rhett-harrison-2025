# Theme-Specific Typography Classes

This document explains how to use the theme-specific typography classes that have been added to the project. These
classes allow text and background colors to adapt to all themes (light, dark, cyberpunk, forest), not just light and
dark.

## Available Classes

The following theme-specific classes are available:

### Typography Classes

- `text-theme-title`: For main titles and headings. Adapts to each theme's primary color.
- `text-theme-subtitle`: For subtitles and secondary headings. Uses a slightly different shade than the title.
- `text-theme-body`: For body text. Uses a neutral color appropriate for each theme.
- `text-theme-link`: For links. Includes hover states appropriate for each theme.

### Background Classes

- `bg-theme-primary`: For primary action buttons and highlighted elements. Uses each theme's primary color.
- `bg-theme-tag`: For tags and badges. Uses a muted background with appropriate text color for each theme.

## How to Use

Replace hardcoded color classes with the theme-specific classes:

### Before:

```jsx
<h1 className="text-blue-600 dark:text-blue-500">Title</h1>
<p className="text-gray-600 dark:text-gray-300">Body text</p>
<a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Link</a>
<button className="bg-blue-600 hover:bg-blue-700 text-white">Button</button>
```

### After:

```jsx
<h1 className="text-theme-title">Title</h1>
<p className="text-theme-body">Body text</p>
<a className="text-theme-link">Link</a>
<button className="bg-theme-primary text-white">Button</button>
```

## Implementation Details

These classes are implemented in `globals.css` using Tailwind's `@apply` directive with variant selectors for each
theme:

```css
.text-theme-title {
  @apply text-blue-600 dark:text-blue-500 theme-cyberpunk:text-primary theme-forest:text-primary;
}
```

This ensures that:

- In light mode, the text is blue-600
- In dark mode, the text is blue-500
- In cyberpunk theme, the text uses the theme's primary color
- In forest theme, the text uses the theme's primary color

## Example Components

The Hero component has been updated to use these theme-specific classes:

```jsx
<h1 className="text-5xl font-bold text-theme-title mb-6">Rhett Harrison</h1>
<h2 className="text-3xl font-semibold text-theme-subtitle mb-4">
  Senior Software Engineer
</h2>
<p className="text-xl text-theme-body mb-8 max-w-2xl mx-auto">
  Building beautiful, responsive, and user-friendly web applications with modern
  technologies.
</p>
```

## Testing

You can see these classes in action on the theme test page at `/theme-test`. This page demonstrates all the
theme-specific classes and allows you to switch between themes to see how they adapt.

## Extending

To add more theme-specific classes, follow the pattern in `globals.css`:

```css
.your-new-class {
  @apply [light-theme-styles] dark:[dark-theme-styles] 
         theme-cyberpunk:[cyberpunk-theme-styles] 
         theme-forest:[forest-theme-styles];
}
```

## Migration Guide

To update existing components:

1. Identify hardcoded color classes (e.g., `text-blue-600`, `dark:text-blue-400`)
2. Determine the purpose of the text (title, subtitle, body, link)
3. Replace with the appropriate theme-specific class
4. Test with all themes to ensure the colors look appropriate

Priority components to update:

- Navbar
- Footer
- Blog post components
- Project components
- Page headers