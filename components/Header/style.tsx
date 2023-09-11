import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { Util } from 'styles';

export const HeaderStyle = styled.header({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '48px',
  padding: '0 8px 0 12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: '100',
  pointerEvents: 'none',
});

export const FlexItemStyle = styled.div({
  display: 'flex',
  pointerEvents: 'auto',
});

export const BoxItemStyle = styled(Link)({
  ...Util.Box,
});

export const LogoStyle = styled(Image)({
  width: '110px',
  height: '20px',
});
