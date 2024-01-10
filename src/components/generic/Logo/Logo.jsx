import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../../images/logo.svg';

export default function Logo() {
  return (
    <Link to="/" className="logo" onClick={window.scrollTo(0, 0)}>
      <p className="logo__title">Share with me</p>
      <img src={logo} alt="logotype" className="logo__icon" />
    </Link>
  );
}
