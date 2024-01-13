import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './Logo.css';
import logo from '../../../images/logo.svg';

export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className="logo"
      onClick={() => window.scrollTo(0, 0)}
    >
      <p className={`logo__title${className ? ` ${className}` : ''}`}>Share with me</p>
      <img src={logo} alt="Логотип" className="logo__icon" />
    </Link>
  );
}

Logo.propTypes = {
  className: string,
};

Logo.defaultProps = {
  className: '',
};
