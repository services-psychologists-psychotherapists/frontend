import React, { useContext, useRef, useState } from 'react';
import './UserMenu.css';
import CurrentUserContext from '../Context/CurrentUserContext';
import NavLinksList from '../NavLinksList/NavLinksList';
import { DROPDOWN_LINKS } from '../../constants/constants';
import useOutsideClick from '../../hooks/useOnClickOutside';

export default function UserMenu() {
  const currentUser = useContext(CurrentUserContext);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="user" onClick={handleOpenMenu}>
        <img
          src={currentUser.img}
          alt={currentUser.name}
          className="user__avatar"
        />
        <p className={`user__name ${isOpen ? 'user__name_opened' : ''}`}>
          {`${currentUser.name} ${currentUser.lastName.slice(0, 1)}.`}
        </p>
      </button>
      <ul className={`dropdown__list ${isOpen ? 'dropdown__list_opened' : ''}`}>
        <NavLinksList list={DROPDOWN_LINKS} direction="column" />
        <li>
          <button className="exit-btn" onClick={() => console.log('exit')}>
            Выйти
          </button>
        </li>
      </ul>
    </div>
  );
}
