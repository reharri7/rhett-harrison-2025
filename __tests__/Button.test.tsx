import React from 'react';
import {fireEvent, render, screen} from './utils';
import {Button} from '@/components/ui/button';
import {checkA11y} from './a11y-test-utils';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button', {name: /test button/i})).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button', {name: /click me/i});
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="destructive">Destructive Button</Button>);
    const button = screen.getByRole('button', {name: /destructive button/i});

    // Check if the button has the destructive class
    expect(button.className).toContain('bg-destructive');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button', {name: /disabled button/i});

    expect(button).toBeDisabled();
  });

  it('has no accessibility violations', async () => {
    await checkA11y(<Button>Accessible Button</Button>);
  });

  it('has no accessibility violations when disabled', async () => {
    await checkA11y(<Button disabled>Disabled Button</Button>);
  });

  it('has no accessibility violations with different variants', async () => {
    await checkA11y(<Button variant="destructive">Destructive Button</Button>);
    await checkA11y(<Button variant="outline">Outline Button</Button>);
    await checkA11y(<Button variant="secondary">Secondary Button</Button>);
    await checkA11y(<Button variant="ghost">Ghost Button</Button>);
    await checkA11y(<Button variant="link">Link Button</Button>);
  });
});
