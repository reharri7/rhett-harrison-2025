import React from 'react';
import {fireEvent, render, screen} from './utils';
import {Input} from '@/components/ui/input';

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
});
