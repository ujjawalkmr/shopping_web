import React from 'react';
import "../Buttons/Button.css";

const Button = ({ label, onClick, className = "" }) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
