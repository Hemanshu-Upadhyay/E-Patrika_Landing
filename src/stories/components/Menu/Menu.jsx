import React from "react";
const Menu = ({ backgroundColor, text, textColor, Heading, story }) => {
  const bignews = [
    "JEE Main Result 2022: जेईई मेंस सेशन 1 के परिणाम घोषित, jeemain.nta.nic.in पर करें चेक",
    "Mumbai Rains: महाराष्ट्र के कई इलाकों में भारी बारिश, मुंबई और ठाणे के लिए IMD ने जारी किया रेड अलर्ट",
    "हिमाचल प्रदेश के मुख्यमंत्री जयराम ठाकुर से विशेष बातचीत, बोले- इस बार बदलेगा रिवाज, हिमाचल में फिर होगा आगाज",
    "Maharashtra Politics: शिंदे गुट के चीफ व्हीप ने उद्धव ठाकरे पर साधा निशाना, कांग्रेस-NCP के साथ गठबंधन पर कही ये बात",
  ];
  return (
    <div
      className={`order-2 md:order-1 mt-4 md:mt-0 md:pr-1 md:w-21% bg-white`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="flex relative items-center">
        <div className="border-b border-grey-500 absolute w-full h-px" />
        <p className="font-bold text-lg px-2 whitespace-nowrap bg-white ml-3.5 z-10">
          {Heading ? Heading : "बड़ी खबरें"}
        </p>
      </div>
      <div className="w-full divide-y md:block">
        {story.map((item2) => (
          <div className="w-full pb-3 pt-2.5">
            <div className="flex space-x-2 margin-5 undefined" />
            <a href="www.google.com">
              <p
                className="md:font-normal font-bold md:text-fifteen md:leading-5 text-sm line-clamp-3"
                style={{ color: textColor }}
              >
                {item2}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
