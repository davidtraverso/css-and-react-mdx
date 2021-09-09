import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
    isDisabled = false,
    text = 'button',
}) => (
    <button disabled={isDisabled}>{text}</button>
);

export default Button;
