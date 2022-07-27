import { Live_desk } from "../../../../Data/Livedesk";
import TempleteforTime from "./TemplateForTIme";

export default {
  title: "PureComponents/TextTime",
  component: TempleteforTime,
  argtypes: {
    Live_desk: { control: { disable: true } },
    Heading: { control: "text" },
  },
};

const Template = (args) => <TempleteforTime Live_desk={Live_desk} {...args} />;

export const TextTime_story = Template.bind({});
TextTime_story.args = {
  TimeColor: "Select The Color",
  color: "color",
  Heading: "बड़ी खबरें",
  Live_desk: Live_desk,
};
