import { ContentWrapper, Title } from '@nrp/components/server';
import Link from 'next/link';

export default async function Page() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json(),
  );

  return (
    <ContentWrapper>
      <Title>Posts</Title>

      <ul className="flex flex-col gap-2">
        {posts.map((post: { id: string; title: string }) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="capitalize hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
}
