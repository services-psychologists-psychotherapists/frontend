import React, { useEffect } from 'react';
import AboutProblems from '../../components/AboutProblems/AboutProblems';
import WhereToBegin from '../../components/WhereToBegin/WhereToBegin';
import EmergencyHelp from '../../components/EmergencyHelp/EmergencyHelp';
import Welcome from '../../components/Welcome/Welcome';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Welcome />
      <AboutProblems />
      <WhereToBegin />
      <EmergencyHelp />
    </>
  );
}
