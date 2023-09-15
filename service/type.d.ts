import { Feedback } from '@typings/feedback';

type AddFeedback = (feedback: Feedback) => Promise<{
  result: GroupListResult | false;
  message?: string;
}>;
