import type { NextApiRequest, NextApiResponse } from 'next';
import { Feedback } from '@typings/feedback';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Feedback[]>) {
  const feedbacks = (await import('public/json/stores.json')).default as unknown as Feedback[];

  res.status(200).json(feedbacks);
}
