import React from 'react';
import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-img text-center" 
      src={icon}
      alt="error"/>
      <h1> OOPS... </h1>
      <span className="d-flex">
          Что-то пошло не так!
      </span>
      <span className="span2 text-center">
          Мы отправили профессионалов, <br /> чтоб подчинить поломку...
      </span>
  </div>
  )
};

export default ErrorIndicator;
