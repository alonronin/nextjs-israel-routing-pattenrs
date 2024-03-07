import { ContentWrapper, Title } from '@nrp/components/server';

export default async function Page() {
  const albums = await fetch(
    `https://jsonplaceholder.typicode.com/albums`,
  ).then((res) => res.json());

  return (
    <ContentWrapper>
      <Title size="small">Albums</Title>

      <ul>
        {albums.map((album: { id: string; title: string }) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </ContentWrapper>
  );
}
