// import { FooterCatogoriesList } from "../../../../Data/FooterData/FooterCatogoryList";
import Footer_Catogory from "./Footer_Catogory";
const Footer_Data = [
  "बॉलीवुड",
  "बिजनेस",
  "फाइनेंस",
  "कार",
  "धर्म/ज्योतिष",
  "स्वास्थ्य",
  "राष्ट्रीय",
  "राजनीति",
  "घरेलू और प्राकृतिक उपचार",
  "उत्तर प्रदेश समाचार",
];

export default {
  title: "PureComponents/Footer Catogories",
  component: Footer_Catogory,
};

const Template = (args) => (
  <Footer_Catogory Footer_Data={Footer_Data} {...args} />
);
export const Footer_Cagories_story = Template.bind({});
Footer_Cagories_story.args = {
  Footer_Heading: "Top Categories",
  Footer_Data: Footer_Data,
};
