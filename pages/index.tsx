import { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Store, StoreDto, storeDtoToStore } from '@typings/store';

import MapSetion from '@components/MapSetion';
import useStores from '@swr/useStores';
import HomeHeader from '@components/HomeHeader';
import DetailSection from '@components/DetailSection';

interface Props {
  storeList: Store[];
}

const Home: NextPage<Props> = ({ storeList }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(storeList);
  }, [initializeStores, storeList]);

  return (
    <Fragment>
      <NextSeo
        title="매장 지도"
        description="Next.js 네이버 지도 샘플 프로젝트"
        canonical="https://foodmap.sukwoo.kr"
        openGraph={{
          url: 'https://foodmap.sukwoo.kr',
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
  const storeDtoList: StoreDto[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store`).then((response) =>
    response.json(),
  );

  const storeList = storeDtoList.map((storeDto) => storeDtoToStore(storeDto));

  return {
    props: { storeList },
  };
}
