import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { USER } from '../../constants/db';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <CurrentUserContext.Provider value={USER}>
        {/* TODO: настроить все роуты и внутренние роуты */}
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={false} />} />
          <Route path="/for_a_therapist" element={<PageForPsychologists />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/psychologist_account" element={<PsychologistAccount />} />
          <Route path="/psychologist_account_schedule" element={<PsychologistAccount />} />
          <Route path="/psychologist_account_profile" element={<PsychologistAccount />} />
          <Route path="/client_account" element={<ClientHomePage isLoggedIn />} />
          <Route
            path="/client_account_session-registration"
            element={<SessionRegistrationForClient navigate={navigate} />}
          />
        </Routes>
      </CurrentUserContext.Provider>
      <ButtonUp />
      <Footer />
    </div>
  );
}
