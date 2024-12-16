"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

import Instagram from "@/assets/social/instagram.svg";
import Facebook from "@/assets/social/facebook.svg";
import Tiktok from "@/assets/social/tiktok.svg";

const creators = [
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
  {
    id: 1,
    name: "ALI ABDAAL",
    image:
      "https://cdn.prod.website-files.com/61a2a3183305d31a50898082/6456e6e89159470103d9d25d_3.%20ali-abdall-3-p-500.jpeg",
    followers: {
      facebook: "2M",
      instagram: "500K",
      tiktok: "1M",
    },
  },
];

export default function CreatorsWeWorkWith() {
  return (
    <section className="section_wrapper overflow-hidden">
      <div>
        <h2 className="heading_1">
          Brands Or Creators <br /> We Have Worked With
        </h2>
      </div>
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        loop={true}
        speed={2000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        className="!overflow-visible"
      >
        {[...creators, ...creators].map((creator, index) => (
          <SwiperSlide key={`${creator.id}-${index}`} className="!w-[280px]">
            <div
              className={`relative aspect-[9/16] overflow-hidden rounded-2xl w-full border-0`}
            >
              <Image
                src={creator.image}
                alt={creator.name}
                width={500}
                height={700}
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-5 w-full px-5 z-10">
                <div className="w-full flex flex-col justify-center items-center text-white">
                  <div>
                    <p className="">{creator.name}</p>
                  </div>

                  <div className="flex gap-5">
                    {creator.followers.facebook && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Facebook}
                          alt="Facebook"
                          width={100}
                          height={100}
                          className="h-6 w-6 object-cover"
                        />
                        <span>{creator.followers.facebook}</span>
                      </div>
                    )}
                    {creator.followers.instagram && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Instagram}
                          alt="Instagram"
                          width={100}
                          height={100}
                          className="h-6 w-6 object-cover"
                        />
                        <span>{creator.followers.instagram}</span>
                      </div>
                    )}
                    {creator.followers.tiktok && (
                      <div className="flex items-center gap-1">
                        <Image
                          src={Tiktok}
                          alt="Tiktok"
                          width={100}
                          height={100}
                          className="h-6 w-6 object-cover"
                        />
                        <span>{creator.followers.facebook}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Shadow overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
