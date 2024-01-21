import React from 'react';
import './InfoBlock.css';
import { node, string } from 'prop-types';

export default function ProfileInfoBlock({ children, title }) {
  return (
    <div className="info-block">
      <h3 className="info-block__title">{title}</h3>
      {children}
    </div>
  );
}

ProfileInfoBlock.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};
