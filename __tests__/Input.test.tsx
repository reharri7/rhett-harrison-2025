import React from 'react';
import {fireEvent, render, screen} from './utils';
import {Input} from '@/components/ui/input';
import {checkA11y} from './a11y-test-utils';

describe('Input Component', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test Input"/>);
    expect(screen.getByPlaceholderText('Test Input')).toBeInTheDocument();
  });

  it('handles user input', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} placeholder="Enter text"/>);

    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, {target: {value: 'Hello World'}});

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('Hello World');
  });

  it('applies custom className correctly', () => {
    render(<Input className="custom-class" placeholder="Custom Input"/>);
    const input = screen.getByPlaceholderText('Custom Input');

    expect(input.className).toContain('custom-class');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled placeholder="Disabled Input"/>);
    const input = screen.getByPlaceholderText('Disabled Input');

    expect(input).toBeDisabled();
  });

  it('accepts different input types', () => {
    render(<Input type="password" placeholder="Password Input"/>);
    const input = screen.getByPlaceholderText('Password Input');

    expect(input).toHaveAttribute('type', 'password');
  });

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Ref Input"/>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('INPUT');
  });

  it('has no accessibility violations', async () => {
    await checkA11y(<Input placeholder="Accessible Input"/>);
  });

  it('has no accessibility violations when disabled', async () => {
    await checkA11y(<Input disabled placeholder="Disabled Input"/>);
  });

  it('has no accessibility violations with different input types', async () => {
    await checkA11y(<Input type="text" placeholder="Text Input"/>);
    await checkA11y(<Input type="password" placeholder="Password Input"/>);
    await checkA11y(<Input type="email" placeholder="Email Input"/>);
    await checkA11y(<Input type="number" placeholder="Number Input"/>);
  });

  it('has no accessibility violations with aria attributes', async () => {
    await checkA11y(
      <Input
        aria-label="Search"
        aria-required="true"
        placeholder="Search"
      />
    );
  });
});
