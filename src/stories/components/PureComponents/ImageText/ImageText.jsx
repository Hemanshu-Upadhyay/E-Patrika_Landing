import React from "react";

const ImageText = ({ props, Texcolor }) => {
  return (
    <div className={props.className}>
      <img
        src={props.image.url}
        alt={props.image.alt}
        className={props.image.className}
      />
      <div
        className={props.title.className}
        style={{ color: Texcolor, marginTop: "10px" }}
      >
        {props.title.name}
      </div>
      <p className=" border-grey border-b-2 "></p>
    </div>
  );
};
export default ImageText;
