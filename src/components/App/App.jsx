import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { CLIENT } from '../../constants/db';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import { PopupProvider } from '../../hooks/usePopup';
import Popup from '../generic/Popup/Popup';
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';
import Auth from '../../pages/Auth/Auth';
import { authUser, createUser } from '../../utils/Api';

export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getJwt = async (data) => {
    try {
      const jwt = await authUser(data);

      if (jwt) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (data) => {
    try {
      const user = await createUser(data);

      console.log(user); // убрать
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={CLIENT}>
        <PopupProvider>
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
            <Route
              path="/signin"
              element={<Auth isLoggedIn={isLoggedIn} getJwt={getJwt} signUp={signUp} />}
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
