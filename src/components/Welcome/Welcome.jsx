import React from 'react';
import './Welcome.css';
import Banner from '../Banner/Banner';
import Background from '../generic/Background/Background';
import bannerImg from '../../images/home_banner.svg';

export default function Welcome() {
  return (
    <section className="welcome">
      <Background animated />
      <Banner
        description="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
        imgLink={bannerImg}
        textBtn="Подобрать психолога"
        title="Подберем психолога, который вам поможет"
        href="/directory_psychologists"
      />
    </section>
  );
}
