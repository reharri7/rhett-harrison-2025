# Next.js Portfolio Project

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Overview

This portfolio website is built with:

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **MDX** - Markdown with JSX for content

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `ui/` - UI components (buttons, inputs, etc.)
- `lib/` - Utility functions and shared code
- `public/` - Static assets
- `hooks/` - Custom React hooks
- `actions/` - Server actions for Next.js App Router
- `__tests__/` - Test files
- `.github/workflows/` - GitHub Actions CI/CD workflows

## Improvement Plan

We have a comprehensive [Improvement Plan](./improvement-plan.md) that outlines steps to enhance the codebase. Key areas
for improvement include:

1. **Testing** - Expand test coverage beyond the current Button component
2. **Performance** - Optimize images, implement code splitting, and improve caching
3. **Accessibility** - Conduct audits and ensure keyboard navigation works properly
4. **Code Organization** - Standardize component structure and implement feature-based organization
5. **Documentation** - Add comprehensive documentation for components and the project
6. **Developer Experience** - Enhance linting, add development tools, and implement CI/CD
7. **State Management** - Implement consistent patterns for state management
8. **Error Handling** - Add comprehensive error handling throughout the application

## Implementation Priority

For immediate improvements, focus on these high-impact, low-effort tasks:

1. Add Jest coverage reporting (`npm run test:coverage`)
2. Use Next.js Image component for all images
3. Create a test-utils.tsx file with common testing utilities
4. Add ESLint plugins for accessibility
5. Add JSDoc comments to components

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Use the UI components from the `components/ui` directory

### Testing

- Write tests for all new components
- Follow the pattern in `__tests__/Button.test.tsx`
- Run tests with `npm test`

### Accessibility

- Ensure all components are accessible
- Use semantic HTML elements
- Add appropriate ARIA attributes
- Test with keyboard navigation

## Continuous Integration and Deployment

This project uses GitHub Actions for continuous integration and deployment:

- **CI Workflow** - Runs linting, tests with coverage, and builds the application on every push and pull request
- **Lighthouse CI** - Runs Lighthouse audits to ensure performance, accessibility, best practices, and SEO standards
- **Pull Request Validation** - Validates PR titles against conventional commit standards and checks for dependency
  vulnerabilities
- **Deploy Preview** - Creates a preview deployment for each pull request using Vercel

For more details, see the [GitHub Actions README](./.github/workflows/README.md).

## Analytics

This project includes analytics to track user behavior and improve the user experience:

### Vercel Analytics

The project uses [Vercel Analytics](https://vercel.com/analytics) for privacy-friendly web analytics. This is
automatically enabled and requires no configuration.

### Google Analytics

The project also supports Google Analytics for more detailed analytics:

1. Create a Google Analytics 4 property in the [Google Analytics console](https://analytics.google.com/)
2. Get your Measurement ID (starts with G-)
3. Add your Measurement ID to the `.env` file:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

The Google Analytics integration:

- Automatically tracks page views
- Works with Next.js App Router
- Respects user privacy settings
- Only loads if the Measurement ID is provided

### Running CI Checks Locally

You can run the CI checks locally before pushing your changes:

```bash
npm run ci
```

This will run the same checks as the CI workflow: linting, tests with coverage, and building the application.

You can also run Lighthouse CI checks locally:

```bash
npm run lighthouse
```

This will build the application and run Lighthouse CI to audit performance, accessibility, best practices, and SEO.

## Contributing

1. Review the [Improvement Plan](./improvement-plan.md)
2. Pick a task based on priority and your expertise
3. Create a branch for your changes
4. Make your changes following the development guidelines
5. Add tests for your changes
6. Submit a pull request

## License

MIT
