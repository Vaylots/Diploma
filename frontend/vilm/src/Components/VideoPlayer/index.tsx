import React, { useState } from "react";
interface IVideoPlayerProps {
  filmid: string | undefined;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({ filmid }) => {
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState<number | null>(null);

  const handlePlay = () => {
    // const video = document.getElementById("video");
    // if (video) {
    //   video.setRequestHeader("Range", `bytes=${rangeStart}-${rangeEnd}`);
    // }
    const video = document.getElementById("video") as HTMLVideoElement | null;
    if (video) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", video.src);
      xhr.setRequestHeader("Range", `bytes=${rangeStart}-${rangeEnd}`);
    }
  };

  return (
    <div>
      <video
        className="aspect-video max-w-xs lg:max-w-sm"
        id="video"
        controls
        onPlay={handlePlay}
      >
        <source
          src={`${
            import.meta.env.VITE_BACKEND_API_URL
          }/getMovieTrailerById?id=${filmid}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
