import React from 'react';
import './NavigationLink.css';
import { Link, NavLink } from 'react-router-dom';
import { string, bool } from 'prop-types';

export default function NavigationLink({ link, text, navLink }) {
  const Tag = navLink ? NavLink : Link;
  return (
    <Tag to={link} className="nav-link">
      {text}
    </Tag>
  );
}

NavigationLink.propTypes = {
  link: string.isRequired,
  text: string.isRequired,
  navLink: bool,
};

NavigationLink.defaultProps = {
  navLink: true,
};
