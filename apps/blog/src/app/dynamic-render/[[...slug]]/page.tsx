import { Photo } from '../../components/photo';
import { Suspense } from 'react';
import { Modal } from '../../components/modal';
import { Loader2 } from 'lucide-react';
import { Photos } from '../../components/photos';
import { ContentWrapper } from '@nrp/components/server';

export default async function Page({ params }: { params: { slug: string[] } }) {
  const [photoId] = params.slug ?? [];

  if (!photoId)
    return (
      <Suspense fallback={'Loading...'}>
        <Photos title="Dynamic Render" page="dynamic-render" />
      </Suspense>
    );

  return (
    <ContentWrapper>
      <Photos title="Dynamic Render" page="dynamic-render" />

      {photoId && (
        <Modal>
          <div className="min-h-[100px] flex items-center justify-center">
            <Suspense fallback={<Loader2 className="animate-spin" />}>
              <Photo imageId={photoId} />
            </Suspense>
          </div>
        </Modal>
      )}
    </ContentWrapper>
  );
}
