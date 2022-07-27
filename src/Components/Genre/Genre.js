import { Genre_Content } from "../../Data/Genre";

const Genre = () => {
  return (
    <>
      <div className="justify-center items-center flex">
        <div className="md:px-0 px-2 py-6 pt-16 md:pt-4 md:mr-5 ">
          <div className="flex px-4 md:px-0 items-center">
            <button
              className="flex border border-gray-350 rounded-2xl pr-2 items-center bg-white"
              style={{ height: "25px" }}
            >
              <img
                src="https://new-img.patrika.com/static-assets/location.svg"
                width={25}
                height={25}
                alt="geo"
              />
              <span className="text-thirteen font-bold ml-1.5 whitespace-nowrap">
                अपना शहर चुने
              </span>
              <span className="ml-5">
                <img
                  src="https://new-img.patrika.com/static-assets/load-more-icon.svg"
                  alt="Img"
                  height={17}
                  width={10}
                />
              </span>
            </button>
          </div>
        </div>
        <div className="md:overscroll-none overflow-x-hidden md:px-0 px-2 py-6 font-bold text-sm pt-16 md:pt-4 submenu-container">
          <div className="w-min mx-auto flex items-center space-x-4 pr-2 md:pr-0">
            <div>
              {Genre_Content.map((item, index) => (
                <a href="www.google.com">
                  <span className="whitespace-nowrap m-2 ">{item}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genre;
