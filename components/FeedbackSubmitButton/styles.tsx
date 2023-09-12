import styled from '@emotion/styled';

export const SubmitButton = styled.button({
  position: 'fixed',
  left: '12px',
  bottom: '16px',
  width: 'calc(100% - 24px)',
  zIndex: '1',
  padding: '16px',
  fontSize: '1rem',
  border: 'none',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.3)',
  color: 'white',
  backgroundColor: '#64c0a9',

  '@media (hover: hover) and (pointer: fine)': {
    cursor: 'pointer',
    '&:hover:not(:disabled)': {
      color: 'white',
      backgroundColor: '#5aac98',
    },
  },

  '&:active:not(:disabled)': {
    backgroundColor: '#478676',
  },

  '&:disabled': {
    backgroundColor: '#9e9e9e',
  },
});
