import { Fragment } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Header from '@components/Header';
import FeedbackSection from '@components/FeedbackSection';

import type { FeedbackDTO } from '@typings/feedback';

interface Props {
  feedbackList: FeedbackDTO[];
}

export const FeedbackPage: NextPage<Props> = ({ feedbackList }) => {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="Next.js 네이버 지도 샘플 프로젝트 - 피드백 페이지"
        canonical="https://foodmap.sukwoo.kr/feedback"
        openGraph={{
          url: 'https://foodmap.sukwoo.kr/feedback',
        }}
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        <FeedbackSection initialFeedbackList={feedbackList} />
      </main>
    </Fragment>
  );
};
export default FeedbackPage;

export async function getStaticProps() {
  const feedbackList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/feedback`).then((response) =>
    response.json(),
  );

  return {
    props: { feedbackList },
  };
}
