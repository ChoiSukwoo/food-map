import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { FeedbackDTO } from '@typings/feedback';
import { generateNewFeedback, MAX_CONTENT_LENGTH } from '@utils/feedback';
import { addFeedback } from 'service/feedback';
import { SubmitButton } from './styles';

interface Props {
  newContent: FeedbackDTO['content'];
  setContent: React.Dispatch<React.SetStateAction<FeedbackDTO['content']>>;
  setFeedbackList: React.Dispatch<React.SetStateAction<FeedbackDTO[]>>;
}

const FeedbackSubmitButton = ({
  newContent: newFeedbackContent,
  setFeedbackList,
  setContent: setNewFeedbackContent,
}: Props): React.ReactElement | null => {
  // NOTE: 피드백 등록 후 10초 동안 disable
  const [secondsLeft, setSecondsLeft] = useState(0);
  const timer = useRef<number | NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (secondsLeft === 0) {
      if (typeof timer.current === 'number') clearInterval(timer.current);
      timer.current = null;
    }
  }, [secondsLeft]);

  const appendNewFeedback = useCallback(
    (text: string) => {
      if (timer.current !== null || text.trim().length === 0 || text.length > MAX_CONTENT_LENGTH) {
        return;
      }

      // 새로운 피드백 추가
      const newFeedback = generateNewFeedback(text, new Date().getTime());
      setFeedbackList((feedbackList) => [newFeedback, ...feedbackList.slice(1)]);
      addFeedback(newFeedback);

      setTimeout(() => {
        // 0번째 index에 빈 피드백 추가
        setFeedbackList((feedbackList) => [generateNewFeedback(), ...feedbackList]);
        setNewFeedbackContent('');

        // disable timer 작동
        setSecondsLeft(1);
        timer.current = setInterval(() => {
          setSecondsLeft((second) => second - 1);
        }, 100);
      }, 0);
    },
    [setFeedbackList, setNewFeedbackContent],
  );

  if (newFeedbackContent.trim().length === 0) return null;
  return (
    <SubmitButton onClick={() => appendNewFeedback(newFeedbackContent)} disabled={secondsLeft > 0}>
      {secondsLeft > 0 ? `${secondsLeft}초만 기다려주세요` : '피드백 등록'}
    </SubmitButton>
  );
};

export default FeedbackSubmitButton;