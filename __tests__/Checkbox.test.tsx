import React from 'react';
import {fireEvent, render, screen} from './utils';
import {Checkbox} from '@/components/ui/checkbox';
import {checkA11y} from './a11y-test-utils';

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    render(<Checkbox aria-label="Test Checkbox"/>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleCheckedChange = jest.fn();
    render(<Checkbox aria-label="Click Me" onCheckedChange={handleCheckedChange}/>);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('applies custom className correctly', () => {
    render(<Checkbox className="custom-class" aria-label="Custom Checkbox"/>);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox.className).toContain('custom-class');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox disabled aria-label="Disabled Checkbox"/>);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeDisabled();
  });

  it('is checked when defaultChecked prop is true', () => {
    render(<Checkbox defaultChecked aria-label="Checked Checkbox"/>);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toHaveAttribute('data-state', 'checked');
  });

  it('forwards ref to the checkbox element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} aria-label="Ref Checkbox"/>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.getAttribute('role')).toBe('checkbox');
  });

  it('has no accessibility violations', async () => {
    await checkA11y(<Checkbox aria-label="Accessible Checkbox"/>);
  });

  it('has no accessibility violations when disabled', async () => {
    await checkA11y(<Checkbox disabled aria-label="Disabled Checkbox"/>);
  });

  it('has no accessibility violations when checked', async () => {
    await checkA11y(<Checkbox defaultChecked aria-label="Checked Checkbox"/>);
  });

  it('has no accessibility violations with aria attributes', async () => {
    await checkA11y(
      <Checkbox
        aria-label="Required Checkbox"
        aria-required="true"
      />
    );
  });
});