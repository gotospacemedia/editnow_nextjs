import { useMemo } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import { JsVimeoFolderKey, jsVimeoFolderPath, yt_videoList } from "@/constant";
import VimeoVideoContent from "@/components/video/VimeoVideoContent";
import YoutubeVideoContent from "@/components/video/YoutubeVideoContent";

import JsImageMobile from "@/assets/extra/jobyer-siam-mobile.jpg";
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
              src={JsImageMobile}
              alt="Jobyer Siam"
              className="rounded-3xl w-full md:hidden"
            />
            <Image
              src={JsImage}
              alt="Jobyer Siam"
              className="rounded-3xl w-full hidden md:block"
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

      <section className="section_wrapper mt-0 !pt-[2rem] text-white">
        <MotionDiv variants={bottomSideVariants}>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 md:mb-8 text-white">
            My Portfolio
          </h3>

          <Tabs
            defaultValue={'long_videos'}
            className="container mx-auto text-white"
          >
            <ScrollArea className="w-full max-w-max mx-auto">
              <TabsList className="inline-flex h-16 items-center justify-start bg-transparent p-0">
                <TabsTrigger
                  key={"long_videos"}
                  value={"long_videos"}
                  className="capitalize"
                >
                  Long Videos
                </TabsTrigger>

                {memoizedFolderKeys?.map((folder) => (
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

            {/* Vimeo Video Content */}
            {memoizedFolderKeys?.map((folder) => (
              <TabsContent key={folder} value={folder}>
                <VimeoVideoContent path={jsVimeoFolderPath[folder]} dataFancyBox={folder} />
              </TabsContent>))}

            {/* Youtube Video Content */}
            <TabsContent
              key={"long_videos"}
              value={"long_videos"}>
              <YoutubeVideoContent videoList={yt_videoList} dataFancyBox="long_videos" />

            </TabsContent>


          </Tabs>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}




