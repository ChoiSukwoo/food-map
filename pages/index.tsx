import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';

import { StoreDto } from '@typings/store';

import MapSetion from '@components/MapSetion';

import useStores from '@swr/useStores';
import HomeHeader from '@components/HomeHeader';
import DetailSection from '@components/DetailSection';
import { NextSeo } from 'next-seo';

interface Props {
  stores: StoreDto[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.js 시작하기 강의를 위한 매장 지도 서비스입니다."
        canonical="https://inflearn-nextjs.vercel.app"
        openGraph={{
          url: 'https://inflearn-nextjs.vercel.app',
        }}
      />
      <HomeHeader />
      <main style={{ position: 'relative', width: '100dvw', height: '100dvh', overflow: 'hidden' }}>
        <MapSetion />
        <DetailSection />
      </main>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  // const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((response) => response.json());
  const stores = (await import('public/json/stores.json')).default;

  return {
    props: { stores },
  };
}
