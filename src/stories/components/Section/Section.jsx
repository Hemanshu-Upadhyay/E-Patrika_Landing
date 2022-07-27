import React from "react";
import day_string from "../../../utils/day";
import dateString from "../../../utils/date";
import "./Section.css";

function Section({
  height,
  width,
  color,
  daytext,
  datetext,
  backgroundColor,
  imagetop,
  imageright,
}) {
  return (
    <>
      <div className="Navbar" style={{ backgroundColor, width, height }}>
        <div className="date" style={{ color }}>
          {daytext ? daytext : day_string}, {datetext ? datetext : dateString}
        </div>
        <div>
          <a href="Epatrika.com">
            <img
              className="Navbar-logo"
              style={{ position: "absolute", top: imagetop, right: imageright }}
              src="https://new-img.patrika.com/static-assets/patrika-logo.png"
              alt="patrika-logo-header"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Section;
