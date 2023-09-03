import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../generic/Title/Title';
import './Banner.css';

export default function Banner({
  imgLink,
  onClick,
  textBtn,
  title,
  description,
  imgSize,
  imgAlt,
}) {
  return (
    <div className={`banner banner_size_${imgSize}`}>
      <div className="banner__text">
        <Title size="l" text={title} />
        <p className="banner__description">{description}</p>
        <button className="button-apply" type="button" onClick={onClick}>
          {textBtn}
        </button>
      </div>
      <img
        className={`banner__img banner__img_size_${imgSize}`}
        src={imgLink}
        alt={imgAlt}
      />
    </div>
  );
}

Banner.propTypes = {
  imgSize: PropTypes.oneOf(['l', 'm']),
  imgAlt: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Banner.defaultProps = {
  imgSize: 'l',
  imgAlt: 'Баннер',
};
