import IconDisplay from "./IconDisplayTemplate";
import { SocialIconUrl } from "../../../../Data/FooterData/Footer";

export default {
  title: "PureComponents/IconDisplay",
  component: IconDisplay,
};

const Template = (args) => <IconDisplay Iconurl={SocialIconUrl} {...args} />;
export const IconDisplay_story = Template.bind({});

IconDisplay_story.args = {
  Iconurl: SocialIconUrl,
  Heading: "Follow Us",
};
