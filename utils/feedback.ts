import type { FeedbackDTO } from '@typings/feedback';
import { type } from 'os';

export const CARD_WIDTH = 200;
export const SNAIL_SIDE_LENGTH = 11;
export const BOARD_WIDTH = CARD_WIDTH * SNAIL_SIDE_LENGTH;
export const cardWidth = '200px';
export const BoardWidth = `${parseInt(cardWidth) * SNAIL_SIDE_LENGTH}px`;
export const MAX_CONTENT_LENGTH = 80;

export const FEEDBACK_COLOR_SET = {
  yellow: {
    primary: '#ffe2ab',
    secondary: '#fdc75f',
  },
  mint: {
    primary: '#94d9d9',
    secondary: '#84cccc',
  },
  pink: {
    primary: '#ffc9cf',
    secondary: '#f397a1',
  },
  purple: {
    primary: '#cdbdd7',
    secondary: '#b08fc5',
  },
  green: {
    primary: '#d7e3c2',
    secondary: '#afce7a',
  },
} as const;

export const pickThemeByTimestamp = (timestamp: FeedbackDTO['timestamp']): keyof typeof FEEDBACK_COLOR_SET => {
  switch (timestamp % 4) {
    case 0:
      return 'yellow';
    case 1:
      return 'mint';
    case 2:
      return 'pink';
    case 3:
      return 'purple';
  }
  return 'yellow';
};

export const generateNewFeedback = (
  content?: FeedbackDTO['content'],
  timestamp?: FeedbackDTO['timestamp'],
): FeedbackDTO => ({
  content: content ?? '',
  timestamp: timestamp ?? Math.floor(Math.random() * 10 ** 15),
});

/**
 * n = 3 일 때,
 * 0 1 2
 * 7 8 3
 * 6 5 4
 * 의 달팽이 배열이 나오고,
 * return 값은 [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 1, col: 2 }, ... , { row: 2, col: 2 }]
 */
export function generateSnailPositionArray(n: number): { row: number; col: number }[] {
  const snailPositionArray = Array(n ** 2).fill(null);
  const snailIndexArray = Array(n ** 2).fill(-1);

  let direction: 'left' | 'right' | 'up' | 'bottom' = 'right';
  let row = 0;
  let col = 0;

  for (let count = 0; count < snailIndexArray.length; count++) {
    snailPositionArray[count] = { row, col };

    snailIndexArray[row * n + col] = count;
    switch (direction) {
      case 'right':
        if (col + 1 < n && snailIndexArray[row * n + col + 1] === -1) {
          col += 1;
        } else {
          direction = 'bottom';
          row += 1;
        }
        break;
      case 'bottom':
        if (row + 1 < n && snailIndexArray[(row + 1) * n + col] === -1) {
          row += 1;
        } else {
          direction = 'left';
          col -= 1;
        }
        break;
      case 'left':
        if (col - 1 >= 0 && snailIndexArray[row * n + col - 1] === -1) {
          col -= 1;
        } else {
          direction = 'up';
          row -= 1;
        }
        break;
      case 'up':
        if (row - 1 >= 0 && snailIndexArray[(row - 1) * n + col] === -1) {
          row -= 1;
        } else {
          direction = 'right';
          col += 1;
        }
        break;
    }
  }

  return snailPositionArray;
}

export const snailPositionArray = generateSnailPositionArray(SNAIL_SIDE_LENGTH).reverse();
