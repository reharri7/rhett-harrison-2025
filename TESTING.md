# Testing Guide for Rhett Harrison Portfolio

This document provides guidelines and best practices for writing tests for the Rhett Harrison portfolio project.

## Testing Framework

This project uses Jest and React Testing Library for testing React components. The testing infrastructure is set up to:

- Run tests with `npm test`
- Generate coverage reports with `npm run test:coverage`
- Automatically run tests on changed files during pre-commit hooks

## Test Coverage Goals

The project aims for 70% test coverage across:

- Statements
- Branches
- Functions
- Lines

## Test File Organization

Test files should be placed in the `__tests__` directory and follow these naming conventions:

- Component tests: `ComponentName.test.tsx`
- Utility tests: `utility-name.test.ts`
- API route tests: `api/route-name.test.ts`
- Integration tests: `integration/feature-name.test.tsx`

## Testing Templates

The project includes test templates to help you get started:

- `__tests__/templates/component-test-template.tsx`: Template for component tests
- `__tests__/templates/integration-test-template.tsx`: Template for integration tests

## Testing Utilities

The project includes several testing utilities:

- `__tests__/utils.tsx`: Custom render function that wraps components with necessary providers
- `__tests__/a11y-test-utils.tsx`: Utilities for testing accessibility

## Testing Standards

### Component Tests

All component tests should:

1. Test rendering (does it render without errors?)
2. Test props and variants (does it handle different props correctly?)
3. Test user interactions (clicks, inputs, etc.)
4. Test accessibility (using the `checkA11y` utility)

Example:

```typescript
import React from 'react';
import {fireEvent, render, screen} from '../utils';
import {ComponentName} from '@/components/path/to/component';
import {checkA11y} from '../a11y-test-utils';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName>Test Content</ComponentName>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('handles interactions correctly', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick}>Click Me</ComponentName>);
    
    const element = screen.getByText('Click Me');
    fireEvent.click(element);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has no accessibility violations', async () => {
    await checkA11y(<ComponentName>Accessible Component</ComponentName>);
  });
});
```

### Utility Tests

Utility tests should:

1. Test the function with various inputs
2. Test edge cases and error handling
3. Test all branches of conditional logic

Example:

```typescript
import {utilityFunction} from '@/lib/utils';

describe('utilityFunction', () => {
  it('handles normal input correctly', () => {
    expect(utilityFunction('normal input')).toBe('expected output');
  });

  it('handles edge cases correctly', () => {
    expect(utilityFunction('')).toBe('default output');
    expect(utilityFunction(null)).toBe('default output');
  });
});
```

### API Route Tests

API route tests should:

1. Test the response status and headers
2. Test the response body
3. Test error handling
4. Mock any dependencies

Example:

```typescript
import {GET} from '@/app/api/route-name/route';
import {mockDependency} from '@/lib/dependency';

// Mock dependencies
jest.mock('@/lib/dependency', () => ({
  mockDependency: jest.fn().mockReturnValue('mocked data'),
}));

describe('API Route', () => {
  it('returns the correct response', async () => {
    const response = await GET();
    
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json');
    
    const data = await response.json();
    expect(data).toEqual({ success: true, data: 'mocked data' });
  });
});
```

### Integration Tests

Integration tests should:

1. Test complete user flows
2. Mock API calls and external dependencies
3. Test error states
4. Check accessibility throughout the flow

## Pre-commit Hooks

The project uses Husky and lint-staged to run tests on changed files before commit. This helps ensure that new code
maintains or improves test coverage.

## CI/CD Integration

The project's CI workflow runs tests with coverage and uploads the reports to Codecov. The build will fail if coverage
drops below the thresholds specified in jest.config.js.

## Best Practices

1. **Write tests as you code**: Don't wait until after implementing a feature to write tests.
2. **Focus on behavior, not implementation**: Test what the component does, not how it does it.
3. **Use meaningful assertions**: Make your test assertions clear and specific.
4. **Keep tests independent**: Each test should be able to run independently of others.
5. **Mock external dependencies**: Use Jest's mocking capabilities to isolate the code being tested.
6. **Test edge cases**: Consider what happens with empty, null, or unexpected inputs.
7. **Test accessibility**: Use the `checkA11y` utility to ensure components meet accessibility standards.

## Troubleshooting

- If tests are failing in CI but passing locally, check for environment-specific issues.
- If you're having trouble with mocks, check that you're mocking at the correct level.
- If you're seeing timeout errors, you may need to increase the timeout for that test.