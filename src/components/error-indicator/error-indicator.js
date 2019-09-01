import React from 'react';
import './error-indicator.css';

const ErrorIndicator = (props) => {
  return <div>{props.error}</div>;
};

export default ErrorIndicator;
