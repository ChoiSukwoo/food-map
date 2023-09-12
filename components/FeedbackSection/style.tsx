import styled from '@emotion/styled';

export const headerHeight = '60px';
export const sectionPaddingTop = '8px';

export const DetailSectionStyle = styled.div({
  position: 'absolute',
  left: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  zIndex: '101',
  display: 'flex',
  flexDirection: 'column',
  padding: `${sectionPaddingTop} 16px 16px`,
  backgroundColor: 'white',
  color: '#444444',
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  boxShadow: '0 -2px 8px 0 rgba(136, 136, 136, 0.3)',
  transition: 'transform 800ms',
  transform: `translateY(calc(100% - ${headerHeight} - ${sectionPaddingTop}))`,

  '&.selected': {
    transform: 'translateY(calc(100% - 160px))',
  },
  '&.expanded': {
    transform: 'translateY(0)',
  },
});
