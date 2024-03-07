import { Title } from '@nrp/components/server';
import Link from 'next/link';

export async function Photos({ title, page }: { title: string; page: string }) {
  const photos = await fetch(
    'https://jsonplaceholder.typicode.com/photos',
  ).then((res) => res.json());

  return (
    <>
      <Title>{title}</Title>

      <ul className="p-4 grid grid-cols-5 gap-4">
        {photos
          .slice(0, 20)
          .map((photo: { id: string; thumbnailUrl: string; title: string }) => (
            <li key={photo.id} className="overflow-hidden rounded-md border">
              <Link href={`/${page}/${photo.id}`} scroll={false}>
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="w-full object-cover transition-all hover:scale-105"
                />
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
