import React from "react";

import { PiStarFourFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const SingleRow = ({ Icon, label, addIcon, onClick, hoverColor }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <section
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 16px",
        cursor: "pointer",
        backgroundColor: hover ? hoverColor : "transparent",
        transition: "background-color 0.2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Icon size={18} />
        <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>{label}</p>
      </div>
      <p style={{ margin: 0, fontSize: "14px" }}>{addIcon}</p>
    </section>
  );
};

const LibraryCard = ({ setActive, theme }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#2A2B2E" : "white";
  const textColor = isDark ? "#E0E0E0" : "#333";
  const border = isDark ? "1px solid #444" : "1px solid #e0e0e0";
  const hoverColor = isDark ? "#3A3B3E" : "#f5f5f5";

  const closeDropdown = () => {
    if (setActive) setActive(false);
  };

  return (
    <div
      style={{
        backgroundColor: bg,
        borderRadius: "12px",
        width: "260px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        padding: "8px 0",
        color: textColor,
        border: border,
        overflow: "hidden", // Ensures hover effect stays within rounded corners
      }}
    >
      <SingleRow
        Icon={PiStarFourFill}
        label="AI generator"
        addIcon="+"
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
      <SingleRow
        Icon={FaBook}
        label="Browse by Standard"
        addIcon=""
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
      <SingleRow
        Icon={MdLibraryBooks}
        label="Browse by Subjects"
        addIcon="+"
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
      <div
        style={{
          borderTop: isDark ? "1px solid #444" : "1px solid #f0f0f0",
          margin: "8px 0",
        }}
      ></div>
      <SingleRow
        Icon={FaPencilAlt}
        label="Elementary"
        addIcon="+"
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
      <SingleRow
        Icon={FaPenNib}
        label="Middle School"
        addIcon="+"
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
      <SingleRow
        Icon={FaGraduationCap}
        label="High School"
        addIcon="+"
        onClick={closeDropdown}
        hoverColor={hoverColor}
      />
    </div>
  );
};

export default LibraryCard;
