# Developer Guidelines for Next.js Portfolio Project

This document provides essential information for developers working on this Next.js portfolio project.

## Build/Configuration Instructions

### Prerequisites

- Node.js (v18 or later recommended)
- npm (v9 or later recommended)

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Next.js development server at http://localhost:3000.

### Building for Production

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

### Environment Variables

The project uses a `.env` file for environment variables. Create a `.env` file in the root directory if it doesn't
exist.

## Testing Information

### Testing Framework

This project uses Jest and React Testing Library for testing React components.

### Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode (useful during development):

```bash
npm run test:watch
```

### Adding New Tests

1. Create test files in the `__tests__` directory
2. Name your test files with the `.test.tsx` or `.test.ts` extension
3. Use the following import pattern for React Testing Library:
   ```typescript
   import { render, screen, fireEvent } from '@testing-library/react';
   ```

### Test Example

Here's a simple example of a component test:

```typescript
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Button} from '@/components/ui/button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Test
    Button < /Button>);
    expect(screen.getByRole('button', {name: /test button/i})).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick = {handleClick} > Click
    Me < /Button>);

    const button = screen.getByRole('button', {name: /click me/i});
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Additional Development Information

### Project Structure

- `app/`: Next.js App Router pages and layouts
- `components/`: Reusable React components
- `components/ui/`: UI components (buttons, inputs, etc.)
- `lib/`: Utility functions and shared code
- `public/`: Static assets
- `hooks/`: Custom React hooks
- `actions/`: Server actions for Next.js App Router

### UI Component Library

The project uses a custom UI component library built with:

- Tailwind CSS for styling
- Radix UI for accessible primitives
- class-variance-authority for component variants

### Code Style

- TypeScript is used throughout the project
- ESLint is configured with Next.js recommended rules
- The project follows the Next.js App Router pattern for routing

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@/` points to the root directory
  ```typescript
  // Example
  import { Button } from '@/components/ui/button';
  import { cn } from '@/lib/utils';
  ```

### MDX Support

The project supports MDX for content:

- MDX files are located in the `app/blog/*/content.mdx` pattern
- Use the `@/mdx-components.tsx` file to customize MDX rendering

### Deployment

The project is configured for deployment on Vercel, which automatically handles:

- Build optimization
- Image optimization
- Edge functions
- Analytics