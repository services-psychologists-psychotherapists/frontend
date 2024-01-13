import React from 'react';
import { string } from 'prop-types';
import './Banner.css';
import Button from '../generic/Button/Button';
import Title from '../generic/Title/Title';

export default function Banner({
  imgLink, textBtn, title, description, imgAlt, href
}) {
  return (
    <div className="banner">
      <div className="banner__text">
        <Title size="l" text={title} titleLvl="1" />
        <p className="banner__description">{description}</p>
        <Button href={href}>{textBtn}</Button>
      </div>
      <img className="banner__img" src={imgLink} alt={imgAlt} />
    </div>
  );
}

Banner.propTypes = {
  imgAlt: string,
  description: string.isRequired,
  title: string.isRequired,
  imgLink: string.isRequired,
  textBtn: string.isRequired,
  href: string.isRequired,
};

Banner.defaultProps = {
  imgAlt: 'Баннер',
};
