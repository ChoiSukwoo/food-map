import styled from '@emotion/styled';
import { CARD_WIDTH, FEEDBACK_COLOR_SET, cardWidth, snailPositionArray } from '@utils/feedback';

export const Item = styled.div(
  {
    position: 'absolute',
    top: '0',
    left: '0',
    width: cardWidth,
    height: cardWidth,
    padding: '12px',
    transition: 'transform 1s ease',
  },
  ({ index, isOutOfRange }: { index: number; isOutOfRange: boolean }) => ({
    zIndex: index === 1 ? 1 : 0,
    transform: isOutOfRange
      ? `translate(${-1 * CARD_WIDTH}px, 0)`
      : `translate(
            ${snailPositionArray[index].col * CARD_WIDTH}px,
            ${snailPositionArray[index].row * CARD_WIDTH}px
          )`,
  }),
);

export const Card = styled.div(
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '16px 16px 32px',

    '@media (hover: hover) and (pointer: fine)': {
      transition: 'transform 0.3s',
      transform: 'scale(1)',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
  },
  ({ theme }: { theme: keyof typeof FEEDBACK_COLOR_SET }) => ({
    background: `linear-gradient(
      to left top,
      transparent 50%,
      ${FEEDBACK_COLOR_SET[theme].secondary} 0
    ) no-repeat 100% 100% / 22px 22px,
    linear-gradient(
      to left top,
      transparent 15.7px,
      ${FEEDBACK_COLOR_SET[theme].primary} 0
    )`,
  }),
);

export const Text = styled.p({
  width: '100%',
  height: '100%',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  overflow: 'hidden',

  fontSize: '0.875rem',
  color: '#222222',
});

export const ShadowStyles = styled.div({
  position: 'absolute',
  zIndex: -1,
  boxShadow: '0 0 10px 1px rgba(0, 0, 0, 0.4)',

  '& Right': {
    top: '10px',
    bottom: '22px',
    right: '0',
  },
  Bottom: {
    bottom: '0',
    left: '10px',
    right: '22px',
  },
  Corner: {
    transform: 'rotate(-45deg)',
    transformOrigin: 'left',
    width: '24px',
    bottom: '2px',
    right: '-4px',
  },
});
