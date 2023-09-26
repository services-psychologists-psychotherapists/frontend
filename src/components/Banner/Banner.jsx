import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import Button from '../generic/Button/Button';
import Title from '../generic/Title/Title';

export default function Banner({
  imgLink, textBtn, title, description, imgSize, imgAlt, href
}) {
  return (
    <div className={`banner banner_size_${imgSize}`}>
      <div className="banner__text">
        <Title size="l" text={title} titleLvl="1" />
        <p className="banner__description">{description}</p>
        <Button href={href}>{textBtn}</Button>
      </div>
      <img className={`banner__img banner__img_size_${imgSize}`} src={imgLink} alt={imgAlt} />
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
  href: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  imgSize: 'l',
  imgAlt: 'Баннер',
};
