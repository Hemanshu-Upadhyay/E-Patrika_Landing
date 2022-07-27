import React from "react";
import "./Opinion_display.css";

function OpinionDisplay({ opinion, textColor }) {
  return (
    <>
      <div className="border rounded-lg p-4 w-1/4">
        <p className="w-52" style={{ color: textColor }}>
          {opinion}
        </p>
        <div className="flex justify-between">
          <p className="text-sm py-4 font-bold Text">E-Patrika</p>
          <img
            className="Logo-image"
            src={
              "https://new-img.patrika.com/upload/profile/2021/Patrika_1637650009.png"
            }
            style={{ height: "70px" }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default OpinionDisplay;
