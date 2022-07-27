import { NavItems } from "../../Data/Header";

const Header = () => {
  return (
    <>
      <nav className="bg-[#053065] hidden text-sm font-bold space-x-4 text-white md:overflow-x-auto justify-between items-center px-4 md:flex md:visible h-12 z-111">
        <div className="px-2">
          <button className=" relative top-[3px]">
            <img
              src="https://new-img.patrika.com/static-assets/menu-hamburger.svg"
              alt="open-button"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="flex justify-center space-x-4 md:pr-4 ">
          <a
            href="/"
            className="whitespace-nowrap cursor-pointer text-yellow-300"
          >
            {"होम"}
          </a>
          {NavItems.map((item, index) => (
            <div key={index}>
              <a
                href="/"
                className="whitespace-nowrap cursor-pointer py-0.5 text-white"
              >
                {item}
              </a>
            </div>
          ))}
        </div>
        <img
          className="w-6 h-6 cursor-pointer"
          vspace={8}
          width={23}
          height={23}
          src="https://new-img.patrika.com/static-assets/menu-search.svg"
          alt="search-logo"
        />
      </nav>
    </>
  );
};

export default Header;
