import React from 'react';
import './ButtonUp.css';

export default function ButtonUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <button type="button" className="button-up" onClick={scrollToTop} />;
}
