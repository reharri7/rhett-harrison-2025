import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

/**
 * Button variants using class-variance-authority
 * This defines the visual styles for different button variants and sizes
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Button component props interface
 *
 * @interface ButtonProps
 * @extends {React.ButtonHTMLAttributes<HTMLButtonElement>} - Extends the HTML button element attributes
 * @extends {VariantProps<typeof buttonVariants>} - Adds variant props from class-variance-authority
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, the button will be rendered as a child of the component passed to it
   * This is useful when you want to use the button styles with another component like Link
   * @default false
   */
  asChild?: boolean;
}

/**
 * Button component with various styles and states
 *
 * @component
 * @example
 * // Default button
 * <Button>Click me</Button>
 *
 * @example
 * // Destructive button with large size
 * <Button variant="destructive" size="lg">Delete</Button>
 *
 * @example
 * // Button as a link
 * <Button asChild>
 *   <Link href="/about">About</Link>
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };