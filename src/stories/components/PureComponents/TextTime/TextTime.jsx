const TextTime = ({ props, color, TimeColor }) => {
  return (
    <div className={`${props.className} h-max`}>
      <div className="flex flex-col  ">
        <div className="flex space-x-2 pb-2 ">
          <p
            className="divide-y text-xs text-black ml-3"
            style={{ color: TimeColor }}
          >
            {props.time}
          </p>
        </div>
        <p className={props.text_classname} style={{ color }}>
          {props.text}
        </p>
        <div className=" border-grey border-b-2"></div>
      </div>
    </div>
  );
};

export default TextTime;
