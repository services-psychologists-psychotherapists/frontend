import React from 'react';
import { node, string } from 'prop-types';
import './BlockTemplate.css';
import Title from '../generic/Title/Title';

export default function BlockTemplate({ children, title }) {
  return (
    <div className="block-template">
      <Title size="xs" text={title} titleLvl="3" />
      {children}
    </div>
  );
}

BlockTemplate.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};
