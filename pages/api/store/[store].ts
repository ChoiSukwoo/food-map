import type { NextApiRequest, NextApiResponse } from 'next';
import { StoreDto } from '@typings/store';

export default async function handler(req: NextApiRequest, res: NextApiResponse<StoreDto | undefined>) {
  const query = req.query;
  const { store: storeNm } = query;

  const stores = (await import('public/json/stores.json')).default as unknown as StoreDto[];
  const store = stores.find((store) => store.name === storeNm);

  res.status(200).json(store);
}
