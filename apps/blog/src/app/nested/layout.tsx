import { ContentWrapper, Title } from '@nrp/components/server';
import { NavigationTabs } from '@nrp/components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContentWrapper>
      <Title>I am nested layout</Title>
      <NavigationTabs
        items={[
          { title: 'Account', url: '/nested' },
          { title: 'Password', url: '/nested/password' },
        ]}
      />

      {children}
    </ContentWrapper>
  );
}
