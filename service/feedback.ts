import { AddFeedback } from './type';

//스터디 Uid => 북마크한 유저 Uid 리스트
export const addFeedback: AddFeedback = async (feedback) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: feedback.content }),
    });

    console.log(res);
    return { result: true, message: '' };
  } catch (e) {
    const error = e as Error;
    return { result: false, message: error.message };
  }
};
