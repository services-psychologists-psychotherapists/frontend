import React from 'react';
import './NavLinksList.css';
import { arrayOf, shape, string, bool } from 'prop-types';
import NavigationLink from './NavigationLink/NavigationLink';

export default function NavLinksList({
  list, navLink,
  isList, variant,
  className,
}) {
  return (
    <ul className={`links${isList ? ' links_type_list' : ''}${
      variant ? ` links_type_${variant}` : ''}${
      className ? ` ${className}` : ''}`}
    >
      {list.map(({ link, text }) => (
        <li key={link}>
          <NavigationLink link={link} text={text} navLink={navLink} />
        </li>
      ))}
    </ul>
  );
}

NavLinksList.propTypes = {
  list: arrayOf(
    shape({
      link: string.isRequired,
      text: string.isRequired,
    })
  ).isRequired,
  navLink: bool,
  isList: bool,
  variant: string,
  className: string,
};

NavLinksList.defaultProps = {
  navLink: true,
  isList: false,
  variant: '',
  className: '',
};
