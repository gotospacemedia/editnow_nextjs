import { YoutubeVideo } from "@/constant";
import Fancybox from "../global/fancybox";
import VideoItem from "./VideoItem";

const YoutubeVideoContent = ({ videoList }: { videoList: YoutubeVideo[] }) => {
    return (
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
            Thumbs: false,
          },
        }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {videoList?.map((video) => {
            const videoId = video?.link.split("=")[1];
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  
            const story = {
              id: videoId,
              name: "Youtube Video",
              thumbnail: thumbnailUrl,
              video: video?.link,
            }
  
            return (
              <VideoItem key={story.id} story={story} />
            );
          })}
        </div>
      </Fancybox>
    );
  };


  export default YoutubeVideoContent