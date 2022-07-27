import React from "react";
import OpinionDisplay from "./Opinion_Display/Opinion_display";

function Opinion({ Textdata, Heading, backgroundColor, textColor }) {
  const authorData = [
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
  ];

  return (
    <div>
      <div className="flex my-2">
        <div className="border-b border-grey-500 w-3.5 h-4"></div>
        <p className="font-bold text-xl px-2 w-4/12">
          {Heading ? Heading : "ओपिनियन"}
        </p>
        <div className="border-b border-grey-500 w-full h-4"></div>
      </div>
      <div
        className="flex space-x-4 my-4 md:overflow-hidden overflow-x-auto md:mx-0 mx-4"
        style={{ backgroundColor: backgroundColor }}
      >
        {Textdata.map((data, index) => {
          return (
            <OpinionDisplay opinion={data} textColor={textColor} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default Opinion;
