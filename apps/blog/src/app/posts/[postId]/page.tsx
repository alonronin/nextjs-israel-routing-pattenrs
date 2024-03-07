import { ContentWrapper, Paragraph, Title } from '@nrp/components/server';
import Link from 'next/link';

export default async function Page({ params }: { params: { postId: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  ).then((res) => res.json());

  return (
    <ContentWrapper>
      <Title className="capitalize">{post.title}</Title>

      <Paragraph className="capitalize">{post.body}</Paragraph>
    </ContentWrapper>
  );
}
