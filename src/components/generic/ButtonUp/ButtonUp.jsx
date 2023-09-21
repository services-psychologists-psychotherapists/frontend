import React, { useState, useEffect } from 'react';
import './ButtonUp.css';

export default function ButtonUp() {
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisibleBtn(true);
      } else {
        setIsVisibleBtn(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return isVisibleBtn && <button type="button" className="button-up" onClick={scrollToTop} />;
}
