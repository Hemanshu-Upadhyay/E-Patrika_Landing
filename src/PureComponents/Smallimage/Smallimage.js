import React from "react";

const Smallimage = ({ props }) => {
  return (
    <div className=" flex py-4 justify-between">
      <div className="flex flex-col w-56">
        <div className="flex space-x-2" />
        <a href="/">
          <p className="font-bold text-sm pt-1 leading-4.5 ">{props.text}</p>
        </a>
      </div>
      <div className="pt-1.5">
        <a href="/">
          <img
            style={{
              display: "block",
              maxWidth: "100%",
              width: "100px",
              height: "70px",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            }}
            alt=""
            aria-hidden="true"
            src={props.image.url}
          />
        </a>
      </div>
    </div>
  );
};

export default Smallimage;
