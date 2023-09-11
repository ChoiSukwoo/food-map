import { useCallback } from 'react';

import { ArrowButton, FlexRow, Header, ShareButton, Title } from './style';
import { IoIosArrowUp } from 'react-icons/io';
import { AiOutlineShareAlt } from 'react-icons/ai';
import type { StoreDto } from '@typings/store';
import copy from 'copy-to-clipboard';

interface Props {
  currentStore?: StoreDto;
  expanded: boolean;
  onClickArrow: () => void;
}

const DetailHeader = ({ currentStore, expanded, onClickArrow }: Props) => {
  const shareEvent = useCallback(() => {
    if (currentStore) {
      copy(location.origin + '/' + currentStore.name);
    }
  }, [currentStore]);

  return (
    <Header>
      <ArrowButton
        className={`${expanded && 'expanded'}`}
        onClick={onClickArrow}
        disabled={!currentStore}
        aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
      >
        <IoIosArrowUp size={20} color="#666666" />
      </ArrowButton>
      {!currentStore && <Title>매장을 선택해주세요</Title>}
      {currentStore && (
        <FlexRow>
          <Title>{currentStore.name}</Title>
          <ShareButton onClick={shareEvent} aria-label="매장 페이지 주소 클립보드 복사">
            <AiOutlineShareAlt size={20} color="#444444" />
          </ShareButton>
        </FlexRow>
      )}
    </Header>
  );
};
export default DetailHeader;
