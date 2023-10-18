import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (e.type === 'mousedown' && (ref.current && !ref.current.contains(e.target))) {
      callback();
    } else if (e.type === 'keydown' && e.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  });
};

export default useOutsideClick;
