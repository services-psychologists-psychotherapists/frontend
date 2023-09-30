import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import noAvatar from '../../../images/no-avatar.svg';

export default function Avatar({ src, size }) {
  const avatar = src || noAvatar;

  function getNoAvatarClasses(tag) {
    if (avatar === noAvatar) {
      if (tag === 'img') {
        if (size === 'xs' || size === 's') {
          return `${tag}__no-avatar img_size_s`;
        }
        return '';
      }
      return `${tag}__no-avatar`;
    }
    return '';
  }

  return (
    <div className={`avatar avatar_size_${size} ${getNoAvatarClasses('avatar')}`}>
      <img
        src={avatar}
        alt="аватар пользователя" // Не только для пользователя. Настроить стили отображения
        className={`${avatar !== noAvatar ? 'img' : getNoAvatarClasses('img')}`}
      />
      {size === 'xl' && (
        <button type="button" className={`camera-icon ${getNoAvatarClasses('camera-icon')}`} />
      )}
    </div>
  );
}

const { string } = PropTypes;

Avatar.propTypes = {
  src: string,
  size: string,
};

Avatar.defaultProps = {
  size: 'xl',
  src: noAvatar,
};
