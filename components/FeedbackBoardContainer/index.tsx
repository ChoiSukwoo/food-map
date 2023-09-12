import React, { useCallback, useEffect, useRef } from 'react';
import { FeedbackBoardContainerStyle } from './styles';

interface Props {
  children: React.ReactElement;
  showClones: boolean;
}

function isTouchEvent(e: React.TouchEvent | React.MouseEvent): e is React.TouchEvent {
  return e && 'touches' in e;
}
export const SNAIL_SIDE_LENGTH = 11;
export const CARD_WIDTH = 200;
export const BOARD_WIDTH = CARD_WIDTH * SNAIL_SIDE_LENGTH;

// 마우스, 터치 이벤트 처리를 담당하는 Component
const FeedbackBoardContainerComponent = ({ children, showClones }: Props): React.ReactElement => {
  const feedbackBoardRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const position = useRef({ x: 0, y: 0 }); // recent event position
  const offset = useRef({ x: 0, y: 0 }); // translate offset
  const speed = useRef({ x: 0, y: 0 });

  const onDown = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    isDown.current = true;
    const { clientX, clientY } = isTouchEvent(e) ? e.touches[0] : e;
    position.current = { x: clientX, y: clientY };
  }, []);

  const onUp = useCallback(() => {
    isDown.current = false;
  }, []);

  const onMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (isDown.current) {
      const { clientX, clientY } = isTouchEvent(e) ? e.touches[0] : e;
      speed.current = {
        x: position.current.x - clientX,
        y: position.current.y - clientY,
      };
      position.current = { x: clientX, y: clientY };
    }
  }, []);

  useEffect(() => {
    let timer: number;
    timer = requestAnimationFrame(function slowDown() {
      let newOffsetX = offset.current.x + speed.current.x;
      if (newOffsetX > BOARD_WIDTH / 2) newOffsetX = newOffsetX - BOARD_WIDTH;
      if (newOffsetX < -BOARD_WIDTH / 2) newOffsetX = newOffsetX + BOARD_WIDTH;

      let newOffsetY = offset.current.y + speed.current.y;
      if (newOffsetY > BOARD_WIDTH / 2) newOffsetY = newOffsetY - BOARD_WIDTH;
      if (newOffsetY < -BOARD_WIDTH / 2) newOffsetY = newOffsetY + BOARD_WIDTH;

      offset.current = {
        x: newOffsetX,
        y: newOffsetY,
      };

      if (feedbackBoardRef && feedbackBoardRef.current) {
        feedbackBoardRef.current.style.transform = `translate(calc(-50% - ${offset.current.x}px), calc(-50% - ${offset.current.y}px))`;
      }

      speed.current = {
        x: speed.current.x * 0.86,
        y: speed.current.y * 0.86,
      };
      timer = requestAnimationFrame(slowDown);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <FeedbackBoardContainerStyle
      onMouseUp={onUp}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onTouchStart={onDown}
      onTouchEnd={onUp}
      onTouchMove={onMove}
      ref={feedbackBoardRef}
      className={`${showClones && 'showClones'}`}
    >
      {children}
    </FeedbackBoardContainerStyle>
  );
};

export default FeedbackBoardContainerComponent;
