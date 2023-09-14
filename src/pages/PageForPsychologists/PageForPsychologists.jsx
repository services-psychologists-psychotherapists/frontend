import React from 'react';
import './PageForPsychologists.css';
import Welcome from '../../components/Welcome/Welcome';
import bannerImg from '../../images/for_therapist_banner.svg';
import Banner from '../../components/Banner/Banner';
import TermsOfCooperation from '../../components/TermsOfCooperation/TermsOfCooperation';

export default function PageForPsychologists() {
  return (
    <>
      <Welcome animated={false} isLoggedIn={false}>
        <Banner
          description="Поможем организовать вашу удаленную работу и сделаем ее комфортнее"
          imgLink={bannerImg}
          href="/signup-therapist"
          textBtn="Подать заявку"
          title="Присоединяйтесь к нашей команде психологов"
        />
      </Welcome>
      <TermsOfCooperation />
    </>
  );
}
