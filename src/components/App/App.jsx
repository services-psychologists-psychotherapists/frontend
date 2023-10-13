import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';
import Auth from '../../pages/Auth/Auth';
import { authUser, createUser } from '../../utils/Api';
import DirectoryOfPsychologists from '../../pages/DirectoryOfPsychologists/DirectoryOfPsychologists';
import Header from '../Header/Header';

export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setJwt = (link, token) => {
    localStorage.setItem('jwt', token); // переделать на куки
    setIsLoggedIn(true);
    navigate(link);
  };

  const getJwt = async (data) => {
    try {
      const jwt = await authUser(data);

      setJwt('/client_account', jwt.refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (data) => {
    try {
      const user = await createUser(data);
      const jwt = await getJwt({
        email: user.email,
        password: data.password,
      });

      if (jwt) {
        setJwt('/client_account', jwt.refresh);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const signOut = () => {
  //   setIsLoggedIn(false);
  //   localStorage.clear();
  //   navigate('/');
  // };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={CLIENT}>
        <PopupProvider>
          <Header isLoggedIn />
          {/* TODO: настроить все роуты и внутренние роуты */}
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            <Route path="/for_a_therapist" element={<PageForPsychologists />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/psychologist_account" element={<PsychologistAccount />} />
            <Route path="/psychologist_account_schedule" element={<PsychologistAccount />} />
            <Route path="/psychologist_account_profile" element={<PsychologistAccount />} />
            <Route path="/client_account" element={<ClientHomePage isLoggedIn={isLoggedIn} />} />
            <Route
              path="/signin"
              element={<Auth isLoggedIn={isLoggedIn} getJwt={getJwt} signUp={signUp} />}
            />
            <Route
              path="/psychologist"
              element={<PsychologistCardPage psychologist={PSYCHO} isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/client_account_session-registration"
              element={<SessionRegistrationForClient navigate={navigate} />}
            />
            <Route
              path="/directory_psychologists"
              element={<DirectoryOfPsychologists isLoggedIn={isLoggedIn} />}
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
