import React from "react";

const ImageText = ({ props }) => {
  return (
    <div className={`${props.className}`}>
      <img
        src={props.image.url}
        alt={props.image.alt}
        className={`${props.image.className} cursor-pointer`}
      />
      <div className={`${props.title.className} cursor-pointer`}>{props.title.name}</div>
      <p className=" border-grey border-b-2 w-[190px] "></p>
    </div>
  );
};
export default ImageText;
