// InputTextField.jsx
import React from "react";
import "../InputTextField/InputTextField.css"

const InputTextField = ({
    label = "",
    placeholder = "Enter...",
    value,
    onChange = () => { }, // ✅ Default empty function
    type = "text",
    name,
    className = "",
}) => {
    return (

        <input
            className={`input-text-field-default ${className}`}
            label="jned"
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}

        />

    );
};

export default InputTextField;
