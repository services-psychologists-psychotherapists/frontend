import React from 'react';
import { object, string, func } from 'prop-types';
import PageLayout from '../../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../../constants/constants';
import UserProfileData from '../../../components/UserProfileData/UserProfileData';

export default function ClientProfilePage({
  currentUser,
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
  changeClientAvatar,
  changeClientData,
  curPath,
}) {
  return (
    <PageLayout
      title="Профиль"
      nav={(
        <NavLinksList
          list={CLIENT_PROFILE_NAV_LINKS}
          direction="column"
          variant="violet"
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
      />
    </PageLayout>
  );
}

ClientProfilePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func,
  changeClientAvatar: func,
  changeClientData: func,
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
};

ClientProfilePage.defaultProps = {
  currentUser: {},
  setDocIdForRequest: () => {},
  changeClientAvatar: () => {},
  changeClientData: () => {},
};
