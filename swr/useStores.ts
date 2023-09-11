import { useCallback } from 'react';
import { StoreDto } from '@typings/store';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

//모든 스토어 저장

const useStores = () => {
  const initializeStores = useCallback((stores: StoreDto[]) => {
    mutate(STORE_KEY, stores);
  }, []);

  return {
    initializeStores,
  };
};
export default useStores;
