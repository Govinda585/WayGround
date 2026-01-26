import React from "react";

import { PiStarFourFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

const SingleRow = ({ Icon, label, addIcon }) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      <Icon size={20} />
      <p>{label}</p>
      <p>{addIcon}</p>
    </section>
  );
};
const LibraryCard = () => {
  return (
    <div
      style={{
        backgroundColor: "green",
        borderRadius: "5px",
        width: "200px",
        margin: "0px 10px",
      }}
    >
      <SingleRow Icon={PiStarFourFill} label="AI generator" addIcon="+" />
      <SingleRow Icon={FaBook} label="Browse by Standard" addIcon="" />
      <SingleRow Icon={MdLibraryBooks} label="Browse by Subjects" addIcon="+" />
      <SingleRow Icon={FaPencilAlt} label="Elementary" addIcon="+" />
      <SingleRow Icon={FaPenNib} label="Middle School" addIcon="+" />
      <SingleRow Icon={FaGraduationCap} label="High School" addIcon="+" />
    </div>
  );
};

export default LibraryCard;
