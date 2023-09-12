import React, { ChangeEvent } from 'react';
import type { FeedbackDTO } from '@typings/feedback';
import FeedbackList from '@components/FeedbackList';
import FeedbackInput from '@components/FeedbackInput';
import { DetailSectionStyle } from './styles';

interface Props {
  feedbackList: FeedbackDTO[];
  feedbackContent?: FeedbackDTO['content'];
  onChangeContent?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FeedbackBoardComponent = ({ feedbackList, feedbackContent, onChangeContent }: Props): React.ReactElement => {
  return (
    <DetailSectionStyle>
      <FeedbackList feedbackList={feedbackList} />
      {feedbackContent !== undefined && onChangeContent !== undefined && (
        <FeedbackInput Content={feedbackContent} onChangeContent={onChangeContent} />
      )}
    </DetailSectionStyle>
  );
};

export default FeedbackBoardComponent;
