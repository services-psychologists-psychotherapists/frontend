import React from 'react';
import { node, oneOf, string } from 'prop-types';
import './BlockWithTitle.css';
import Title from '../../generic/Title/Title';

export default function BlockWithTitle({
  children, title, size, constainerClasses,
  titleLvl, titleClasses,
}) {
  return (
    <div
      className={
        `block-with-title${constainerClasses
          ? ` ${constainerClasses}` : ''} block-with-title_size_${size}`
      }
    >
      <Title
        size={size}
        text={title}
        titleLvl={titleLvl}
        className={titleClasses}
      />
      {children}
    </div>
  );
}

BlockWithTitle.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  size: oneOf(['xs', 'm']),
  constainerClasses: string,
  titleLvl: string,
  titleClasses: string,
};

BlockWithTitle.defaultProps = {
  size: 'xs',
  constainerClasses: '',
  titleLvl: '3',
  titleClasses: '',
};
