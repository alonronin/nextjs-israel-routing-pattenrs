import { ModeToggle, Navigation, NavigationItem } from '../';

export function Header({ items }: { items: NavigationItem[] }) {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between container p-4">
        <Navigation items={items} />
        <ModeToggle />
      </div>
    </header>
  );
}
