import React, { useContext, useRef, useState } from 'react';
import { func } from 'prop-types';
import './UserMenu.css';
import CurrentUserContext from '../../../Context/CurrentUserContext';
import NavLinksList from '../../NavLinksList/NavLinksList';
import { HEADER_DROPDOWN_LINKS, HEADER_BURGER_MENU_LINKS } from '../../../constants/constants';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import Avatar from '../../generic/Avatar/Avatar';
import { useResize } from '../../../hooks/useResize';

export default function UserMenu({ signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const { isScreenMd } = useResize();
  HEADER_DROPDOWN_LINKS[0].link = `${currentUser.role}_account`;

  const navLinks = isScreenMd ? HEADER_DROPDOWN_LINKS : HEADER_BURGER_MENU_LINKS;

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  function handleClickMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="user" onClick={handleClickMenu}>
        <Avatar src={currentUser.avatar} size="xs" />
        <p className={`user__name ${isOpen ? 'user__name_opened' : ''}`}>
          {`${currentUser.first_name}`}
        </p>
      </button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list_opened' : ''}`}>
        <NavLinksList list={navLinks} direction="column" />
        <li>
          <button className="exit-btn" onClick={signOut}>
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}

UserMenu.propTypes = {
  signOut: func.isRequired,
};
