'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type NavigationItem = { title: string; url: string; exact?: boolean };

export function Navigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={JSON.stringify(item)}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink
                active={
                  item.exact
                    ? pathname === item.url
                    : pathname.startsWith(item.url)
                }
                className={navigationMenuTriggerStyle()}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
