import { TaazaKhabre_data } from "../../../../Data/Taazakhabre_data";
import Imagetextgridtemplete from "./Imagetextgridtemplete";

export default {
  title: "PureComponents/ImageTextgrid",
  component: Imagetextgridtemplete,
  argtypes: {},
};

const Template = (args) => (
  <Imagetextgridtemplete TaazaKhabre_data={TaazaKhabre_data} {...args} />
);

export const ImageTextgrid_story = Template.bind({});
ImageTextgrid_story.args = {
  TaazaKhabre_data: TaazaKhabre_data,
  Heading: "ताज़ा खबरें",
};
