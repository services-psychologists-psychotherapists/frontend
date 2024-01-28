import React, { useContext } from 'react';
import { object, string, func, bool } from 'prop-types';
import PageLayout from '../../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../../constants/constants';
import UserProfileData from '../../../components/UserProfileData/UserProfileData';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

export default function ClientProfilePage({
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
  changeClientAvatar,
  changeClientData,
  curPath, isLoading,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <PageLayout
      title="Профиль"
      nav={(
        <NavLinksList
          list={CLIENT_PROFILE_NAV_LINKS}
          isList
          variant="menu"
          className="client-profile__nav-links"
        />
      )}
    >
      <UserProfileData
        currentUser={currentUser}
        docIdForRequest={docIdForRequest}
        uploadDocuments={uploadDocuments}
        setDocIdForRequest={setDocIdForRequest}
        changeClientAvatar={changeClientAvatar}
        changeClientData={changeClientData}
        curPath={curPath}
        isLoading={isLoading}
      />
    </PageLayout>
  );
}

ClientProfilePage.propTypes = {
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func,
  changeClientAvatar: func,
  changeClientData: func,
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  isLoading: bool.isRequired,
};

ClientProfilePage.defaultProps = {
  setDocIdForRequest: () => {},
  changeClientAvatar: () => {},
  changeClientData: () => {},
};
