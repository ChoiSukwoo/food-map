import styled from '@emotion/styled';

const headerHeight = '60px';
const sectionPaddingTop = '8px';

export const MapStyle = styled.div({
  width: '100%',
  height: '100%',
  '& > div:nth-of-type(2)': {
    bottom: `calc(${headerHeight} + ${sectionPaddingTop}) !important`,
  },
});
