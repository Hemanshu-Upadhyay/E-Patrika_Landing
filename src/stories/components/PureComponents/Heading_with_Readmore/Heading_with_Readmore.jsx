import React from "react";

const Heading_with_Readmore = ({ Heading, Readmore }) => {
  return (
    <div className="flex my-2 items-center relative justify-between">
      <div className="h-px bg-gray-200 border-gray-400 w-full absolute" />
      <p className="font-bold md:text-22px text-lg px-2 ml-3.5 whitespace-nowrap z-10 bg-white">
        {Heading ? Heading : "खबरें"}
      </p>
      <div className="hidden md:block z-10 mr-5">
        <a href="/opinion">
          <button className="bg-gray-200 px-3 py-1 border bg-custom-arrow_gray rounded-2xl mr-4 flex items-center z-10 aur-padhe-hw">
            <span className=" font-semibold mr-2 text-xs whitespace-nowrap lh">
              {Readmore ? Readmore: "और पढ़ें"}
            </span>
            <img
              src="https://new-img.patrika.com/static-assets/rightarrow-icon.svg"
              alt="arrow"
              width={12}
              height={12}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Heading_with_Readmore;
