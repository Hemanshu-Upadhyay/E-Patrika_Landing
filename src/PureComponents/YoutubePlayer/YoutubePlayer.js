import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = () => {
  const opts = {
    height: "190",
    width: "340",
    playerVars: {
      autoplay: 2,
    },
  };
  return (
    <div className="hidden md:block space-y-6 md:py-0 py-4 md:pl-5 md:w-32% ">
      <YouTube videoId="s8HlPNha1M4" opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
