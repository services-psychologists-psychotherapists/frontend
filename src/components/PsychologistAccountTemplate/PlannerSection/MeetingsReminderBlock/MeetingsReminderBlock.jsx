import React from 'react';
import './MeetingsReminderBlock.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconInfo from '../../../../images/icon_info.svg';

export default function MeetingsReminderBlock({ text, children }) {
  const { pathname } = useLocation();
  const classInfoIcon = `psychologist-account__info ${
    pathname !== '/psychologist_account_schedule'
      ? 'psychologist-account__info_invisible'
      : ''
  }`;
  return (
    <div className="psychologist-account__meetings-reminder">
      <article className="psychologist-account__subtitle-string">
        <p className="psychologist-account__subtitle">{text}</p>
        <img src={iconInfo} alt="справка" className={classInfoIcon} />
      </article>
      {children}
    </div>
  );
}

MeetingsReminderBlock.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string,
};

MeetingsReminderBlock.defaultProps = {
  text: 'Ближайшая сессия',
};
