import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { StoreDto } from '@typings/store';
import DetailHeader from '@components/DetailHeader';
import DetailContent from '@components/DetailContent';
import useCurrentStore from '@swr/useCurrentStore';
import { NextSeo } from 'next-seo';

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
        title={store.name}
        description="Next.js 네이버 지도 샘플 프로젝트 - 매장 상세 페이지"
        canonical={`https://foodmap.sukwoo.kr/${store.name}`}
        openGraph={{
          url: `https://foodmap.sukwoo.kr/${store.name}`,
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
  const store = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store/${params?.name}`).then((response) =>
    response.json(),
  );

  if (!store) {
    return {
      notFound: true,
    };
  }

  return { props: { store } };
};
