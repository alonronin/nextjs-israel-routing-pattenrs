import { ContentWrapper, Title } from '@nrp/components/server';
import { Avatar, AvatarFallback, AvatarImage } from '@nrp/components';
import Link from 'next/link';

export default async function Page() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json(),
  );

  return (
    <ContentWrapper>
      <Title size="small">Users</Title>

      <ul className="flex flex-col gap-4">
        {users.map(
          (user: {
            id: string;
            name: string;
            username: string;
            email: string;
          }) => (
            <li key={user.id} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  className="bg-foreground"
                  src={`https://robohash.org/${user.username}`}
                  alt="@shadcn"
                />
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </li>
          ),
        )}
      </ul>
    </ContentWrapper>
  );
}
