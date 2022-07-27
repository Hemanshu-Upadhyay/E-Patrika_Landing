import React from "react";

const ImageTextgrid = ({ props }) => {
  return (
    <div className="mt-6">
      <div className={props.className}>
        <div className="flex flex-col">
          <div className="flex space-x-2 pb-2">
            <p className="text-xs ">{props.time}</p>
          </div>
          <p className="md:font-normal font-bold md:text-base text-sm pr-2 md:pr-0 md:w-full md:h-full h-12 w-48">
            {props.text}
          </p>
        </div>
        <img
          src={props.image.url}
          alt={props.image.alt}
          className={props.image.className}
        ></img>
      </div>
    </div>
  );
};

export default ImageTextgrid;
