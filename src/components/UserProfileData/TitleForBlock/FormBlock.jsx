import React from 'react';
import { node, string } from 'prop-types';
import './FormBlock.css';
import Text from '../../generic/Text/Text';

export default function FormBlock({ children, text }) {
  return (
    <div className="user-data__form-block">
      <Text
        size="s"
        className="user-data__block-title"
      >
        {text}
      </Text>
      {children}
    </div>
  );
}

FormBlock.propTypes = {
  children: node.isRequired,
  text: string,
};

FormBlock.defaultProps = {
  text: '',
};
