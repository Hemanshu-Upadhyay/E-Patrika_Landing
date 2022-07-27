import "./Genre.css";

const Genre = ({ backgroundColor, textColor, Genre_content }) => {
  return (
    <>
      <div className="genre-container" style={{ backgroundColor }}>
        <div className="genre-content">
          <button className="genre-button" style={{ height: "25px" }}>
            <img
              src="https://new-img.patrika.com/static-assets/location.svg"
              width={25}
              height={25}
              alt="geo"
            />
            <span className="btn-text">अपना शहर चुने</span>
            <span style={{ "margin-left": "10px", "margin-top": "3.5px" }}>
              <img
                src="https://new-img.patrika.com/static-assets/load-more-icon.svg"
                alt="city dropdown"
                height={17}
                width={10}
              />
            </span>
          </button>
        </div>
        <div className="genre-contents">
          <div className="content">
            <div>
              {Genre_content.map((item) => (
                <a>
                  <span className="genre-items" style={{ color: textColor }}>
                    {item}
                  </span>
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
