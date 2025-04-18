import * as React from 'react';

import {cn} from '@/lib/utils';

/**
 * Input component props interface
 *
 * @interface InputProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>} - Extends the HTML input element attributes
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

/**
 * Input component for collecting user input
 *
 * @component
 * @example
 * // Basic input
 * <Input placeholder="Enter your name" />
 *
 * @example
 * // Password input
 * <Input type="password" placeholder="Enter your password" />
 *
 * @example
 * // Disabled input
 * <Input disabled placeholder="This input is disabled" />
 *
 * @example
 * // Input with event handler
 * <Input
 *   placeholder="Enter email"
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
