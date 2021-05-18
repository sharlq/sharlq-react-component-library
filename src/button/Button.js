
import './button.css';
import React from 'react'
 const Button = ({label,...props}) => {
 
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

export  {Button}