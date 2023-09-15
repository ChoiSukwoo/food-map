import React, { ChangeEvent } from 'react';
import type { Feedback } from '@typings/feedback';
import { FEEDBACK_COLOR_SET, MAX_CONTENT_LENGTH } from '@utils/feedback';
import { Item, Card, Text, TextLength } from './styles';

interface Props {
  Content: Feedback['content'];
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FeedbackInput = ({
  Content: FeedbackContent,
  onChangeContent: onChangeFeedbackContent,
}: Props): React.ReactElement => {
  return (
    <Item>
      <Card style={{}}>
        <Text value={FeedbackContent} onChange={onChangeFeedbackContent} placeholder="피드백을 적어주세요!" />
        <TextLength>{`${FeedbackContent.length} / ${MAX_CONTENT_LENGTH}`}</TextLength>
      </Card>
    </Item>
  );
};

export default FeedbackInput;
