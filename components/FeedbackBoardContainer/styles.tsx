import { feedbackBoardWidth } from '@components/FeedbackBoard/styles';
import styled from '@emotion/styled';

export const FeedbackBoardContainerStyle = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  cursor: 'grab',
  userSelect: 'none',
  overflow: 'hidden',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  width: `calc(${feedbackBoardWidth})`,
  height: `calc(${feedbackBoardWidth})`,
  '&.showClones': {
    width: `calc(3 * ${feedbackBoardWidth})`,
    height: `calc(3 * ${feedbackBoardWidth})`,
  },
});
