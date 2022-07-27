import React from 'react'
import ImageTextgrid from './ImageTextgrid';


const Imagetextgridtemplete = ({TaazaKhabre_data, Heading}) => {
    return (
        <div className="relative left-16 ml-4 mt-6 w-[86%] mb-6">
          <div className="flex ml-4">
            <div className="border-b border-grey-500 w-3.5 h-4"></div>
            <p className="px-2 md:w-8/12 w-6/12 font-bold text-xl mb-[-11px]">
              {Heading ? Heading : "ताज़ा खबरें"}
            </p>
            <div className="border-b border-grey-500 w-full h-4"></div>
          </div>
    
          <div className=" grid grid-flow-col grid-rows-3 gap-4 text-sm divide-y divide-border-grey-500 md:overflow-scroll overflow-y-auto mx-4 md:mx-0">
            {TaazaKhabre_data.map((data, index) => {
              return <ImageTextgrid props={data} key={index} />;
            })}
          </div>
        </div>
      );
}

export default Imagetextgridtemplete
