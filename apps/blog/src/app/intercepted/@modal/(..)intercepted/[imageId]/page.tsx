import { Photo } from '../../../../components/photo';
import { Suspense } from 'react';
import { Loader2 } from 'lucide-react';
import { Modal } from '../../../../components/modal';

export default async function Page({
  params,
}: {
  params: { imageId: string };
}) {
  return (
    <Modal title="Intercepted Route">
      <div className="min-h-[100px] flex items-center justify-center">
        <Suspense fallback={<Loader2 className="animate-spin" />}>
          <Photo imageId={params.imageId} />
        </Suspense>
      </div>
    </Modal>
  );
}
