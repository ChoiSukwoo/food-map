import styled from '@emotion/styled';

export const DetailContentStyle = styled.div({
  height: '100%',
  overflow: 'hidden',

  '&.expanded': {
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  h2: {
    fontSize: '1.125rem',
    fontWeight: 600,
    margin: '8px 0',
  },

  hr: {
    borderBottom: 'none',
    borderTop: '1px solid #eef0f3',
    margin: '16px 0',
  },
});

export const ImageStyle = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(auto, 120px))',
  justifyContent: 'center',
  gap: '12px',
  marginBottom: '16px',
});

export const DescriptionStyle = styled.div({
  p: {
    margin: '4px 0',
  },
});

export const BasicInfoStyle = styled.div({
  div: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',

    span: {
      marginLeft: '4px',
      fontSize: '1rem',
    },

    a: {
      color: '#64c0a9',
    },
  },
});

export const MenusStyle = styled.div({
  '.menu': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',

    '.name': {
      maxWidth: '70%',
      wordBreak: 'keep-all',
    },
  },
});
