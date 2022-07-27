import React from "react";
const HederImageDisplay = ({ props }) => {
  return (
    <div className={`${props.className} cursor-pointer`}>
      <div className="text-3xl font-bold pb-2">
              <a href="/">
                {props.title.name}
              </a>
            </div>
      <img
        className={props.image.className}
        src={props.image.url}
        alt={props.image.alt}
        style={{
          minWidth: "450px",
          minHeight: "25px",
          maxWidth: "450px",
          maxHeight: "235px",
        }}
      />
    </div>
  );
};

export default HederImageDisplay;
