import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { CURRENT_STORE_KEY } from '@swr/useCurrentStore';
import type { Store } from '@typings/store';
import { DetailSectionStyle } from './style';
import DetailHeader from '@components/DetailHeader';
import DetailContent from '@components/DetailContent';

const DetailSection = () => {
  const { data: currentStore } = useSWR<Store>(CURRENT_STORE_KEY);
  const [expanded, setExpanded] = useState(false);

  const expandedEvent = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <DetailSectionStyle className={` ${expanded && 'expanded'} ${currentStore && 'selected'}`}>
      <DetailHeader currentStore={currentStore} expanded={expanded} onClickArrow={expandedEvent} />
      <DetailContent currentStore={currentStore} expanded={expanded} />
    </DetailSectionStyle>
  );
};
export default DetailSection;
