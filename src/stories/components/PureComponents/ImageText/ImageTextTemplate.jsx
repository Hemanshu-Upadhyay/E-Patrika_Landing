import React from "react";
import ImageText from "./ImageText";

const ImageTextTemplate = ({ SectionNews, gridarea, Texcolor }) => {
  return (
    <div>
      <div className="grid grid-cols-4 md:font-normal m-0 p-0 font-bold">
        {SectionNews.map((d, index) => {
          return (
            <div key={index} className="mt-5">
              <ImageText props={d} Texcolor={Texcolor} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageTextTemplate;
