import Heading_with_Readmore from "./Heading_with_Readmore";

export default {
  title: "PureComponents/Heading_with_Readmore",
  component: Heading_with_Readmore,
};

const Template = (args) => <Heading_with_Readmore {...args} />;
export const Heading_with_Readmore_Stories = Template.bind({});
Heading_with_Readmore_Stories.args = {
  Heading: "खबरें",
  Readmore: "और पढ़ें",
};
