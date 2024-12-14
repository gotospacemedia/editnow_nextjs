"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Marquee from "react-fast-marquee";

const Fancybox = dynamic(() => import("@/components/global/fancybox"), {
  ssr: false,
});

const stories = [
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
  {
    id: 1,
    thumbnail: "/stories-thumbnail/thumb1.png",
    video: "https://vimeo.com/931707031",
  },
];

export default function StoriesSlider() {
  return (
    <div className="w-full bg-black py-5 overflow-hidden">
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Marquee
          gradient
          gradientColor="#131212"
          gradientWidth={100}
          speed={100}
        >
          {stories.map((story, index) => (
            <div key={index} className="!w-[280px] px-2">
              <a
                href={story.video}
                data-fancybox="gallery"
                className="w-full h-full"
              >
                <button
                  className={`relative  overflow-hidden rounded-2xl w-full border-0 bg-red-300`}
                >
                  <Image
                    src={story.thumbnail}
                    alt={"thumb"}
                    width={280}
                    height={300}
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
          ))}
        </Marquee>
      </Fancybox>
    </div>
  );
}
