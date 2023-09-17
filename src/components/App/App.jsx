import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { USER } from '../../constants/db';

export default function App() {
  return (
    <div className="page">
      <CurrentUserContext.Provider value={USER}>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={false} />} />
          <Route path="/for_a_therapist" element={<PageForPsychologists />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path="/psychologist_account"
            element={<PsychologistAccount />}
          />
          <Route
            path="/psychologist_account_schedule"
            element={<PsychologistAccount />}
          />
          <Route
            path="/psychologist_account_profile"
            element={<PsychologistAccount />}
          />
        </Routes>
      </CurrentUserContext.Provider>
      <Footer />
    </div>
  );
}
