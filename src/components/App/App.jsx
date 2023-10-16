import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { PSYCHO } from '../../constants/db';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import PsychologistCardPage from '../../pages/PsychologistsCardPage/PsychologistsCardPage';
import { PopupProvider } from '../../hooks/usePopup';
import Popup from '../generic/Popup/Popup';
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';
import Auth from '../../pages/Auth/Auth';
import * as auth from '../../utils/auth';
import DirectoryOfPsychologists from '../../pages/DirectoryOfPsychologists/DirectoryOfPsychologists';
import Header from '../Header/Header';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';

export default function App() {
  const navigate = useNavigate();
  const { pathname } = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async (token) => {
    try {
      const user = await auth.getUserInfo(token);
      const role = await auth.getRole(token);
      user.role = role.is_psychologist ? 'psychologist' : 'client';
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  const signIn = async (data) => {
    try {
      const token = await auth.authUser(data);
      if (token) {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', token.access);
        getUserInfo(token.access);
        navigate(`/${currentUser.role}_account`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (data) => {
    try {
      const user = await auth.createUser(data);
      signIn({
        email: user.email,
        password: data.password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  };

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      setIsLoggedIn(true);
      getUserInfo(localStorage.getItem('jwt'));
      if (pathname === '/signin') {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  // prettier-ignore
  return (
    <div className="page">
      {!isLoading && (
        <>
          <CurrentUserContext.Provider value={currentUser}>
            <PopupProvider>
              <Header isLoggedIn={isLoggedIn} signOut={signOut} />
              <Routes>
                <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
                <Route path="/for_a_therapist" element={<PageForPsychologists />} />
                <Route path="/*" element={<NotFound />} />
                {currentUser.role === 'psychologist' ? (
                  <>
                    <Route
                      path="/psychologist_account"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          loggedIn={isLoggedIn}
                        />
                )}
                    />
                    <Route
                      path="/psychologist_account_schedule"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          loggedIn={isLoggedIn}
                        />
                )}
                    />
                    <Route
                      path="/psychologist_account_profile"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          loggedIn={isLoggedIn}
                        />
                )}
                    />
                  </>
                ) : (
                  <>
                    <Route
                      path="/client_account"
                      element={(
                        <ProtectedRouteElement
                          element={ClientHomePage}
                          loggedIn={isLoggedIn}
                          isLoading={isLoading}
                        />
                      )}
                    />
                    <Route
                      path="/client_account_session-registration"
                      element={(
                        <ProtectedRouteElement
                          element={SessionRegistrationForClient}
                          loggedIn={isLoggedIn}
                          navigate={navigate}
                        />
                      )}
                    />
                  </>
                )}

                <Route path="/signin" element={<Auth signIn={signIn} signUp={signUp} />} />
                <Route
                  path="/psychologist"
                  element={<PsychologistCardPage psychologist={PSYCHO} />}
                />
                <Route path="/directory_psychologists" element={<DirectoryOfPsychologists />} />
              </Routes>
              <Popup />
            </PopupProvider>
          </CurrentUserContext.Provider>
          <ButtonUp />
          <Footer />
        </>
      )}
    </div>
  );
}
