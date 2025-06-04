// src/components/common/ResponsiveContainer.tsx
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    as?: React.ElementType;
    fluid?: boolean;
    className?: string;
    noPadding?: boolean;
}

/**
 * ResponsiveContainer - A reusable container component that maintains consistent
 * responsive behavior across the site.
 *
 * @param children - The content to render inside the container
 * @param as - The HTML element or component to render as (default: 'div')
 * @param fluid - Whether the container should be full-width with just padding (no max-width)
 * @param className - Additional CSS classes to apply
 * @param noPadding - Whether to remove the default horizontal padding
 */
const ResponsiveContainer = forwardRef<HTMLDivElement, ResponsiveContainerProps>(
    ({ children, as: Component = "div", fluid = false, className, noPadding = false, ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    "w-full",
                    !fluid && "mx-auto max-w-[1440px]",
                    !noPadding && "px-4 sm:px-6 md:px-8 lg:px-[120px]",
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

ResponsiveContainer.displayName = "ResponsiveContainer";

/**
 * ResponsiveSection - A specialized ResponsiveContainer for page sections with
 * consistent vertical padding.
 */
export const ResponsiveSection = forwardRef<HTMLDivElement, ResponsiveContainerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <ResponsiveContainer
                ref={ref}
                className={cn("py-10 md:py-16 lg:py-20", className)}
                {...props}
            >
                {children}
            </ResponsiveContainer>
        );
    }
);

ResponsiveSection.displayName = "ResponsiveSection";

export default ResponsiveContainer;