const TimetextImage = ({ props }) => {
  return (
    <div className="flex py-3 justify-between time-text-image-card-height">
      <div className="flex flex-col w-3/5 mr-2">
        <div className="flex space-x-2">
          <p className="text pb-1">{props.time}</p>
        </div>
        <a href="/">
          <div className="md:block hidden">
            <p className="font-normal text-fifteen line-clamp-3">
              {props.text}
            </p>
          </div>
        </a>
        <a href="/">
          <p className="font-bold text-sm block md:hidden line-clamp-3">
            {props.text}
          </p>
        </a>
      </div>
      <div className="hidden md:block">
        <a href="/">
              <img
              
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  width: "100px",
                  padding: 0,
                }}
                alt={"game"}
                src={props.image.url}
              />

        </a>
      </div>
    </div>
  );
};

export default TimetextImage;
