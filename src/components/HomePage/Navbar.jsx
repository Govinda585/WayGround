import React from "react";
import Button from "./Button";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ setActive, toggleTheme, theme }) => {
  const dropDown = () => {
    setActive(true);
  };
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",

        padding: "10px 24px",
      }}
    >
      <div style={{ margin: "0px 25px" }}>
        <h2 style={{ margin: 0, color: "#f30c87" }}>WayGround</h2>
        <p style={{ fontSize: "15px", margin: 0 }}>formerly Quizizz</p>
      </div>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        <p>School & District</p>
        <p>Plans</p>
        <p onClick={dropDown}>Library ^</p>

        <p>Math Practice</p>
        <p>For Business ^</p>
        <Button name="Get a Quote" color="#eee" textColor="black" />
        <p>Enter Code</p>
        <p>Login in</p>
        <Button name="Sign up" color="#f30c87" textColor="white" />
        <button
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            fontSize: "1.2rem",
            marginLeft: "15px",
            display: "flex",
            alignItems: "center",
          }}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
