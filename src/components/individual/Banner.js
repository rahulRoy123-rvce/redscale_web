import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../../assets1/final_video_final.mp4"; // Replace "video.mp4" with the actual video file name
import YtVideo from "../shared/YtVideo";









const Banner = () => {







  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
    <div className="video-docker left-0 w-full h-full overflow-hidden">
      <video
        className="aspect-video w-full h-full bg-background-offset [&amp;[poster]]:w-full [&amp;[poster]]:bg-background [&amp;[poster]]:object-cover min-w-full min-h-full absolute object-cover"
        src={bgVideo}
        type="video/mp4"
        autoPlay
        muted
        loop
      ></video>
    </div>
    {/* <YtVideo/> */}
  </section>
  
  );
};

export default Banner;

