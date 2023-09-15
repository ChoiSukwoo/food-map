import { useCallback } from 'react';
import useSWR from 'swr';
import type { LatLng } from '@typings/store';
import { MAP_KEY } from '@swr/useMap';

export const INITIAL_CENTER: LatLng = [37.5262411, 126.99289439];
export const INITIAL_ZOOM = 10;

const useMapOptions = () => {
  const { data: map } = useSWR(MAP_KEY);

  const resetMapOptions = useCallback(() => {
    /** https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Map.html#morph__anchor */
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    const mapCenter = map.getCenter();
    const center: LatLng = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();

    return { center, zoom };
  }, [map]);

  return {
    resetMapOptions,
    getMapOptions,
  };
};
export default useMapOptions;
