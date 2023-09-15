import { useCallback } from 'react';
import { Store } from '@typings/store';
import { mutate } from 'swr';

export const STORE_KEY = '/stores';

//모든 스토어 저장

const useStores = () => {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate(STORE_KEY, stores);
  }, []);

  return {
    initializeStores,
  };
};
export default useStores;
