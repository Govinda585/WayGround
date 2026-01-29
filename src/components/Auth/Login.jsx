import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = ({ theme }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    console.log("Logging in with:", formData);
    navigate("/");
  };

  const isDark = theme === "dark";
  const bgColor = isDark ? "#2A2B2E" : "#ffffff";
  const textColor = isDark ? "#E0E0E0" : "#333333";
  const inputBg = isDark ? "#3A3B3E" : "#f5f5f5";
  const borderColor = isDark ? "#444" : "#e0e0e0";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 80px)", // Approximate header height adjustment
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          borderRadius: "16px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          color: textColor,
          border: `1px solid ${borderColor}`,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>Welcome Back</h2>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: `1px solid ${borderColor}`,
                backgroundColor: inputBg,
                color: textColor,
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box", // Important for padding
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500" }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: `1px solid ${borderColor}`,
                backgroundColor: inputBg,
                color: textColor,
                fontSize: "16px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#f30c87",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "opacity 0.2s",
              marginTop: "10px",
            }}
          >
            Log in
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", margin: "24px 0" }}>
          <div style={{ flex: 1, height: "1px", backgroundColor: borderColor }}></div>
          <span style={{ padding: "0 10px", fontSize: "14px", opacity: 0.7 }}>OR</span>
          <div style={{ flex: 1, height: "1px", backgroundColor: borderColor }}></div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <SocialButton Icon={FaGoogle} label="Google" isDark={isDark} borderColor={borderColor} />
          <SocialButton Icon={FaFacebook} label="Facebook" isDark={isDark} borderColor={borderColor} />
          <SocialButton Icon={FaApple} label="Apple" isDark={isDark} borderColor={borderColor} />
        </div>

        <p style={{ textAlign: "center", marginTop: "24px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#f30c87", textDecoration: "none", fontWeight: "bold" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

const SocialButton = ({ Icon, label, isDark, borderColor }) => (
  <button
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      borderRadius: "8px",
      border: `1px solid ${borderColor}`,
      backgroundColor: "transparent",
      color: isDark ? "white" : "#333",
      cursor: "pointer",
      fontSize: "20px",
    }}
    title={`Continue with ${label}`}
  >
    <Icon />
  </button>
);

export default Login;
