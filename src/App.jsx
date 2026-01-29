import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/HomePage/Navbar";
import Home from "./components/HomePage/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`app ${theme}`}
      style={{
        backgroundColor: theme === "dark" ? "#3b142a" : "#f0f2f5",
        color: theme === "dark" ? "white" : "#1a1a1a",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/signup" element={<Signup theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
