import { useState } from "react";
import { ClipLoader } from "react-spinners";

function Button(
    { label, onClick, type = "button", disabled = false, isLoading = false }
) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}

            style={{
                minHeight: "20px",
                minWidth: "80px",
                padding: "8px 20px",
                backgroundColor: disabled === false ? isHovered ? "rgb(13, 1, 57)" : "rgba(29, 10, 97, 1) " : "#4507ef32",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid #d6820cff"

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            {isLoading ? (
                <ClipLoader size={16} color="#fff" />
            ) : (
                label
            )}

        </button>
    );
}
export default Button