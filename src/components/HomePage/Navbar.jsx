import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FaSun, FaMoon } from "react-icons/fa";
import LibraryCard from "./LibraryCard";

const Navbar = ({ toggleTheme, theme }) => {
  const [showLibrary, setShowLibrary] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropDown = () => {
    setShowLibrary(!showLibrary);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLibrary(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",

        padding: "10px 24px",
      }}
    >
      <div style={{ margin: "0px 25px", cursor: "pointer" }} onClick={() => navigate("/")}>
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
        <div ref={dropdownRef} style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p
            onClick={dropDown}
            style={{ cursor: "pointer", margin: 0 }}
          >
            Library {showLibrary ? "^" : "v"}
          </p>
          {showLibrary && (
            <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", zIndex: 1000, marginTop: "15px" }}>
              <LibraryCard setActive={setShowLibrary} theme={theme} />
            </div>
          )}
        </div>

        <p>Math Practice</p>
        <p>For Business ^</p>
        <Button name="Get a Quote" color="#eee" textColor="black" />
        <p>Enter Code</p>
        <p>Enter Code</p>
        <p onClick={() => navigate("/login")} style={{cursor: "pointer"}}>Login in</p>
        <div onClick={() => navigate("/signup")}>
          <Button name="Sign up" color="#f30c87" textColor="white" />
        </div>
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
