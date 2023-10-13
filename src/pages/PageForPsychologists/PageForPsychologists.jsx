import React from 'react';
import bannerImg from '../../images/for_therapist_banner.svg';
import Banner from '../../components/Banner/Banner';
import HowToStart from '../../components/HowToStart/HowToStart';
import TermsOfCooperation from '../../components/TermsOfCooperation/TermsOfCooperation';
import Background from '../../components/generic/Background/Background';

export default function PageForPsychologists() {
  return (
    <>
      <Banner
        description="Поможем организовать вашу удаленную работу и сделаем ее комфортнее"
        imgLink={bannerImg}
        href="/signup-therapist"
        textBtn="Подать заявку"
        title="Присоединяйтесь к нашей команде психологов"
      />
      <Background />
      <HowToStart />
      <TermsOfCooperation />
    </>
  );
}
