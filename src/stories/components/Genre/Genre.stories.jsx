import Genre from "./Genre";

const Genre_content = [
  "अग्निपथ स्कीम",
  "ओपिनियन",
  "शिक्षा",
  "जॉब्स",
  "ऑटोमोबाइल",
  "गैजेट",
  "हॉट ऑन वेब",
  "मप्र पंचायत निकाय चुनाव",
];

export default {
  title: "Components/Genre",
  component: Genre,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
};

const Template = (args) => <Genre Genre_content={Genre_content} {...args} />;

export const Genre_Story = Template.bind({});
Genre_Story.args = {
  backgroundColor: "white",
  textColor: "#000",
  Genre_content: Genre_content,
};
