import React from "react";
import "../dropDown/DropDown.css";

const CustomDropDown = ({
    label = "",
    options = [],
    value = "",
    onChange = () => { },
    name = "",
    className = "",
}) => {
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`custom-dropdown-default ${className}`}
            >
                <option value="" disabled>Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    );
};

export default CustomDropDown;
