import React, { useEffect } from 'react';
import bannerImg from '../../images/for_therapist_banner.svg';
import Banner from '../../components/Banner/Banner';
import HowToStart from '../../components/HowToStart/HowToStart';
import TermsOfCooperation from '../../components/TermsOfCooperation/TermsOfCooperation';
import Background from '../../components/generic/Background/Background';
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs';

export default function PageForPsychologists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner
        description="Поможем организовать вашу удаленную работу и сделаем ее комфортнее"
        imgLink={bannerImg}
        href="/psychologists_registration"
        textBtn="Подать заявку"
        title="Присоединяйтесь к нашей команде психологов"
      />
      <Background />
      <WorkWithUs />
      <HowToStart />
      <TermsOfCooperation />
    </>
  );
}
