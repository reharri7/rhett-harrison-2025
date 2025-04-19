import React from 'react';
import {render} from './utils';
import {axe, toHaveNoViolations} from 'jest-axe';

// Add jest-axe custom matchers
expect.extend(toHaveNoViolations);

/**
 * Checks a React component for accessibility violations
 *
 * @param ui - The React component to test
 * @param options - Optional axe options to customize the test
 * @returns Promise that resolves when the test is complete
 *
 * @example
 * // Basic usage
 * it('has no accessibility violations', async () => {
 *   await checkA11y(<MyComponent />);
 * });
 *
 * @example
 * // With custom options
 * it('has sufficient color contrast', async () => {
 *   await checkA11y(<MyComponent />, {
 *     rules: {
 *       'color-contrast': { enabled: true },
 *     },
 *   });
 * });
 */
export async function checkA11y(
  ui: React.ReactElement,
  options?: Parameters<typeof axe>[1]
) {
  const {container} = render(ui);
  const results = await axe(container, options);
  expect(results).toHaveNoViolations();
}

// Add a simple test to make Jest happy
describe('checkA11y utility', () => {
  it('exports a function', () => {
    expect(typeof checkA11y).toBe('function');
  });
});
