import Image from 'next/image';
import type { StoreDto } from '@typings/store';
import Naver from 'public/images/naver.png';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { BasicInfoStyle, DescriptionStyle, DetailContentStyle, ImageStyle, MenusStyle } from './styles';

type Props = {
  currentStore?: StoreDto;
  expanded: boolean;
};

const DetailContent = ({ currentStore, expanded }: Props) => {
  if (!currentStore) return null;
  return (
    <DetailContentStyle className={`${expanded && 'expanded'}`}>
      <ImageStyle>
        {currentStore.images.slice(0, 3).map((image) => (
          <div style={{ position: 'relative', maxWidth: 120, height: 80 }} key={image}>
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              sizes="120px"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              priority
            />
          </div>
        ))}
      </ImageStyle>
      {expanded && (
        <>
          <DescriptionStyle>
            <h2>설명</h2>
            <p>{currentStore.description}</p>
          </DescriptionStyle>
          <hr />
          <BasicInfoStyle>
            <h2>기본 정보</h2>
            <div className="address">
              <IoLocationOutline size={20} />
              <span>{currentStore.address || '정보가 없습니다.'}</span>
            </div>
            <div className="phone">
              <IoCallOutline size={20} />
              <span>{currentStore.phone || '정보가 없습니다.'}</span>
            </div>
            <div className="naverUrl">
              <Image src={Naver} width={20} height={20} alt="" />
              <a
                href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>네이버 상세 정보</span>
              </a>
            </div>
          </BasicInfoStyle>
          <hr />
          <MenusStyle>
            <h2>메뉴</h2>
            <ul>
              {currentStore.menus?.map((menu) => (
                <li className={'menu'} key={menu.name}>
                  <span className={'name'}>{menu.name}</span>
                  <span className={'price'}>{menu.price}</span>
                </li>
              ))}
            </ul>
          </MenusStyle>
        </>
      )}
    </DetailContentStyle>
  );
};
export default DetailContent;
