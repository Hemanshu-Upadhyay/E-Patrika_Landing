import Section from "./Section";
import dateString from "../../../utils/date";
import day_string from "../../../utils/day";

export default {
  title: "Components/Section",
  component: Section,
  argTypes: {
    backgroundColor: { control: "color" },
    height: { control: "number" },
    width: { control: "number" },
    color: { control: "color" },
    imagetop: { control: "number" },
    imageright: { control: "number" },
  },
};

const template = (args) => <Section {...args} />;

export const Section_Story = template.bind({});
Section_Story.args = {
  backgroundColor: "rgb(9 71 148)",
  height: "height",
  width: "width",
  color: "color",
  datetext: dateString,
  daytext: day_string,
  imagetop: "20",
};
