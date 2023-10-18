import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../Context/CurrentUserContext';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import { PopupProvider } from '../../hooks/usePopup';
import Popup from '../generic/Popup/Popup';
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';
import Auth from '../../pages/Auth/Auth';
import * as auth from '../../utils/auth';
import DirectoryOfPsychologists from '../../pages/DirectoryOfPsychologists/DirectoryOfPsychologists';
import Header from '../Header/Header';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import ChangePassword from '../../pages/ChangePassword/ChangePassword';
import PsychologistRegistration from '../../pages/PsychologistRegistration/PsychologistRegistration';

export default function App() {
  const navigate = useNavigate();
  // const { pathname } = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const jwt = localStorage.getItem('jwt');
  const jwtRefresh = localStorage.getItem('jwt-refresh');

  const getUser = async (token) => {
    try {
      const user = await auth.getUserInfo(token);
      const role = await auth.getRole(token);
      user.role = role.is_psychologist ? 'psychologist' : 'client';

      setCurrentUser(user);
      setIsLoggedIn(true);

      if (user.role) {
        return user.role;
      }
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }

    return false;
  };

  const signIn = async (data) => {
    try {
      const token = await auth.authUser(data);

      if (token) {
        localStorage.setItem('jwt', token.access);
        localStorage.setItem('jwt-refresh', token.refresh);

        const role = await getUser(token.access);

        if (role) {
          navigate(`/${role}_account`);
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  };

  const verifyJwt = async (token) => {
    try {
      const tokenAccess = await auth.refreshToken(token);

      if (tokenAccess) {
        localStorage.setItem('jwt', tokenAccess.access);
        await getUser(tokenAccess.access);
      }
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (jwtRefresh) {
      verifyJwt(jwtRefresh);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <PopupProvider>
          <Header isLoggedIn={isLoggedIn} signOut={signOut} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for_a_therapist" element={<PageForPsychologists />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/psychologists_registration" element={<PsychologistRegistration />} />
            {
              !isLoggedIn && (
                <Route
                  path="/signin"
                  element={(
                    <Auth
                      signIn={signIn}
                    />
                  )}
                />
              )
            }
            <Route
              path="/directory_psychologists"
              element={<DirectoryOfPsychologists />}
            />
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
                {/* придумать общий для /change_password */}
                <Route
                  path="/change_password"
                  element={(
                    <ProtectedRouteElement
                      element={ChangePassword}
                      navigate={navigate}
                      loggedIn={isLoggedIn}
                    />
                      )}
                />
              </>
            ) : (
              <>
                <Route
                  path="/change_password"
                  element={(
                    <ProtectedRouteElement
                      element={ChangePassword}
                      navigate={navigate}
                      loggedIn={isLoggedIn}
                    />
                      )}
                />
                <Route
                  path="/client_account"
                  element={(
                    <ProtectedRouteElement
                      element={ClientHomePage}
                      loggedIn={isLoggedIn}
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
          </Routes>
          <Popup />
        </PopupProvider>
      </CurrentUserContext.Provider>
      <ButtonUp />
      <Footer />
    </div>
  );
}
