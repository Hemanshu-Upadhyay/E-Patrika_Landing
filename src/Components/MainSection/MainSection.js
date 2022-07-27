import React from "react";
import { Bignews } from "../../Data/Bignews";
import { Image_Header } from "../../Data/Image_Header";
import { Live_desk } from "../../Data/Livedesk";
import { SectionNews } from "../../Data/SectionNews";
import { TaazaKhabre_data } from "../../Data/Taazakhabre_data";
import HederImageDisplay from "../../PureComponents/HeaderDisplay/HeaderImageDisplay";
import ImageText from "../../PureComponents/ImageText/ImageText";
import Smallimage from "../../PureComponents/Smallimage/Smallimage";
import Timetext from "../../PureComponents/TimeText/Text";
// import YoutubePlayer from "../../PureComponents/YoutubePlayer/YoutubePlayer";

const MainSection = () => {
  return (
    <div className="flex md:divide-x my-8 md:flex-row flex-col md:space-x-5 w-full">
      <div className="order-2 md:order-1 mt-4 md:mt-0 ml-5 md:pr-1 md:w-26%">
        <div className="flex relative items-center">
          <div className="border-b border-gray-500 absolute w-full h-px" />
          <p className="font-bold text-lg px-2 whitespace-nowrap ml-3.5 bg-white z-10">
            बड़ी खबरें
          </p>
        </div>
        <div className="w-full divide-y hidden md:block">
          {Bignews.map((data, index) => {
            return <Timetext props={data} key={index} />;
          })}
        </div>
        <div className=" divide-y md:hidden block mx-4 md:mx-0">
          {TaazaKhabre_data.map((data, index) => {
            return <Smallimage props={data} key={index} />;
          })}
        </div>
      </div>
      <div className=" justify-start order-1 md:order-2 md:pl-5 md:w-[1100px]">
        <div className="hidden md:block">
          <HederImageDisplay props={Image_Header} />
        </div>
        <div className="md:hidden block h-52 w-full align-text-bottom ">
          <a href="/">
            <div
              className="bg-no-repeat bg-center bg-cover text-white font-bold text-lg h-52 "
              style={{
                backgroundImage:
                  "url(https://new-img.patrika.com/upload/2022/07/22/murmu_modi_pm_modi_greets_dropadi_murmu.jpg)",
              }}
            >
              <p className="pt-40 bg-gradient-to-t from-black pb-2 px-4">
                देश को मिला सबसे युवा राष्ट्रपति, पीएम मोदी से लेकर
                सोनिया-राहुल, शरद पवार और यशवंत सिन्हा ने यूं दी बधाई
              </p>
            </div>
          </a>
        </div>
        <div className="border-b md:border-grey-600 md:h-4 py-2 hidden md:block" />
        <div className="flex-wrap md:mt-0 mt-8 md:font-normal font-bold mx-4 md:mx-0 justify-between">
          <div className="w-full grid grid-cols-2 md:font-normal font-bold">
            {SectionNews.map((d, index) => {
              return (
                <div className="relative left-10 hidden md:block">
                  <div key={index} className="mt-6">
                    <ImageText props={d} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 order-3 md:py-0 py-4 md:pl-5 md:w-32% ">
        <div className="flex flex-col space-y-2 mr-6">
          {/* <YoutubePlayer/> */}
          <div className="flex">
            <div className="border-b w-3.5 h-4" />
            <p className="font-bold text-lg px-2 whitespace-nowrap">
              लाईव डेस्क
            </p>
            <div className="border-b border-grey-500 w-full h-4" />
          </div>
          {Live_desk.map((item, index) => {
            return <Timetext props={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
