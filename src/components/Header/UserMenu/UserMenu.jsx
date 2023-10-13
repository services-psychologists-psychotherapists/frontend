import React, { useContext, useRef, useState } from 'react';
import './UserMenu.css';
import CurrentUserContext from '../../../Context/CurrentUserContext';
import NavLinksList from '../../NavLinksList/NavLinksList';
import { HEADER_DROPDOWN_LINKS, HEADER_BURGER_MENU_LINKS } from '../../../constants/constants';
import useOutsideClick from '../../../hooks/useOnClickOutside';
import Avatar from '../../generic/Avatar/Avatar';
import { useResize } from '../../../hooks/useResize';

export default function UserMenu() {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const { isScreenMd } = useResize();

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
          {`${currentUser.first_name} ${currentUser.last_name.slice(0, 1)}.`}
        </p>
      </button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list_opened' : ''}`}>
        <NavLinksList list={navLinks} direction="column" />
        <li>
          <button className="exit-btn" onClick={() => console.log('exit')}>
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}
