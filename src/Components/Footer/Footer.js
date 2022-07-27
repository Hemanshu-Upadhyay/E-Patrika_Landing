import {
  FooterCatogoriesList,
  Topics,
  GroupSites,
  Bignews,
  About,
  Trending,
  SocialIconUrl,
  AppStoreIcon,
} from "../../Data/FooterData/Footer";
import IconDisplay from "../../PureComponents/IconDisplay/IconDisplay";

const Footer = () => {
  return (
    <>
      <div className="relative bg-[#053065] px-5 xl:p-percent ">
        <div className="flex  md:py-8  border-b flex-col-reverse	md:flex-row">
          <div className="border-t md:border-t-0 w-full md:w-1/4 pr-4 md:border-r">
            <img
              src={"https://i.ibb.co/wNccznk/logo.png"}
              className="hidden md:block pt-2 pr-8 mb-8"
              style={{ height: "42px", width: "145px" }}
              alt="epatrika"
            />

            <p className="m-1 md:pt-0 text-xs text-[#b6cbe5] uppercase m-b-11">
              Newsletters
            </p>

            <div className=" m-5 flex rounded-md border p-1 justify-center m-b-26 items-center w-221 md:w-auto">
              <img
                src={
                  "https://new-img.patrika.com/static-assets/bottomNav-newsletter.svg"
                }
                className=" text-black"
                alt="epatrika"
              />
              <span className="cursor-pointer text-[#b6cbe5] text-thirteen uppercase ml-2">
                Get the daily edition
              </span>
            </div>

            <p className="text-xs text-[#b6cbe5]  uppercase m-b-11">
              Follow Us
            </p>
            <div className="flex m-b-20 flex-wrap">
              {SocialIconUrl.map((url, i) => {
                return (
                  <a href={"www.google.com"} key={i}>
                    <IconDisplay url={url} />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-[#b6cbe5] uppercase m-b-11 mt-4">
              Download Partika Apps
            </p>
            <div className="flex m-b-26 ">
              {AppStoreIcon.map((url, i) => {
                return (
                  <a href={"www.google.com"} key={i}>
                    <IconDisplay url={url} />
                  </a>
                );
              })}
            </div>
            <div>
              <p className="text-xs text-[#b6cbe5] uppercase mt-6">
                Group Sites
              </p>
              <div className="flex flex-wrap md:block leading-3 m-2 mt-4">
                {GroupSites.map((group, i) => (
                  <p
                    className="text-sm w-1/2 md:w-auto text-white mb-4"
                    key={i}
                  >
                    <a href={"www.google.com"}>{group}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 md:pl-4 md:mt-0 mt-6">
            <div className="w-full">
              <div>
                <p className="text-s border-b relative">
                  <span className="relative text-[#b6cbe5] uppercase">
                    Top Categories
                  </span>
                </p>
              </div>
              <div className="my-4 md:mt-0 flex flex-wrap w-full">
                {FooterCatogoriesList.map((catogories, i) => {
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
            <div className="w-full pt-4 md:pt-0">
              <div>
                <p className="text-s border-b relative ">
                  <span className="relative text-[#b6cbe5] uppercase">
                    Trending Topics
                  </span>
                </p>
              </div>
              <div className="my-4">
                {Topics.map((topic, i) => {
                  return (
                    <span
                      key={i}
                      className="w-1/2 md:w-1/4 inline-block text-white text-sm leading-7 md:leading-8"
                    >
                      <a href={"www.google.com"}>{topic}</a>
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="w-full pt-4 md:pt-0">
              <div>
                <p className="text-s border-b relative">
                  <span className="relative text-[#b6cbe5] uppercase">
                    Trending Stories
                  </span>
                </p>
              </div>
              <div className="md:mt-4 mt-6 flex flex-wrap justify-between">
                {Trending.map((trending, i) => {
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

            <div className="w-full pt-4 md:pt-0">
              <div>
                <p className="text-s border-b relative ">
                  <span className="relative text-[#b6cbe5] uppercase">
                    बड़ी खबरें
                  </span>
                </p>
              </div>
              <div className="md:mt-4 mt-6 flex flex-wrap justify-between">
                {Bignews.map((news, i) => {
                  return (
                    <span
                      key={i}
                      className=" text-sm md:w-1/4 md:pr-2 mb-4 inline-block text-white text-thirteen lh-18 md:lh-22"
                    >
                      <a href={"www.google.com"}>{news}</a>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="w-full pt-4 md:pt-0">
              <div>
                <p className="text-xs border-b relative ">
                  <span className="relative top-2.5 pr-2 uppercase"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-4 flex flex-wrap w-full pb-20 mt-3 md:mt-0 ">
          {About.map((about, index) => {
            return (
              <div key={index}>
                <div className=" flex flex-wrap w-full md:inline text-[#b6cbe5] md:mr-5 text-xs md:text-thirteen">
                  <a href={"www.google.com"}>{about}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <span className="text-xs">
          Copyright &copy; 2021 Patrika Group. All Rights Reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
