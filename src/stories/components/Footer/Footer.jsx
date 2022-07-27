export default function Footer({
  Top_Catogories_Header,
  Top_Catogories,
  Trending_topics,
  Trending_topic_header,
  Trending_stories,
  Trending_stories_Header,
  Big_news_Header,
  Big_news,
}) {
  const GroupSites = ["Catch News", "Catch News Hindi", "Daily News 360"];

  const About = [
    "Privacy Policy",
    "Statutory provisions on reporting (sexual offenses)",
    "This website follows the DNPA’s code of conduct",
    "About Us",
    "Grievance Policy",
  ];

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
            <div className="flex m-b-26 flex-wrap mt-4">
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/FB-footer.svg`}
                  className="mr-4 mb-2"
                  alt="epatrika"
                />
              </a>
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/twitter-footer.svg`}
                  className="mr-4 mb-2"
                  alt="epatrika"
                />
              </a>
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/insta-footer.svg `}
                  className="mr-4 mb-2"
                  alt="epatrika"
                />
              </a>
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/youtube-footer.svg`}
                  className="mr-4 mb-2"
                  alt="epatrika"
                />
              </a>
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/telegram-footer.svg`}
                  className="mr-4 mb-2"
                  alt="epatrika"
                />
              </a>
            </div>
            <p className="text-xs text-[#b6cbe5] uppercase m-b-11 mt-4">
              Download Partika Apps
            </p>
            <div className="flex m-b-26 mt-4">
              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/apple-footer.svg`}
                  className="mr-4"
                  alt="applinks"
                />
              </a>

              <a href={"www.google.com"} target="_blank">
                <img
                  src={`https://new-img.patrika.com/static-assets/android-footer.svg`}
                  className="mr-4"
                  alt="applinks"
                />
              </a>
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
                <p className="text-s border-b relative ">
                  <span className="relative text-[#b6cbe5] uppercase">
                    {Top_Catogories_Header
                      ? Top_Catogories_Header
                      : "Top Categories"}
                  </span>
                </p>
              </div>
              <div className="my-4 md:mt-0 flex flex-wrap w-full">
                {Top_Catogories.map((catogories, i) => {
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
                    {Trending_topic_header
                      ? Trending_topic_header
                      : "Trending Catogories"}
                  </span>
                </p>
              </div>
              <div className="my-4">
                {Trending_topics.map((topic, i) => {
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
                <p className="text-s border-b relative ">
                  <span className="relative text-[#b6cbe5] uppercase">
                    {Trending_stories_Header
                      ? Trending_stories_Header
                      : "Trending Stories"}
                  </span>
                </p>
              </div>
              <div className="md:mt-4 mt-6 flex flex-wrap justify-between">
                {Trending_stories.map((trending, i) => {
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
                    {Big_news_Header ? Big_news_Header : "बड़ी खबरें"}
                  </span>
                </p>
              </div>
              <div className="md:mt-4 mt-6 flex flex-wrap justify-between">
                {Big_news.map((news, i) => {
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
}
