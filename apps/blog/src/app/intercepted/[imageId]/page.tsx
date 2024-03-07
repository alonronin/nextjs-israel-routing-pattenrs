import { ContentWrapper, Title } from '@nrp/components/server';
import { Photo } from '../../components/photo';

export default async function Page({
  params,
}: {
  params: { imageId: string };
}) {
  return (
    <ContentWrapper>
      <Title>Intercepted Route</Title>

      <div className="w-[600px] self-center">
        <Photo imageId={params.imageId} />
      </div>
    </ContentWrapper>
  );
}
