import React from 'react';
import { Feedback } from '@typings/feedback';
import { SNAIL_SIDE_LENGTH, pickThemeByTimestamp } from '@utils/feedback';
import { Card, Item, ShadowStyles, Text } from './styles';

interface Props {
  feedbackList: Feedback[];
}

const FeedbackList = ({ feedbackList }: Props): React.ReactElement => {
  return (
    <>
      {feedbackList.map((feedback, index) => {
        const isOutOfRange = index >= SNAIL_SIDE_LENGTH ** 2;
        const theme = pickThemeByTimestamp(feedback.timestamp);
        return (
          <Item key={feedback.timestamp} index={index} isOutOfRange={isOutOfRange}>
            <Card theme={theme}>
              <Text>{feedback.content}</Text>
              <ShadowStyles className="Right" />
              <ShadowStyles className="Bottom" />
              <ShadowStyles className="Corner" />
            </Card>
          </Item>
        );
      })}
    </>
  );
};

export default React.memo(FeedbackList);
