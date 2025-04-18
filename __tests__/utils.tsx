import React from 'react';
import {render as rtlRender, RenderOptions} from '@testing-library/react';
import {ThemeProvider} from '@/components/theme-provider';

/**
 * Custom render function that wraps the component with necessary providers
 * This makes testing components that depend on context providers easier
 */
function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  const Wrapper = ({children}: { children: React.ReactNode }) => {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    );
  };

  return rtlRender(ui, {wrapper: Wrapper, ...options});
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override the render method
export {render};
