import type { NextApiRequest, NextApiResponse } from 'next';
import { FeedbackDTO } from '@typings/feedback';

export default async function handler(req: NextApiRequest, res: NextApiResponse<FeedbackDTO[]>) {
  const feedbacks = (await import('public/json/stores.json')).default as unknown as FeedbackDTO[];

  res.status(200).json(feedbacks);
}
