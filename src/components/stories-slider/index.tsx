"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Story } from "@/lib/vimeo";
import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import { Dialog, DialogContent } from "../ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function StoriesSlider({ stories }: { stories: Story[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const filterStoriesData = stories?.map((short) => {
    const videoData = short?.video?.link.split("/");
    const videoid = videoData[videoData.length - 1];

    return {
      id: short?.video?.pictures?.base_link,
      name: short?.video?.name,
      thumbnail: short?.video?.pictures?.base_link,
      video: videoid,
    };
  });

  // console.log(filterStoriesData);

  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-[#060606] py-8 overflow-hidden"
    >
      <>
        <Marquee
          gradient
          gradientColor="#131212"
          gradientWidth={60}
          autoFill
          speed={100}
        >
          {filterStoriesData?.map((story) => (
            <div key={story?.id} className="px-2">
              <button
                className={`!w-[280px] relative overflow-hidden rounded-2xl border-0`}
                onClick={() => {
                  setCurrentVideo(story.video);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={story?.thumbnail}
                  alt={story?.name}
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
            </div>
          ))}
        </Marquee>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="p-0 bg-black border-0">
            <DialogTitle className="hidden">Currrent Video</DialogTitle>
            <div className="relative bg-black">
              {/* Video container */}
              <div className="relative aspect-[9/12] md:aspect-[9/14] w-full bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${currentVideo}`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    </MotionSection>
  );
}
