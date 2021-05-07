
import './button.css';

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