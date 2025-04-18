import * as React from 'react';

import {cn} from '@/lib/utils';

/**
 * Card component interface
 *
 * @interface CardProps
 * @extends {React.HTMLAttributes<HTMLDivElement>} - Extends the HTML div element attributes
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}

/**
 * Card component for displaying content in a contained, styled box
 *
 * @component
 * @example
 * // Basic card
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <p>Card content goes here</p>
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
));
Card.displayName = 'Card';

/**
 * CardHeader component for the top section of a card
 *
 * @component
 * @example
 * <CardHeader>
 *   <CardTitle>Card Title</CardTitle>
 *   <CardDescription>Card Description</CardDescription>
 * </CardHeader>
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

/**
 * CardTitle component for the title of a card
 *
 * @component
 * @example
 * <CardTitle>Card Title</CardTitle>
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({className, ...props}, ref) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

/**
 * CardDescription component for the description text of a card
 *
 * @component
 * @example
 * <CardDescription>This is a description of the card content</CardDescription>
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

/**
 * CardContent component for the main content area of a card
 *
 * @component
 * @example
 * <CardContent>
 *   <p>This is the main content of the card</p>
 * </CardContent>
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/**
 * CardFooter component for the bottom section of a card
 *
 * @component
 * @example
 * <CardFooter>
 *   <Button>Cancel</Button>
 *   <Button>Submit</Button>
 * </CardFooter>
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent};
