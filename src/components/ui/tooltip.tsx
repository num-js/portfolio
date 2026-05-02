import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipArrow = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Arrow>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
    <TooltipPrimitive.Arrow
        ref={ref}
        width={11}
        height={5}
        className={cn('fill-elevated/95 stroke-white/20', className)}
        {...props}
    />
));
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName;

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, children, ...props }, ref) => (
    <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                'z-[200] max-w-xs origin-[--radix-tooltip-content-transform-origin] rounded-md border border-white/15 bg-elevated/95 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg shadow-black/40 backdrop-blur-md',
                className,
            )}
            {...props}
        >
            {children}
            <TooltipArrow />
        </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipArrow };
