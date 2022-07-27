import Opinion from "./Opinion";

const Textdata = [
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
    "Patrika Opinion: अंतरिक्ष की ओर दुनिया ने बढ़ाया बड़ा कदम",
];

export default {
  title: "Components/Opinion",
  component: Opinion,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    Heading: { control: "text" },
  },
};

const Template = (args) => <Opinion Textdata={Textdata} {...args} />;

export const Opinion_story = Template.bind({});
Opinion_story.args = {
  backgroundColor: "color",
  Textdata: Textdata,
  Heading: "ओपिनियन",
};
