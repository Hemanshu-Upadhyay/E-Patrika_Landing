import React from "react";

const IconDisplay = ({ url }) => {
  return (
    <div className="flex m-b-26 flex-wrap mt-4">
      <a href={"www.google.com"}>
        <img src={`${url}`} className="mr-4 mb-2" alt="epatrika" />
      </a>
    </div>
  );
};

export default IconDisplay;
