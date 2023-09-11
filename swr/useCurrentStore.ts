import { useCallback } from 'react';
import { mutate } from 'swr';
import type { StoreDto } from '@typings/store';

export const CURRENT_STORE_KEY = '/current-store';

//현재 스토어 저장
const useCurrentStore = () => {
  const initializeCurrentStore = useCallback((store: StoreDto) => {
    mutate(CURRENT_STORE_KEY, store);
  }, []);

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null);
  }, []);

  return {
    initializeCurrentStore,
    clearCurrentStore,
  };
};
export default useCurrentStore;
