import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@nrp/utils';

type Tag = 'h1' | 'h2' | 'h3';

const titleVariants = cva('scroll-m-20 font-semibold tracking-tight', {
  variants: {
    size: {
      large: 'text-4xl font-extrabold lg:text-5xl',
      medium: 'border-b pb-2 text-3xl first:mt-0',
      small: 'text-2xl',
    },
  },
  defaultVariants: {
    size: 'large',
  },
});

const tags = {
  large: 'h1',
  medium: 'h2',
  small: 'h3',
};

export interface TitleProps
  extends React.ComponentProps<Tag>,
    VariantProps<typeof titleVariants> {}

export function Title({ size, children, className, ...props }: TitleProps) {
  const T = tags[size || 'large'] as Tag;
  return (
    <T className={cn(titleVariants({ size }), className)} {...props}>
      {children}
    </T>
  );
}
