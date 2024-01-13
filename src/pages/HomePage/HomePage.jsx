import React, { useEffect } from 'react';
import AboutProblems from '../../components/AboutProblems/AboutProblems';
import WhereToBegin from '../../components/WhereToBegin/WhereToBegin';
import EmergencyHelp from '../../components/EmergencyHelp/EmergencyHelp';
import Welcome from '../../components/Welcome/Welcome';
import bannerImg from '../../images/home_banner.svg';
import './HomePage.css';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Welcome
        bannerImg={bannerImg}
        descr="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
        text="Подобрать психолога"
        title="Подберем психолога, который вам поможет"
        href="/directory_psychologists"
        imageClasses="home-page__welcome-image"
        inimationStatus
      />
      <AboutProblems />
      <WhereToBegin />
      <EmergencyHelp />
    </>
  );
}
