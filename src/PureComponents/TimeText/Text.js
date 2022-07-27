import React from "react";

const Timetext = ({ props }) => {
  return (
    <div className="ml-2 w-full pb-4 pt-2.5">
      <div className="flex space-x-2 margin-5 " />
      <a href="/">
        <div className="flex space-x-2 margin-5">
          <p className=" text-time ">{props.time}</p>
        </div>
        <p className="md:font-normal font-bold md:text-fifteen md:leading-5 text-sm line-clamp-3">
          {props.text}
        </p>
      </a>
    </div>
  );
};

export default Timetext;
