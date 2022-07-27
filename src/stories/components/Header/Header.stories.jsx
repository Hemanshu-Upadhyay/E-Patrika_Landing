import Header from "./Header";

const Header_items = [
  "होम",
  "इंडिया",
  "राज्य",
  "मनोरंजन",
  "खेल",
  "विश्व",
  "ऑटोमोबाइल",
  "गैजेट",
  "बिजनेस",
  "स्वास्थ्य",
  "धर्म/ज्योतिष",
  "वीडियो",
  "तस्वीरें",
  "EPAPER",
];

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    backgroundColor: { control: "color" },
    height: { control: "number" },
    width: { control: "number" },
  },
};

const Template = (args) => <Header Header_items={Header_items} {...args} />;
export const Header_Story = Template.bind({});

Header_Story.args = {
  height: "height",
  width: "width",
  textcolor: "color",
  Header_items: Header_items,
  size: "size",
};
