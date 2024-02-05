import { useRef, useState } from 'react';
import { SCROLL_SPEED } from '../constants/constants';

export default function useVerticalScroll() {
  const [isDown, setIsDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const ref = useRef();

  const onMouseDown = (e) => {
    setIsDown(true);
    setStartY(e.pageY - ref.current.offsetTop);
    setScrollTop(ref.current.scrollTop);
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

    const y = e.pageY - ref.current.offsetTop;
    const walk = (y - startY) * SCROLL_SPEED;

    ref.current.scrollTop = scrollTop - walk;
  };

  return {
    ref,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };
}
