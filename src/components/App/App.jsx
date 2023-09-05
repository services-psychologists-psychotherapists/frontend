// import React from 'react';
// import './App.css';
// // #TODO Header

// export default function App() {
//   return <div className="page" />;
// }

import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import EmergencyHelp from '../EmergencyHelp/EmergencyHelp';
import TermsOfCooperation from '../TermsOfCooperation/TermsOfCooperation';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className="page">
      <Header />
      <Banner />
      <EmergencyHelp />
      <TermsOfCooperation />
      <Footer />
    </div>
  );
}
