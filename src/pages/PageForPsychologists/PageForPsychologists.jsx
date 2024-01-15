import React, { useEffect } from 'react';
import bannerImg from '../../images/for_therapist_banner.svg';
import HowToStart from '../../components/HowToStart/HowToStart';
import TermsOfCooperation from '../../components/TermsOfCooperation/TermsOfCooperation';
import WorkWithUs from '../../components/WorkWithUs/WorkWithUs';
import Welcome from '../../components/Welcome/Welcome';
import './PageForPsychologists.css';

export default function PageForPsychologists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Welcome
        bannerImg={bannerImg}
        descr="Поможем организовать вашу удаленную работу и сделаем ее комфортнее"
        text="Подать заявку"
        title="Присоединяйтесь к нашей команде психологов"
        href="/psychologists_registration"
        imageClasses="psychologists__welcome-image"
        inimationStatus
        bannerClasses="psychologists__banner"
        textClasses="psychologists__banner-text"
        sectionClasses="psychologists__welcome"
      />
      <WorkWithUs />
      <HowToStart />
      <TermsOfCooperation />
    </>
  );
}
