import React from 'react';
import { object, string, func } from 'prop-types';
import './ClientProfilePage.css';
import PageLayout from '../../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../../components/NavLinksList/NavLinksList';
import { CLIENT_PROFILE_NAV_LINKS } from '../../../constants/constants';
import UserProfileData from '../../../components/UserProfileData/UserProfileData';

export default function ClientProfilePage({
  currentUser,
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
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
      />
    </PageLayout>
  );
}

ClientProfilePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
};

ClientProfilePage.defaultProps = {
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: {},
};
