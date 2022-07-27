import "./Header.css";
const Header = ({
  backgroundColor,
  size,
  Header_items,
  height,
  textcolor,
  width,
}) => {
  return (
    <>
      <nav
        className={["navbar"].join(" ")}
        style={{ backgroundColor, size, height, width }}
      >
        <div className="hamburger">
          <img
            width={`20px`}
            src="https://new-img.patrika.com/static-assets/menu-hamburger.svg"
            alt="open-button"
          />
        </div>

        <div className="menu-items">
          {Header_items.map((item, index) => (
            <div key={index}>
              <a
                href="www.google.com"
                className="menu"
                style={{ color: textcolor, fontSize: size }}
              >
                {item}
              </a>
            </div>
          ))}
          <img
            className="search-icon"
            vspace={1}
            width={23}
            height={23}
            src="https://new-img.patrika.com/static-assets/menu-search.svg"
            alt="search-icon"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;
