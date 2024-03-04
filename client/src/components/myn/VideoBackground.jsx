import React from 'react';
const VideoBackground = () => {
  return (
    // <div className="">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="https://player.vimeo.com/external/541364406.sd.mp4?s=c98c7e643ad98c6920dd0b77e64b6778ee771987&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        
      </video>
    // </div>
  );
};

export default VideoBackground;
