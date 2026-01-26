import React from "react";
import Button from "./Button";

const Navbar = () => {
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
        <p>Library ^</p>

        <p>Math Practice</p>
        <p>For Business ^</p>
        <Button name="Get a Quote" color="#eee" textColor="black" />
        <p>Enter Code</p>
        <p>Login in</p>
        <Button name="Sign up" color="#f30c87" textColor="white" />
      </nav>
    </header>
  );
};

export default Navbar;
