import type { NextApiRequest, NextApiResponse } from 'next';
import { StoreDto } from '@typings/store';

export default async function handler(req: NextApiRequest, res: NextApiResponse<StoreDto[]>) {
  const stores = (await import('public/json/stores.json')).default as unknown as StoreDto[];

  res.status(200).json(stores);
}
