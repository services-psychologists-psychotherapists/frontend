import React from 'react';
import bannerImg from '../../images/home_banner.svg';
import Banner from '../../components/Banner/Banner';
import AboutProblems from '../../components/AboutProblems/AboutProblems';
import WhereToBegin from '../../components/WhereToBegin/WhereToBegin';
import EmergencyHelp from '../../components/EmergencyHelp/EmergencyHelp';
import Background from '../../components/generic/Background/Background';

export default function HomePage() {
  return (
    <>
      <Banner
        description="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
        imgLink={bannerImg}
        textBtn="Подобрать психолога"
        title="Подберем психолога, который вам поможет"
        href="/directory_psychologists"
      />
      <Background animated />
      <AboutProblems />
      <WhereToBegin />
      <EmergencyHelp />
    </>
  );
}
