import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import PsychologistAccount from '../../pages/PsychologistAccount/PsychologistAccount';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ClientHomePage from '../../pages/ClientHomePage/ClientHomePage';
import ButtonUp from '../generic/ButtonUp/ButtonUp';
import { PopupProvider } from '../../hooks/usePopup';
import Popup from '../Popup/Popup';
import SessionRegistrationForClient from '../../pages/SessionRegistrationForClient/SessionRegistrationForClient';
import Auth from '../../pages/Auth/Auth';
import { uploadFile, getRole, getUserInfo, authUser,
  resetPasswordWithEmail, refreshToken, changePsychoData,
  changeClientData,
} from '../../utils/services/Api';
import DirectoryOfPsychologists from '../../pages/DirectoryOfPsychologists/DirectoryOfPsychologists';
import Header from '../Header/Header';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import ChangePassword from '../../pages/ChangePassword/ChangePassword';
import PsychologistRegistration from '../../pages/PsychologistRegistration/PsychologistRegistration';
import ClientProfilePage from '../../pages/ClientHomePage/ClientProfilePage/ClientProfilePage';
import CreatePassword from '../../pages/CreatePassword/CreatePassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import CheckEmail from '../../pages/CheckEmail/CheckEmail';
import Preloader from '../generic/Preloader/Preloader';

export default function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const jwtRefresh = localStorage.getItem('jwt-refresh');
  const curPath = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [docIdForRequest, setDocIdForRequest] = useState('');

  const uploadDocuments = async (document, setPopup) => {
    setIsLoading(true);
    try {
      const docData = await uploadFile(document);

      setDocIdForRequest(docData.id);
    } catch (err) {
      console.log(err);
      setDocIdForRequest('');
      setPopup({
        data: {
          title: 'При загрузке документа произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
    }

    return false;
  };

  const getUser = async (token) => {
    try {
      const userParams = await getRole(token);
      const userRole = userParams.is_psychologists ? 'psychologist' : 'client';
      const user = await getUserInfo(token, userRole);
      user.role = userRole;
      user.email = userParams.email;

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

  const signIn = async (data, setPopup) => {
    setIsLoading(true);
    try {
      const token = await authUser(data);

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

      setPopup({
        data: {
          title: 'При авторизации произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    navigate('/');
  };

  const verifyJwt = async (token) => {
    setIsLoadingPage(true);
    try {
      const tokenAccess = await refreshToken(token);

      if (tokenAccess) {
        localStorage.setItem('jwt', tokenAccess.access);
        await getUser(tokenAccess.access);
      }
    } catch (err) {
      console.log(err);
      signOut();
    } finally {
      setIsLoadingPage(false);
    }
  };

  const resetPassword = async (email, setPopup) => {
    setIsLoading(true);
    try {
      await resetPasswordWithEmail(email);

      setPopup({
        data: {
          title: 'Ссылка для установки пароля отправлена на ваш email',
        },
      });
    } catch (err) {
      console.log(err);

      setPopup({
        data: {
          title: 'При отправке произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const changePsychoAvatar = async (avatar, token, setPopup) => {
    try {
      const psychoData = await changePsychoData({ avatar }, token);

      setCurrentUser((prevData) => ({
        ...prevData,
        avatar: psychoData.avatar,
      }));

      setPopup({
        data: {
          title: 'Аватар был успешно изменен',
        },
      });
    } catch (err) {
      console.log(err);

      setPopup({
        data: {
          title: 'При загрузке произошла ошибка',
        },
      });
    }
  };

  const checkChangePsychoData = (userData, prevUserData) => {
    if (userData && prevUserData) {
      if (userData.length !== prevUserData.length) {
        return true;
      }
      const dict = new Set(prevUserData.map((i) => i.title));

      return userData.some((i) => !dict.has(i));
    }

    return false;
  };

  const updatePsychoData = (data) => {
    const newData = { ...data };

    if (newData.institutes) {
      newData.institutes = data.institutes.slice(currentUser.institutes.length);
    }

    if (newData.courses) {
      newData.courses = data.courses.slice(currentUser.courses.length);
    }

    if (!checkChangePsychoData(data.approaches, currentUser.approaches)) {
      delete newData.approaches;
    }

    if (!checkChangePsychoData(data.themes, currentUser.themes)) {
      delete newData.themes;
    }

    return newData;
  };

  const changePsychologistData = async (data, token, setPopup) => {
    setIsLoading(true);
    try {
      if (!data.themes || !data.approaches) {
        setPopup({
          data: {
            title: 'Заполните направления работы и подходы',
          },
        });
      } else {
        const newData = updatePsychoData(data);
        const psychoData = await changePsychoData(newData, token);

        setCurrentUser((prevData) => ({
          ...prevData,
          ...psychoData,
        }));

        setPopup({
          data: {
            title: 'Данные были успешно изменены',
          },
        });
      }
    } catch (err) {
      console.log(err);

      setPopup({
        data: {
          title: 'При изменении данных произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const changeClientAvatar = async (avatar, token, setPopup) => {
    try {
      const clientData = await changeClientData({ avatar }, token);

      setCurrentUser((prevData) => ({
        ...prevData,
        avatar: clientData.avatar,
      }));

      setPopup({
        data: {
          title: 'Аватар был успешно изменен',
        },
      });
    } catch (err) {
      console.log(err);

      setPopup({
        data: {
          title: 'При загрузке произошла ошибка',
        },
      });
    }
  };

  const changeClientInfo = async (data, token, setPopup) => {
    setIsLoading(true);
    try {
      const clientData = await changeClientData(data, token);

      setCurrentUser((prevData) => ({
        ...prevData,
        ...clientData,
      }));

      setPopup({
        data: {
          title: 'Данные были успешно изменены',
        },
      });
    } catch (err) {
      console.log(err);

      setPopup({
        data: {
          title: 'При изменении данных произошла ошибка',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (jwtRefresh) {
      verifyJwt(jwtRefresh);
    } else {
      setIsLoggedIn(false);
      localStorage.clear();
    }
  }, []);

  return (
    <PopupProvider>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          {!isLoadingPage ? (
            <>
              <Header isLoggedIn={isLoggedIn} signOut={signOut} />
              {/* настроить роуты */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/for_a_therapist" element={<PageForPsychologists />} />
                <Route path="/check_email" element={<CheckEmail />} />
                <Route
                  path="/reset_password"
                  element={(
                    <ResetPassword
                      resetPassword={resetPassword}
                      isLoading={isLoading}
                    />
                  )}
                />
                <Route
                  path="/create_password/*"
                  element={(
                    <CreatePassword
                      curPath={curPath}
                      goBack={goBack}
                      resetPassword={resetPassword}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  )}
                />
                <Route path="/*" element={<NotFound />} />
                <Route
                  path="/psychologists_registration"
                  element={(
                    <PsychologistRegistration
                      docIdForRequest={docIdForRequest}
                      setDocIdForRequest={setDocIdForRequest}
                      uploadDocuments={uploadDocuments}
                      curPath={curPath}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  )}
                />
                {isLoggedIn && (
                  <Route
                    path="/change_password"
                    element={(
                      <ProtectedRouteElement
                        element={ChangePassword}
                        navigate={navigate}
                        loggedIn={isLoggedIn}
                        goBack={goBack}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                      />
                    )}
                  />
                )}
                {!isLoggedIn && (
                <Route
                  path="/signin"
                  element={(
                    <Auth
                      signIn={signIn}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                    )}
                />
                )}
                <Route
                  path="/directory_psychologists"
                  element={(
                    <DirectoryOfPsychologists
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                      setIsLoading={setIsLoading}
                    />
                  )}
                />
                {isLoggedIn && currentUser.role === 'psychologist' ? (
                  <>
                    <Route
                      path="/psychologist_account"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          curPath={curPath}
                          loggedIn={isLoggedIn}
                          docIdForRequest={docIdForRequest}
                          uploadDocuments={uploadDocuments}
                          setDocIdForRequest={setDocIdForRequest}
                          changePsychoAvatar={changePsychoAvatar}
                          changePsychologistData={changePsychologistData}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                        />
                      )}
                    />
                    <Route
                      path="/psychologist_account_schedule"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          curPath={curPath}
                          loggedIn={isLoggedIn}
                          docIdForRequest={docIdForRequest}
                          uploadDocuments={uploadDocuments}
                          setDocIdForRequest={setDocIdForRequest}
                          changePsychoAvatar={changePsychoAvatar}
                          changePsychologistData={changePsychologistData}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                        />
                      )}
                    />
                    <Route
                      path="/psychologist_account_profile"
                      element={(
                        <ProtectedRouteElement
                          element={PsychologistAccount}
                          curPath={curPath}
                          loggedIn={isLoggedIn}
                          docIdForRequest={docIdForRequest}
                          uploadDocuments={uploadDocuments}
                          setDocIdForRequest={setDocIdForRequest}
                          changePsychoAvatar={changePsychoAvatar}
                          changePsychologistData={changePsychologistData}
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                        />
                      )}
                    />
                  </>
                ) : isLoggedIn && (
                <>
                  <Route
                    path="/client_account"
                    element={(
                      <ProtectedRouteElement
                        element={ClientHomePage}
                        loggedIn={isLoggedIn}
                        getUser={getUser}
                      />
                    )}
                  />
                  <Route
                    path="/client_profile"
                    element={(
                      <ProtectedRouteElement
                        element={ClientProfilePage}
                        loggedIn={isLoggedIn}
                        docIdForRequest={docIdForRequest}
                        setDocIdForRequest={setDocIdForRequest}
                        uploadDocuments={uploadDocuments}
                        changeClientAvatar={changeClientAvatar}
                        changeClientData={changeClientInfo}
                        curPath={curPath}
                        isLoading={isLoading}
                      />
                      )}
                  />
                  <Route
                    path="/client_account_session-registration/:id/:date?/:time?/:cellId?"
                    element={(
                      <ProtectedRouteElement
                        element={SessionRegistrationForClient}
                        loggedIn={isLoggedIn}
                        goBack={goBack}
                        isLoading={isLoading}
                      />
                      )}
                  />
                </>
                )}
              </Routes>
              <Popup />
              <ButtonUp />
              <Footer />
            </>
          ) : <Preloader />}
        </div>
      </CurrentUserContext.Provider>
    </PopupProvider>
  );
}
