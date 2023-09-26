import React from 'react';
import './NavigationLink.css';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavigationLink({ link, text, navLink }) {
  const Tag = navLink ? NavLink : Link;
  return (
    <Tag to={link} className="nav-link">
      {text}
    </Tag>
  );
}

NavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  navLink: PropTypes.bool,
};

NavigationLink.defaultProps = {
  navLink: true,
};
