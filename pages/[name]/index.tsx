import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { StoreDto } from '@typings/store';
import DetailHeader from '@components/DetailHeader';
import DetailContent from '@components/DetailContent';
import useCurrentStore from '@swr/useCurrentStore';
import { NextSeo } from 'next-seo';
// import { NextSeo } from 'next-seo';

// import styles from '../styles/detail.module.scss';

interface Props {
  store: StoreDto;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const expanded = true;

  const router = useRouter();
  const { initializeCurrentStore } = useCurrentStore();

  if (router.isFallback) {
    return <div>...Loading</div>;
  }

  const goToMap = () => {
    initializeCurrentStore(store);
    router.push(`
      /?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}
    `);
  };

  return (
    <main>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://inflearn-nextjs.vercel.app/feedback"
        openGraph={{
          url: 'https://inflearn-nextjs.vercel.app/feedback',
        }}
      />
      <DetailHeader currentStore={store} expanded={expanded} onClickArrow={goToMap} />
      <DetailContent currentStore={store} expanded={expanded} />
    </main>
  );
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('public/json/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('public/json/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  if (!store) {
    return {
      notFound: true,
    };
  }

  return { props: { store } };
};
