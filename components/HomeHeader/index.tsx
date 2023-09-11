import { useRouter } from 'next/router';
import { useCallback } from 'react';
import copy from 'copy-to-clipboard';

import Header from '@components/Header';
import { HeaderRightButton, HeaderRightLink } from './styles';

import useMapOptions from '@hooks/useMapOptions';

import Share from '@svg/share.svg';
import Feedback from '@svg/feedback.svg';

const HomeHeader = () => {
  const { resetMapOptions, getMapOptions } = useMapOptions();

  const router = useRouter();

  const replaceAndCopyUrl = useCallback(() => {
    const mapOptions = getMapOptions();
    const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;
    router.replace(query);
    copy(location.origin + query);
  }, [router, getMapOptions]);

  return (
    <Header
      onClickLogo={resetMapOptions}
      rightElement={[
        <HeaderRightButton
          onClick={replaceAndCopyUrl}
          key="Button"
          style={{ marginRight: 8 }}
          aria-label="페이지 공유 버튼"
        >
          <Share />
        </HeaderRightButton>,
        <HeaderRightLink href="/feedback" key="link" aria-label="피드백 페이지 이동 버튼">
          <Feedback />
        </HeaderRightLink>,
      ]}
    />
  );
};

export default HomeHeader;
