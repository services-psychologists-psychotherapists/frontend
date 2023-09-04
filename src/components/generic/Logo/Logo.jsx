import React from 'react';
import './Logo.css';
import logo from './logo.svg';

export default function Logo() {
  return (
    <div className="logo">
      <p className="logo__title">Share with me</p>
      <img src={logo} alt="logotype" className="logo__icon" />
    </div>
  );
}
