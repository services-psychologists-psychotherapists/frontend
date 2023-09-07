import React from 'react';
import './PageForPsychologists.css';
import Welcome from '../../components/Welcome/Welcome';
import bannerImg from '../../images/home_banner.svg';
import Banner from '../../components/Banner/Banner';
import TermsOfCooperation from '../../components/TermsOfCooperation/TermsOfCooperation';

export default function PageForPsychologists() {
  return (
    <>
      <Welcome animated isLoggedIn={false}>
        <Banner
          description="Все психологи подтвердили образование,  прошли интервью и готовы оказать всю необходимую поддержку и помощь"
          imgLink={bannerImg}
          onClick={() => {}}
          textBtn="Подоборать психолога"
          title="Подберем психолога, который вам поможет"
        />
      </Welcome>
      <TermsOfCooperation />
    </>
  );
}
