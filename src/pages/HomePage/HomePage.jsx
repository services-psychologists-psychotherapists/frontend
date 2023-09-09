import React from 'react';
import './HomePage.css';
import Welcome from '../../components/Welcome/Welcome';
import bannerImg from '../../images/home_banner.svg';
import Banner from '../../components/Banner/Banner';
import AboutProblems from '../../components/AboutProblems/AboutProblems';
import EmergencyHelp from '../../components/EmergencyHelp/EmergencyHelp';

export default function HomePage() {
  return (
    <>
      <Welcome animated isLoggedIn>
        <Banner
          description="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
          imgLink={bannerImg}
          onClick={() => {}}
          textBtn="Подобрать психолога"
          title="Подберем психолога, который вам поможет"
        />
      </Welcome>
      <AboutProblems />
      <EmergencyHelp />
    </>
  );
}
