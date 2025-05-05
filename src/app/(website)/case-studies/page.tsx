import Fancybox from "@/components/global/fancybox";
import { Play } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

import PotImage from "@/assets/extra/pot.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CaseStudies() {
  const videoList = [
    {
      link: "https://www.youtube.com/watch?v=NyHyoT4QGDg",
    },
    {
      link: "https://www.youtube.com/watch?v=eBySyU43ZbI",
    },
    {
      link: "https://www.youtube.com/watch?v=PXZzsTj97GM",
    },
    {
      link: "https://www.youtube.com/watch?v=9YEbzElZ0dg",
    },
    {
      link: "https://www.youtube.com/watch?v=TvD-QpQvXsQ",
    },
    {
      link: "https://www.youtube.com/watch?v=trbfxFH4e1Y",
    },
    {
      link: "https://www.youtube.com/watch?v=7zrAeY_lr3k",
    },
    {
      link: "https://www.youtube.com/watch?v=GS01vqvbV34",
    },
    {
      link: "https://www.youtube.com/watch?v=vrCHWBPvWzM",
    },
    {
      link: "https://www.youtube.com/watch?v=aXCWKXTsOnk",
    },
    {
      link: "https://www.youtube.com/watch?v=fFvApO3mxlk",
    },
    {
      link: "https://www.youtube.com/watch?v=wg2ip6i3yzs",
    },
    {
      link: "https://www.youtube.com/watch?v=NXaoZqffhYM",
    },
    {
      link: "https://www.youtube.com/watch?v=-BqHaxenwJc",
    },
    {
      link: "https://www.youtube.com/watch?v=Nf-QiLwiaSc",
    },
    {
      link: "https://www.youtube.com/watch?v=fFihSYJckcY",
    },
    {
      link: "https://www.youtube.com/watch?v=nP3HiAa5a3k",
    },
    {
      link: "https://www.youtube.com/watch?v=dg6yOM7GPko",
    },
    {
      link: "https://www.youtube.com/watch?v=5GTE2pc55rY",
    },
  ];

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <section className="section_wrapper">
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 text-white">
          <div>
            <MotionDiv variants={fadeInVariants}>
              <h2 className="text-2xl md:text-3xl text-center mb-5 capitalize">
                How we work as a growth partner
              </h2>
            </MotionDiv>
            <MotionDiv
              variants={fadeInVariants}
              className="max-w-3xl mx-auto text-center mb-10"
            >
              <p className="mb-4 text-gray-400">
                Prince of Travel is a website dedicated to educating, informing,
                and inspiring its readers on all matters related to using
                frequent flyer miles, credit card points, and loyalty programs
                to travel the world at a fraction of the price.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={fadeInVariants}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="mb-4 text-gray-400">
                EditNow helped Prince of Travel double their YouTube subscribers
                from 42k to 109k with in 6 month. Our expert editing, engaging
                visuals, and optimized content delivery drove this impressive
                growth. We provided seamless transitions, dynamic graphics, and
                compelling thumbnails, maximizing viewer retention. This
                partnership solidified Prince of Travel&apos;s brand presence
                and freed their team to focus on content creation.
              </p>
            </MotionDiv>
          </div>
          <MotionDiv
            variants={fadeInVariants}
            className="flex flex-col justify-center items-center "
          >
            <Link
              href={"https://www.youtube.com/@PrinceofTravel"}
              target="_blank"
            >
              <Image src={PotImage} alt="Pot" />
            </Link>

            <br />
            <Link
              href={"https://www.youtube.com/@PrinceofTravel"}
              target="_blank"
            >
              <Button>Visit Channel</Button>
            </Link>
          </MotionDiv>
        </div>
      </section>
      <section className="section_wrapper text-white">
        <MotionDiv variants={bottomSideVariants}>
          {/* Portfolio */}
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Some High Retaintaion Content
          </h3>

          <div className="container mx-auto">
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                  Thumbs: false,
                },
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {videoList?.map((video) => {
                  const videoId = video?.link.split("=")[1];
                  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
                  //   console.log({ videoId, thumbnailUrl });

                  return (
                    <div key={video?.link} className="w-full h-full">
                      <a
                        href={video?.link}
                        data-fancybox="case-studies"
                        className="w-full h-full"
                      >
                        <button
                          className={`w-full h-full relative overflow-hidden rounded-2xl  border-0`}
                        >
                          <Image
                            src={thumbnailUrl}
                            alt={"video"}
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
                  );
                })}
              </div>
            </Fancybox>
          </div>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}
