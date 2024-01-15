import React from 'react';
import { string, bool } from 'prop-types';
import './Welcome.css';
import Button from '../generic/Button/Button';
import Title from '../generic/Title/Title';
import Background from '../generic/Background/Background';

export default function Welcome({
  bannerImg, descr, text, title,
  href, inimationStatus, imageClasses,
  bannerClasses, textClasses,
  sectionClasses,
}) {
  return (
    <section className={`welcome${sectionClasses ? ` ${sectionClasses}` : ''}`}>
      <Background animationStatus={inimationStatus} />
      <div className={`banner${bannerClasses ? ` ${bannerClasses}` : ''}`}>
        <div className={`banner__text${textClasses ? ` ${textClasses}` : ''}`}>
          <Title
            size="l"
            text={title}
            titleLvl="1"
          />
          <p className="banner__description">{descr}</p>
          <Button href={href}>{text}</Button>
        </div>
        <img className={imageClasses} src={bannerImg} alt="Логотип" />
      </div>
    </section>
  );
}

Welcome.propTypes = {
  bannerImg: string.isRequired,
  descr: string.isRequired,
  text: string.isRequired,
  title: string.isRequired,
  href: string.isRequired,
  inimationStatus: bool,
  imageClasses: string,
  bannerClasses: string,
  textClasses: string,
  sectionClasses: string,
};

Welcome.defaultProps = {
  imageClasses: '',
  bannerClasses: '',
  inimationStatus: false,
  textClasses: '',
  sectionClasses: '',
};
