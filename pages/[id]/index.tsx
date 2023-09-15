import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Store, StoreDto, storeDtoToStore } from '@typings/store';
import DetailHeader from '@components/DetailHeader';
import DetailContent from '@components/DetailContent';
import useCurrentStore from '@swr/useCurrentStore';
import { NextSeo } from 'next-seo';

interface Props {
  store: Store;
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
  const storeDtoList: StoreDto[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store`).then((response) =>
    response.json(),
  );
  const paths = storeDtoList.map((storeDto) => ({ params: { id: String(storeDto.id) } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const storeDto = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/store/${params?.id}`).then((response) =>
    response.json(),
  );

  if (!storeDto) {
    return {
      notFound: true,
    };
  }

  const store = storeDtoToStore(storeDto);

  return { props: { store } };
};
