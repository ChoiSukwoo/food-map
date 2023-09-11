import { useCallback } from 'react';
import { mutate } from 'swr';
import type { Coordinates } from '@typings/store';
import type { NaverMap } from '@typings/map';

export const MAP_KEY = '/map';

const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    mutate(MAP_KEY, map);
  }, []);

  return {
    initializeMap,
  };
};
export default useMap;
