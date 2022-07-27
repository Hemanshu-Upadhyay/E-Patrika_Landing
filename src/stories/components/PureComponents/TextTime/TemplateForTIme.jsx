import React from "react";
import TextTime from "./TextTime";

const TempleteforTime = ({ Live_desk, Heading, color, TimeColor }) => {
  return (
    <div className="ml-4 order-2 md:order-1 mt-4 md:mt-0 md:pr-1 md:w-[22.5%]">
      <div className="md:pr-4 md:w-80 order-2 md:order-1 mt-4 md:mt-0 md:pl-0 pl-2">
        <div className="flex">
          <div className="border-b border-custom-border_gray w-3.5 h-4"></div>
          <p className="font-bold text-lg pl-2 w-8/12">
            {Heading ? Heading : "बड़ी खबरें"}
          </p>
          <div className="border-b border-custom-border_gray w-full h-4"></div>
        </div>
        <div className="md:px-0 px-2 md:w-86 ">
          {Live_desk.map((data, index) => {
            return (
              <TextTime props={data} color={color} TimeColor={TimeColor} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TempleteforTime;
