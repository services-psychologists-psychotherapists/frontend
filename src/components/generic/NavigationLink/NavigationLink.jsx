import React from 'react';
import './NavigationLink.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavigationLink({ link, text }) {
  return (
    <NavLink
      to={link}
      className={`nav-link ${({ isActive, isPending }) => {
        if (isPending) {
          return 'pending';
        }
        if (isActive) {
          return 'active';
        }
        return '';
      }}`}
    >
      {text}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
