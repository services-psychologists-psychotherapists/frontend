import React from 'react';
import './ProfileInfoBlock.css';
import { node, string } from 'prop-types';

export default function ProfileInfoBlock({ children, title }) {
  return (
    <div className="profile-info-block">
      <h3 className="profile-info-block__title">{title}</h3>
      {children}
    </div>
  );
}

ProfileInfoBlock.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};
