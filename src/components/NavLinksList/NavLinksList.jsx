import React from 'react';
import './NavLinksList.css';
import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink/NavigationLink';

// prettier-ignore
export default function NavLinksList({
  list,
  navLink,
  direction,
  variant
}) {
  return (
    <ul className={`links links_direction_${direction} links_type_${variant}`}>
      {list.map(({ link, text }) => (
        <li key={link}>
          <NavigationLink link={link} text={text} navLink={navLink} />
        </li>
      ))}
    </ul>
  );
}

NavLinksList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  navLink: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
  variant: PropTypes.string,
};

NavLinksList.defaultProps = {
  navLink: true,
  direction: 'row',
  variant: '',
};
