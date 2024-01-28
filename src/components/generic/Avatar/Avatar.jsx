import React, { useState, useEffect } from 'react';
import { func, string } from 'prop-types';
import './Avatar.css';
import noAvatar from '../../../images/no-avatar.svg';

export default function Avatar({ src, size, onClick }) {
  const [avatar, setAvatar] = useState(noAvatar);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setAvatar(src);
    img.onerror = () => setAvatar(noAvatar);
  }, [src]);

  const getNoAvatarClasses = (tag) => {
    if (avatar === noAvatar) {
      if (tag === 'img') {
        if (size === 'xs' || size === 's') {
          return ` ${tag}__no-avatar img_size_s`;
        }
        return '';
      }
      return ` ${tag}__no-avatar`;
    }
    return '';
  };

  return (
    <div className={`avatar avatar_size_${size}${getNoAvatarClasses('avatar')}`}>
      <img
        src={avatar}
        alt="Аватар"
        className={`${avatar !== noAvatar ? 'img' : getNoAvatarClasses('img')}`}
      />
      {size === 'xl' && (
        <button
          type="button"
          className={`camera-icon ${getNoAvatarClasses('camera-icon')}`}
          onClick={onClick}
        />
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: string,
  size: string,
  onClick: func,
};

Avatar.defaultProps = {
  size: 'xl',
  src: noAvatar,
  onClick: () => {},
};
