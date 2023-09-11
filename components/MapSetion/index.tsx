import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Map from '@components/Map';
import Markers from '@components/Markers';
import useMap from '@swr/useMap';
import useCurrentStore from '@swr/useCurrentStore';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@hooks/useMapOptions';
import type { NaverMap } from '@typings/map';
import type { Coordinates } from '@typings/store';

const MapSection = () => {
  /** url query 로부터 initial zoom, center 값 설정 */
  const router = useRouter();
  /**
   * router.asPath === '/?zoom={}&lat={}&lng={}'
   * https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams
   */
  router.query.slag;
  const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line react-hooks/exhaustive-deps
  const initialZoom = useMemo(() => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM), [query]);
  const initialCenter = useMemo<Coordinates>(
    () =>
      query.get('lat') && query.get('lng') ? [Number(query.get('lat')), Number(query.get('lng'))] : INITIAL_CENTER,
    [query],
  );

  /** onLoadMap */
  const { initializeMap } = useMap();
  const { clearCurrentStore } = useCurrentStore();
  const onLoadMap = (map: NaverMap) => {
    initializeMap(map);
    naver.maps.Event.addListener(map, 'click', clearCurrentStore);
  };

  return (
    <>
      <Map onLoad={onLoadMap} initialZoom={initialZoom} initialCenter={initialCenter} />
      <Markers />
    </>
  );
};
export default MapSection;
