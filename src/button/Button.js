import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export const Button = ({label,...props}) => {
 
  return (
    <button
      type="button"
      className={['sharlq-button']}
      {...props}
    >
      {label}
    </button>
  );
};
