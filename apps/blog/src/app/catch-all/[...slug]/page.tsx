import { ContentWrapper, Title } from '@nrp/components/server';

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <ContentWrapper>
      <Title>From Catch All</Title>
      <pre>{JSON.stringify(params.slug, null, 2)}</pre>
    </ContentWrapper>
  );
}
