import { Fragment } from 'react';
import { NextPage } from 'next';
import Header from '@components/Header';
import { NextSeo } from 'next-seo';

export const FeedbackPage: NextPage = () => {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://inflearn-nextjs.vercel.app/feedback"
        openGraph={{
          url: 'https://inflearn-nextjs.vercel.app/feedback',
        }}
      />
      <Header />
    </Fragment>
  );
};
export default FeedbackPage;
