import React, {
  createContext,
  useState,
} from 'react';

import PropTypes from 'prop-types';

const PopupContext = createContext();

let dataPopup;
const usePopup = () => {
  const [value, setValue] = useState();
  dataPopup = value;
  console.log(dataPopup);
  return {
    setValue,
  };
};

export default function PopupProvider({ children, value = dataPopup }) {
  return (
    <PopupContext.Provider value={value}>
      {console.log('внутри контекста', value)}
      {children}
    </PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
};

export { PopupContext, usePopup };
