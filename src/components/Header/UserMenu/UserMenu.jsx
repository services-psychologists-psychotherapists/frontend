import React, { useContext, useRef, useState } from 'react';
import { func, bool } from 'prop-types';
import './UserMenu.css';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import NavLinksList from '../../NavLinksList/NavLinksList';
import { HEADER_NAV_LINKS } from '../../../constants/constants';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import Avatar from '../../generic/Avatar/Avatar';

export default function UserMenu({
  signOut, isScreenMd, isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const userLink = {
    text: 'Личный кабинет',
    link: `${currentUser.role}_account`,
  };

  const getNavLinks = () => {
    if (isLoggedIn && isScreenMd) {
      return [...HEADER_NAV_LINKS, userLink];
    }
    if (isLoggedIn && !isScreenMd) {
      return [userLink];
    }
    return HEADER_NAV_LINKS;
  };

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const handleClickMenu = () => setIsOpen(!isOpen);

  return (
    <div className="user-menu" ref={ref}>
      <button type="button" className="user-menu__user" onClick={handleClickMenu}>
        {isLoggedIn && (<Avatar src={currentUser.avatar} size="xs" />)}
        <p className={`user-menu__name ${isOpen ? 'user__name_opened' : ''}`}>
          {`${currentUser.first_name}`}
        </p>
        {isScreenMd && (
          <div className={`user-menu__burger${isOpen ? ' user-menu__burger_opened' : ''}`}>
            <span className="user-menu__burger-point" />
            <span className="user-menu__burger-point" />
            <span className="user-menu__burger-point" />
          </div>
        )}
      </button>
      <ul className={`user-menu__list${isOpen ? ' user-menu__list_opened' : ''}`}>
        <NavLinksList
          list={getNavLinks()}
          isList
          className="user-menu__nav-links"
        />
        {isLoggedIn && (
          <li>
            <button className="exit-btn" onClick={signOut}>
              Выйти
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

UserMenu.propTypes = {
  signOut: func.isRequired,
  isScreenMd: bool.isRequired,
  isLoggedIn: bool.isRequired,
};
