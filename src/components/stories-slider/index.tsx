"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Marquee from "react-fast-marquee";
import { Story } from "@/app/page";

const Fancybox = dynamic(() => import("@/components/global/fancybox"), {
  ssr: false,
});

export default function StoriesSlider({ stories }: { stories: Story[] }) {
  const filterStoriesData = stories?.map((short) => {
    return {
      id: short?.video?.pictures?.base_link,
      name: short?.video?.name,
      thumbnail: short?.video?.pictures?.base_link,
      video: short?.video?.link,
    };
  });

  return (
    <div className="w-full bg-black py-8 overflow-hidden">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
            Thumbs: false,
          },
        }}
      >
        <Marquee
          gradient
          gradientColor="#131212"
          gradientWidth={60}
          speed={100}
          pauseOnHover
        >
          {filterStoriesData?.map((story) => (
            <div key={story?.id} className="px-2">
              <a
                href={story?.video}
                data-fancybox="shorts"
                className="w-full h-full"
              >
                <button
                  className={`relative overflow-hidden rounded-2xl w-full border-0 bg-red-300`}
                >
                  <Image
                    src={story?.thumbnail}
                    alt={story?.name}
                    width={280}
                    height={300}
                    className="h-full !w-[280px] object-cover"
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
          ))}
        </Marquee>
      </Fancybox>
    </div>
  );
}
