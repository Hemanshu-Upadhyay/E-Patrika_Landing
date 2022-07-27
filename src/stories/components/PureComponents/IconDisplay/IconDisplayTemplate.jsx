import React from "react";
import IconDisplay from "./IconDisplay";

const IconDisplayTemplate = ({ Iconurl, Heading }) => {
  return (
    <div className="relative bg-[#053065] px-5 xl:p-percent ">
      <p className="text-xs text-[#b6cbe5]  uppercase m-b-11">
        {Heading ? Heading : "Follow Us"}
      </p>
      <div className="flex m-b-20 flex-wrap">
        {Iconurl.map((url2, i) => {
          return (
            <a href={"www.google.com"} key={i}>
              <IconDisplay url={url2} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default IconDisplayTemplate;
