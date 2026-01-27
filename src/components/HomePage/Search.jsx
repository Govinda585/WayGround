import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "30px",
          padding: "10px 20px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          width: "500px",
          maxWidth: "90%",
        }}
      >
        <FaSearch style={{ color: "#888", marginRight: "10px", fontSize: "1.2rem" }} />
        <input
          type="text"
          placeholder="Search for quizzes on any topic..."
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: "1rem",
            color: "#333",
          }}
        />
        <button
          style={{
            backgroundColor: "#8854c0",
            color: "white",
            border: "none",
            borderRadius: "20px",
            padding: "8px 20px",
            marginLeft: "10px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9b6dcf")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8854c0")}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
