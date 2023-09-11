import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { headerHeight } from '../DetailSection/style';
import { Util } from 'styles';

export const Header = styled.div({
  height: headerHeight,
  marginBottom: '8px',
  display: 'flex',
  flexDirection: 'column',
});

const bounce = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-5px);
  }
`;

export const ArrowButton = styled.button({
  height: '20px',
  alignSelf: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  '&:disabled': {
    opacity: '0.2',
    cursor: 'not-allowed',
  },
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
  svg: {
    animation: `${bounce} 500ms infinite alternate ease-in`,
  },
});

export const Title = styled.div({
  margin: '4px 0',
  fontSize: '1rem',
  fontWeight: '500',
});

export const ShareButton = styled.button({
  ...Util.Box,
});

export const FlexRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
