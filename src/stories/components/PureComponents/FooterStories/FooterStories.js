import React from "react";

const FooterStories = ({ Footer_Topics, Footer_Stories_Heading }) => {
  return (
    <div className="relative bg-[#053065] px-5 xl:p-percent  ">
      <div className="w-full pt-4 md:pt-0">
        <div>
          <p className="text-s border-b relative">
            <span className="relative text-[#b6cbe5] uppercase">
              {Footer_Stories_Heading
                ? Footer_Stories_Heading
                : "Trending Stories"}
            </span>
          </p>
        </div>
        <div className="md:mt-4 mt-6 flex flex-wrap justify-between">
          {Footer_Topics.map((trending, i) => {
            return (
              <span
                key={i}
                className=" text-sm md:w-1/4 md:pr-2 mb-4 inline-block text-white text-thirteen lh-18 md:lh-22"
              >
                <a href={"www.google.com"}>{trending}</a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterStories;
