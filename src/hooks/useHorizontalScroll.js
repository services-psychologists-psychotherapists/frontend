import { useRef, useState } from 'react';
import { SCROLL_SPEED } from '../constants/constants';

export default function useHorizontalScroll() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const ref = useRef();

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e) => {
    if (!isDown) {
      return;
    }

    e.preventDefault();

    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * SCROLL_SPEED;

    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };
}
