import styled from '@emotion/styled';
import { FEEDBACK_COLOR_SET, cardWidth } from '@utils/feedback';

export const Item = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: cardWidth,
  height: cardWidth,
  padding: '12px',
  transition: 'transform 1s ease',
});

export const Card = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '16px 16px 32px',

  background: `linear-gradient(
        to left top,
        transparent 50%,
        ${FEEDBACK_COLOR_SET['yellow'].secondary} 0
      ) no-repeat 100% 100% / 22px 22px,
      linear-gradient(
        to left top,
        transparent 15.7px,
        ${FEEDBACK_COLOR_SET['yellow'].primary} 0
      )`,

  '@media (hover: hover) and (pointer: fine)': {
    transition: 'transform 0.3s',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});

export const Text = styled.textarea({
  width: '100%',
  height: '100%',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-all',
  fontSize: '0.875rem',
  color: '#222222',
  background: 'none',
  overflow: 'auto',
  outline: 'none',
  border: 'none',
  padding: 0,
  WebkitBoxShadow: 'none',
  MozBoxShadow: 'none',
  boxShadow: 'none',
  resize: 'none',
  fontFamily: 'inherit',
  '&::placeholder': {
    color: '#b5b5b5',
  },
});

export const TextLength = styled.p({
  position: 'absolute',
  bottom: '6px',
  right: '30px',
  fontSize: '0.625rem',
  color: '#666666',
});
