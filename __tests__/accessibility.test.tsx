import React from 'react';
import {render} from './utils';
import {axe, toHaveNoViolations} from 'jest-axe';
import {Button} from '@/components/ui/button';

// Add jest-axe custom matchers
expect.extend(toHaveNoViolations);

describe('Accessibility Tests', () => {
  it('Button component should not have accessibility violations', async () => {
    const {container} = render(<Button>Accessible Button</Button>);

    // Run axe on the rendered component
    const results = await axe(container);

    // Check for accessibility violations
    expect(results).toHaveNoViolations();
  });

  // Example of testing a component with ARIA attributes
  it('Button with aria-label should be accessible', async () => {
    const {container} = render(
      <Button aria-label="Close dialog">
        <span aria-hidden="true">×</span>
      </Button>
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // This test demonstrates how to test for specific accessibility rules
  it('Button should have sufficient color contrast', async () => {
    const {container} = render(<Button variant="default">High Contrast Button</Button>);

    const results = await axe(container, {
      rules: {
        'color-contrast': {enabled: true},
      },
    });

    expect(results).toHaveNoViolations();
  });
});

// Note: To use this test file, you'll need to install jest-axe:
// npm install --save-dev jest-axe @types/jest-axe
