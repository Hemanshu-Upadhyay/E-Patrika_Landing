import { SectionNews } from "../../../../Data/SectionNews";
import ImageTextTemplate from "./ImageTextTemplate";

export default {
  title: "PureComponents/ImageText",
  component: ImageTextTemplate,
  argtypes: {},
};

const Template = (args) => (
  <ImageTextTemplate SectionNews={SectionNews} {...args} />
);

export const ImageText_story = Template.bind({});
ImageText_story.args = {
  SectionNews: SectionNews,
  Texcolor: "Color",
};
