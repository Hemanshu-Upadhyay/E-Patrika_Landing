import dateString from "../../utils/date";
import dayString from "../../utils/day";

const Navbar = () => {
  return (
    <div className="flex bg-[#094794] h-[90px] justify-between fixed md:relative z-30 w-full text-white px-2 items-center md:px-10 lg:px-24 md:pt-12 overflow-hidden">
    <div className="p-2 md:hidden">
      <button className="focus:outline-none">
        <img
          src="https://new-img.patrika.com/static-assets/menu-hamburger.svg"
          alt="open-button"
          width={28}
          height={28}
        />
      </button>
    </div>
    <div className="hidden md:block text-thirteen flex-grow flex-basis-0 font-bold">
      <div className="relative bottom-5">
    {dayString}, {dateString}
        </div>
    </div>
    <div className="absolute top-[20px] left-[600px] md:block hidden">
      <a href="/">
        <img
          src="https://new-img.patrika.com/static-assets/patrika-logo.png"
          alt="patrika-logo-header"
          width={246}
          height={82}
        />
      </a>
    </div>
  </div>
  );
};

export default Navbar;
