import React from 'react';
import { node, oneOf, string } from 'prop-types';
import './BlockWithTitle.css';
import Title from '../../generic/Title/Title';

export default function BlockWithTitle({ children, title, size }) {
  return (
    <div className={`block-template block-template_size_${size}`}>
      <Title size={size} text={title} titleLvl="3" />
      {children}
    </div>
  );
}

BlockWithTitle.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  size: oneOf(['xs', 'm']),
};

BlockWithTitle.defaultProps = {
  size: 'xs',
};
