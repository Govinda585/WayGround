import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <div
      style={{
        fontSize: "40px",
        textAlign: "center",
        width: "700px",
        alignItems: "center",
        margin: "0 auto",
      }}
    >
      <h1>Quizizz is now</h1>
      <h1
        style={{
          textTransform: "uppercase",
          fontFamily: "sans-serif",
          margin: "0px",
          marginTop: "-50px",
        }}
      >
        wayground
      </h1>
      <h5>
        Bridge classroom realities and curriculum expectations with the platform
        that’s AI-supported, but teacher-first.
      </h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          name="Teachers Sign up for free"
          color="#f30c87"
          textColor="white"
        />
        <Button
          name="ADMINISTRATORS Get in touch"
          color="white"
          textColor="black"
        />
      </div>
    </div>
  );
};

export default Main;
