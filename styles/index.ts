import { CSSObject } from '@emotion/react';
import { CSSProperties } from 'react';
import { keyframes } from '@emotion/react';

export const Util = {
  DragPrevent: {
    msUser: 'none',
    MozUserDrag: 'none',
    KhtmlUserDrag: 'none',
    WebkitUserDrag: 'none',
    userSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    KhtmlUserSelect: 'none',
    WebkitUserSelect: 'none',
  } as CSSObject,
  LineCutting: (props: { line: number }): CSSObject => ({
    display: '-webkit-box',
    wordWrap: 'break-word',
    WebkitLineClamp: props.line,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  ButtonStyleRemove: {
    backgroundColor: 'transparent',
    color: 'inherit',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    outline: 'inherit',
  },
  LoadingBg: {
    animation: `${keyframes({
      '0%': {
        backgroundPosition: '-100% 0',
      },
      '100% ': {
        backgroundPosition: '100% 0',
      },
    })} 2.5s infinite linear`,
    backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
    backgroundSize: '200% auto',
  } as CSSObject,
  ContentWidth: {
    flexShrink: 0,
    minWidth: '1140px',
    '&>*': {
      maxWidth: '1140px',
      width: '100%',
    },
  },
  FlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Box: {
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
  },
};

const styles = {
  Util: Util,
};

export default styles;
