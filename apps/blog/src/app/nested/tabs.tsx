'use client';

import { Tabs, TabsList, TabsTrigger } from '@nrp/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavigationTabs() {
  const pathname = usePathname();

  return (
    <Tabs defaultValue={pathname}>
      <TabsList>
        <TabsTrigger value="/nested">
          <Link href="/nested">Account</Link>
        </TabsTrigger>
        <TabsTrigger value="/nested/password">
          <Link href="/nested/password">Password</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
