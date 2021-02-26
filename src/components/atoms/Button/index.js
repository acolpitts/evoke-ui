import React from 'react';

import './button.styles.scss';

const Button = ({message = 'Hello World'}) => (
  <button className="btn">{message}</button>
)

export default Button;