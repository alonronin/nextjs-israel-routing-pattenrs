import { cn } from '@nrp/utils';
import { HTMLAttributes } from 'react';

export function Paragraph({
  children,
  className,
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>
      {children}
    </p>
  );
}
