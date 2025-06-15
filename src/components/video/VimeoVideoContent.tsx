import Fancybox from "../global/fancybox";
import VideoItem from "./VideoItem";
import { getVimeoVideo, VimeoResponse } from "@/lib/vimeo";


const VimeoVideoContent = async ({ path, dataFancyBox }: { path: string, dataFancyBox: string }) => {
  const vimeoResponse = (await getVimeoVideo({
    path: path,
    per_page: 100,
  })) as VimeoResponse;

  const filterVideoData =
    vimeoResponse.data?.map((long) => ({
      id: long?.video?.pictures?.base_link ?? "",
      name: long?.video?.name ?? "",
      thumbnail: long?.video?.pictures?.base_link ?? "",
      video: long?.video?.link ?? "",
    })) ?? [];

  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
          Thumbs: false,
        },
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filterVideoData?.map((story) => (
          <VideoItem key={story.id} story={story} dataFancyBox={dataFancyBox} />
        ))}
      </div>
    </Fancybox>
  );
};


export default VimeoVideoContent
