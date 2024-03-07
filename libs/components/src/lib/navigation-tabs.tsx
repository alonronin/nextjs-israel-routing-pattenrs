'use client';

import { Tabs, TabsList, TabsTrigger, NavigationItem } from '..';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function NavigationTabs({
  items,
}: {
  items: Array<Pick<NavigationItem, 'url' | 'title'>>;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Tabs defaultValue={pathname}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger
            value={item.url}
            onClick={(e) => {
              router.push(item.url);
            }}
          >
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
