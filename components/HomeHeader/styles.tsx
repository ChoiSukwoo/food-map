import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderRightLink = styled(Link)({
  padding: '6px',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 -2px 8px 0 rgba(136, 136, 136, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  transition: 'background-color 200ms ease',
  '&:active': {
    backgroundColor: '#40a6fd',
    color: 'white',
  },
});
export const HeaderRightButton = styled.button({
  padding: '6px',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 -2px 8px 0 rgba(136, 136, 136, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  transition: 'background-color 200ms ease',
  '&:active': {
    backgroundColor: '#40a6fd',
    color: 'white',
  },
});
