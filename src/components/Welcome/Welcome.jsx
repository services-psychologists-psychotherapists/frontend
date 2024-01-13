import React from 'react';
import { string, bool } from 'prop-types';
import './Welcome.css';
import Banner from '../Banner/Banner';
import Background from '../generic/Background/Background';

export default function Welcome({
  bannerImg, descr, text, title,
  href, inimationStatus, imageClasses,
}) {
  return (
    <section className="welcome">
      <Background animated={inimationStatus} />
      <Banner
        description={descr}
        imgLink={bannerImg}
        textBtn={text}
        title={title}
        href={href}
        imageClasses={imageClasses}
      />
    </section>
  );
}

Welcome.propTypes = {
  bannerImg: string.isRequired,
  descr: string.isRequired,
  text: string.isRequired,
  title: string.isRequired,
  href: string.isRequired,
  inimationStatus: bool.isRequired,
  imageClasses: string,
};

Welcome.defaultProps = {
  imageClasses: '',
};
