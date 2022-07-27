import React from "react";

const Footer_Catogory = ({ Footer_Data, Footer_Heading }) => {
  return (
    <div className="relative bg-[#053065] px-5 xl:p-percent  h-[65  px] ">
      <div className="w-full">
        <div>
          <p className="text-s border-b relative">
            <span className="relative text-[#b6cbe5] uppercase">
              {Footer_Heading ? Footer_Heading : "Top Categories"}
            </span>
          </p>
        </div>
        <div className="my-4 md:mt-0 flex flex-wrap w-full">
          {Footer_Data.map((catogories, i) => {
            return (
              <div
                key={i}
                className="inline-block w-1/2 md:w-auto   md:inline text-white md:mr-6 text-sm leading-7 md:leading-8"
              >
                <a href={"www.google.com"}>{catogories}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer_Catogory;
