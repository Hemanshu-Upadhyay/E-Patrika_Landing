import Menu from "./Menu";

const bignews = [
  "JEE Main Result 2022: जेईई मेंस सेशन 1 के परिणाम घोषित, jeemain.nta.nic.in पर करें चेक",
  "Mumbai Rains: महाराष्ट्र के कई इलाकों में भारी बारिश, मुंबई और ठाणे के लिए IMD ने जारी किया रेड अलर्ट",
  "हिमाचल प्रदेश के मुख्यमंत्री जयराम ठाकुर से विशेष बातचीत, बोले- इस बार बदलेगा रिवाज, हिमाचल में फिर होगा आगाज",
  "Maharashtra Politics: शिंदे गुट के चीफ व्हीप ने उद्धव ठाकरे पर साधा निशाना, कांग्रेस-NCP के साथ गठबंधन पर कही ये बात",
];

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    Heading: { control: "text" },
  },
};

const Template = (args) => <Menu story={bignews} {...args} />;

export const Menu_story = Template.bind({});
Menu_story.args = {
  backgroundColor: "color",
  story: bignews,
  Heading: "बड़ी खबरें",
};
