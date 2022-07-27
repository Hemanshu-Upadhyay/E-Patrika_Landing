import { TaazaKhabre_data } from "../../Data/Taazakhabre_data";
import ReadMore from "../../PureComponents/Readmore/ReadMore";
import TimetextImage from "../../PureComponents/TimetextImage/TimeTextImage";


const Taazakhabre = () => {
  return (
    <div className="relative mt-6 ml-4 mr-4 mb-6">
      <ReadMore props={{Heading:"ताज़ा खबरें"}}/>
      <div className=" grid grid-flow-col grid-rows-3 gap-4 text-sm divide-y divide-border-grey-500 w-auto md:overflow-scroll overflow-y-auto mx-4 md:mx-0">
        {TaazaKhabre_data.map((data, index) => {
          return <TimetextImage props={data} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Taazakhabre;
