import React from "react";

function Live_desk({ backgroundColor, text, textColor, Heading, time }) {
  return (
    <div
      className="flex flex-col space-y-6 order-3 md:py-0 py-4 md:pl-5 md:w-32%"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex flex-col space-y-2">
        <div className="flex">
          <div className="border-b border-grey-500 w-3.5 h-4" />
          <p className="font-bold text-lg px-2 whitespace-nowrap">
            {Heading ? Heading : "लाईव डेस्क"}
          </p>
          <div className="border-b border-grey-500 w-full h-4" />
        </div>
        <div className="overflow-y-auto h-72 pl-2 pr-4 flex md:mx-0 mx-4">
          <div
            style={{ height: "300}px" }}
            className="vertical-divider mt-3.5 border-l border-gray-300 h-full mr-3 md:block hidden"
          />
          <div
            style={{ height: "264px" }}
            className="vertical-divider mt-3.5 border-l border-gray-300 h-full mr-3 block md:hidden"
          />
          <div className="flex flex-col divide-y space-y-2">
            {text.map((item, index) => (
              <div className="w-full pb-3 pt-2.5">
                <div className="live-desk-timestamp flex space-x-2 margin-5 live">
                  <p className=" text-time "> {time ? time : "50 Mins Ago"}</p>
                </div>
                <a href="www.google.com">
                  <p
                    className="md:font-normal font-bold md:text-fifteen md:leading-5 text-sm line-clamp-3"
                    style={{ color: textColor }}
                    id={index}
                  >
                    {item}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live_desk;
