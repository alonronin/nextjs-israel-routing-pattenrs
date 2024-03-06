import { ReactNode } from 'react';
import { cn } from '@nrp/utils';

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('container mx-auto p-4', className)}>{children}</div>
  );
}
