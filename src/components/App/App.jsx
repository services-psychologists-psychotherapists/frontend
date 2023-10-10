import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { CLIENT, PSYCHO } from '../../constants/db';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import PsychologistCardPage from '../../pages/PsychologistsCardPage/PsychologistsCardPage';
import { PopupProvider } from '../../hooks/usePopup';
import Popup from '../generic/Popup/Popup';

export default function App() {
  return (
    <div className="page">
      <CurrentUserContext.Provider value={CLIENT}>
        <PopupProvider>
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={false} />} />
            <Route path="/for_a_therapist" element={<PageForPsychologists />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/psychologist_account" element={<PsychologistAccount />} />
            <Route path="/psychologist_account_schedule" element={<PsychologistAccount />} />
            <Route path="/psychologist_account_profile" element={<PsychologistAccount />} />
            <Route path="/client_account" element={<ClientHomePage isLoggedIn />} />
            <Route
              path="/psychologist"
              element={<PsychologistCardPage psychologist={PSYCHO} isLoggedIn />}
            />
          </Routes>
          <Popup />
        </PopupProvider>
      </CurrentUserContext.Provider>
      <ButtonUp />
      <Footer />
    </div>
  );
}
