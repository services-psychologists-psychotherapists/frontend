import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if ((ref.current && !ref.current.contains(e.target)) || e.key === 'Escape') {
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
