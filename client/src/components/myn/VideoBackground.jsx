import React from 'react';
const VideoBackground = () => {
  return (
    // <div className="">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/vedio.mp4" type="video/mp4" />
        
      </video>
    // </div>
  );
};

export default VideoBackground;
