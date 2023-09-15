import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import noAvatar from '../../../images/no-avatar.svg';

export default function Avatar({ src, size }) {
   function getNoAvatarClasses(tag) {
    if (src === noAvatar) {
      if (tag === 'img') {
        if (size === 'xs' || size === 's') {
          return 'img__size_s';
        }
        return '';
      }
      return `${tag}__no-avatar`;
    }
    return '';
  }

  return (
    <div
      className={`avatar avatar_size_${size} ${getNoAvatarClasses('avatar')}`}
    >
      <img
        src={src}
        alt="аватар пользователя"
        className={`img ${getNoAvatarClasses('img')}`}
      />
      {size === 'xl' && (
        <button
          type="button"
          className={`camera-icon ${getNoAvatarClasses('camera-icon')}`}
        />
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
