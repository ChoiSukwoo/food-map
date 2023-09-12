import { FeedbackDTO } from '@typings/feedback';

type AddFeedback = (feedback: FeedbackDTO) => Promise<{
  result: GroupListResult | false;
  message?: string;
}>;
