import { useRef, useState } from "react";
import "./App.css";
import Home from "./components/HomePage/Home";
import LibraryCard from "./components/HomePage/LibraryCard";

function App() {
  const [active, setActive] = useState(false);
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
      <Home setActive={setActive} toggleTheme={toggleTheme} theme={theme} />
      {active && <LibraryCard />}
    </div>
  );
}

export default App;
