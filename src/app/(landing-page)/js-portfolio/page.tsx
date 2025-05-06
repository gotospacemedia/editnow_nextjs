import { Metadata } from "next";
import Image from "next/image";
import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import { getVimeoVideo, type VimeoResponse } from "@/lib/vimeo";
import Fancybox from "@/components/global/fancybox";
import { useMemo, memo } from "react";
import { JsVimeoFolderKey, jsVimeoFolderPath } from "@/constant";
import JsImage from "@/assets/extra/jobyer-siam.jpg";

const folderKeys = Object.keys(jsVimeoFolderPath) as JsVimeoFolderKey[];

export const metadata: Metadata = {
  title: "Js Portfolio",
};

export default function Portfolio() {
  const memoizedFolderKeys = useMemo(() => folderKeys, []);

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper !pb-0 !pt-[2rem]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 text-white">
          <MotionDiv
            variants={fadeInVariants}
            className="w-full md:max-w-[300px] xl:max-w-[350px] flex flex-col justify-center items-center "
          >
            <Image
              src={JsImage}
              alt="Jobyer Siam"
              className="rounded-3xl w-full"
            />
          </MotionDiv>

          <div className="flex-1 flex flex-col justify-center">
            <MotionDiv variants={fadeInVariants}>
              <h2 className="text-3xl md:text-4xl mb-5 uppercase font-visby font-bold">
                Hello! <br /> I&apos;m{" "}
                <span className="bg-gradient-to-b from-[#eeb6d9] to-[#a11a6ed8] bg-clip-text text-transparent">
                  Jobyer Siam
                </span>
              </h2>
            </MotionDiv>
            <MotionDiv variants={fadeInVariants} className="max-w-3xl">
              <p className="text-gray-400">
                As a professional video editor, I bring stories to life through
                precise cuts, rhythm, and visual impact. My portfolio reflects a
                range of creative collaborations and high-quality edits.
              </p>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="section_wrapper mt-0 pt-0 text-white">
        <MotionDiv variants={bottomSideVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            My Portfolio
          </h3>

          <Tabs
            defaultValue={memoizedFolderKeys[0]}
            className="container mx-auto text-white"
          >
            <ScrollArea className="w-full max-w-max mx-auto">
              <TabsList className="inline-flex h-16 items-center justify-start bg-transparent p-0">
                {memoizedFolderKeys.map((folder) => (
                  <TabsTrigger
                    key={folder}
                    value={folder}
                    className="capitalize"
                  >
                    {folder.split("_").join(" ")}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {memoizedFolderKeys.map((folder) => (
              <TabsContentWrapper key={folder} folder={folder} />
            ))}
          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}

interface VideoItem {
  id: string;
  name: string;
  thumbnail: string;
  video: string;
}

const VideoItem = memo(({ story }: { story: VideoItem }) => (
  <div className="w-full h-full">
    <a href={story.video} data-fancybox="shortformat" className="w-full h-full">
      <button className="w-full h-full relative overflow-hidden rounded-2xl border-0">
        <Image
          src={story.thumbnail || "/placeholder.svg"}
          alt={story.name}
          width={500}
          height={700}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-transform hover:scale-110"
            aria-hidden="true"
          >
            <Play className="h-6 w-6" />
          </div>
        </div>
      </button>
    </a>
  </div>
));

VideoItem.displayName = "VideoItem";

const TabsContentWrapper = memo(({ folder }: { folder: JsVimeoFolderKey }) => {
  return (
    <TabsContent key={folder} value={folder}>
      <VideoContent folder={folder} />
    </TabsContent>
  );
});

TabsContentWrapper.displayName = "TabsContentWrapper";

const VideoContent = async ({ folder }: { folder: JsVimeoFolderKey }) => {
  const vimeoResponse = (await getVimeoVideo({
    path: jsVimeoFolderPath[folder],
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {filterVideoData.map((story) => (
          <VideoItem key={story.id} story={story} />
        ))}
      </div>
    </Fancybox>
  );
};
