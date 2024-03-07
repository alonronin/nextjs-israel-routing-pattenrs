import { Title } from '@nrp/components/server';

export default function Layout({
  children,
  users,
  albums,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  albums: React.ReactNode;
}) {
  return (
    <div>
      <Title>Parallel Layout</Title>

      {children}

      <div className="flex gap-4 p-4 justify-around">
        {users}
        {albums}
      </div>
    </div>
  );
}
