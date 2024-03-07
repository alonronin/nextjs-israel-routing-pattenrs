import { ReactNode } from 'react';

export function ContentWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}
