import React from "react";

const Button = ({ name, color, textColor }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border: "none",
        padding: "15px",
        color: textColor,
        borderRadius: "5px",
        fontWeight: "bold",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
