import React from "react";
import { FaArrowUp } from "react-icons/fa";
const Card = ({
  subject = "Subject",
  description = "Description goes here...",
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
}) => {
  return (
    <div
      style={{
        height: "220px",
        minWidth: "280px",
        background: gradient,
        color: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <p style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
          {subject}
        </p>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaArrowUp style={{ transform: "rotate(45deg)", fontSize: "14px" }} />
        </div>
      </section>
      <div style={{ padding: "20px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            lineHeight: "1.5",
            opacity: 0.9,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
