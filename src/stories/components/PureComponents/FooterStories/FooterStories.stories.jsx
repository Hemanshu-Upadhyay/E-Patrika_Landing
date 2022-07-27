import FooterStories from "./FooterStories";
const Footer_Topics = [
  "राजस्थान में आज 18 जिलों में होगी बरसात, येलो अलर्ट जारी",
  "संस्कारी बहू साबित होती हैं इन राशियों की लड़कियां ससुराल वालों का तुरंत जीत लेती हैं दिल",
  "शुक्र ग्रह जल्द मिथुन राशि में करेगा प्रवेश, इन राशि वालों का चमकेगा करियर",
  "उदयपुर से निकले कन्हैया के हत्या आरोपी तो प्रशासन ने शहर को दी ये खुश खबरी... झूम उठी झीलों की नगरी",
  "जयपुर संभाग के तीन जिलों मे बंद रहेगा इंटरनेट",
  "यहां हुआ शुरू ज्योतिष धन और करियर की हर समस्या को दूर कर सकते हैं रोटी के ये 4 आसान उपाय",
  "छात्र बनकर कक्षा में बैठ गए कलक्टर, शिक्षक से कहा- अब आप मुझे कोई भी एक विषय पढ़ाइए",
  "Udaipur Murder: जयपुर में एक लाख से ज्यादा हिन्दू करेंगे प्रदर्शन, यह रहेगा जुलूस का रूट",
];
export default {
  title: "PureComponents/FooterTopics",
  component: FooterStories,
};
const Template = (args) => (
  <FooterStories Footer_Topics={Footer_Topics} {...args} />
);
export const Footer_topics_story = Template.bind({});
Footer_topics_story.args = {
  Footer_Stories_Heading: "Top Categories",
  Footer_Topics: Footer_Topics,
};
