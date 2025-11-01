import React from "react";

// Helper to combine class names
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Card wrapper
export const Card = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-white text-gray-900 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer group",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
Card.displayName = "Card";

// Card content wrapper
export const CardContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
));
CardContent.displayName = "CardContent";

// Card title
export const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = "CardTitle";

// Card description
export const CardDescription = React.forwardRef(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-gray-500", className)} {...props}>
    {children}
  </p>
));
CardDescription.displayName = "CardDescription";
