import Live_desk from "./Live_desk";

const text = [
  "Delhi News Live Updates: अभी जेल में ही रहेंगे दिल्ली के मंत्री सत्येंद्र जैन",

  "Mumbai News Live Updates: नागपुर का यह कारनामा एशिया बुक ऑफ रिकॉर्ड्स और इंडिया बुक ऑफ रिकॉर्ड्स में दर्ज",

  "Coronavirus News Live Updates in India : एक दिन में मिले कोरोना के 16,678 केस",
];

export default {
  title: "Components/Live_desk",
  component: Live_desk,
  argTypes: {
    backgroundColor: { control: "color" },
    text: { control: { type: "object" } },
    textColor: { control: "color" },
    Heading: { control: "text" },
    time: { control: "text" },
  },
};

const Template = (args) => <Live_desk text={text} {...args} />;

export const Desk = Template.bind({});
Desk.args = {
  backgroundColor: "color",
  text: text,
  Heading: "लाईव डेस्क",
  time: "50 Mins Ago",
};
