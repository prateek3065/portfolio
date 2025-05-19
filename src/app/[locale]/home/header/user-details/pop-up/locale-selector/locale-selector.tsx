import React from "react";
// import Image from "next/image";
import Flag from "./flag/flag";

const LocaleSelector: React.FC = () => {
  return (
    <div className="locale-selector" style={{ display: "flex", gap: "8px" }}>
      <Flag locale="en" url="https://flagcdn.com/w20/gb.png" />
      <Flag locale="pl" url="https://flagcdn.com/w20/pl.png" />
      <Flag locale="de" url="https://flagcdn.com/w20/de.png" />
    </div>
  );
};

export default LocaleSelector;
