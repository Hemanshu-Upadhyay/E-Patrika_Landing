import React from "react";
import "./OpinionDisplay.css";

function OpinionDisplay({ opinion }) {
  return (
    <>
      <div className="border rounded-lg p-4 h-42 w-72 ">
        <p className="w-52">{opinion.text}</p>
        <div className="flex justify-between">
          <p className="text-sm py-4 font-bold Text ">{opinion.text2}</p>
          <img
            className="Logo-image"
            src={
              "https://new-img.patrika.com/upload/profile/2021/Patrika_1637650009.png"
            }
            alt={"img-logo"}
            style={{ height: "60px" }}
          />
        </div>
      </div>
    </>
  );
}

export default OpinionDisplay;
