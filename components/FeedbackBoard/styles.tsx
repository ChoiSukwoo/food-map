import styled from '@emotion/styled';

export const cardWidth = '200px';
export const snailSideLength = 11;
export const feedbackBoardWidth = `${parseInt(cardWidth) * snailSideLength}px`;

export const DetailSectionStyle = styled.div({
  width: feedbackBoardWidth,
  height: feedbackBoardWidth,
  position: 'relative',
  overflow: 'hidden',
});
