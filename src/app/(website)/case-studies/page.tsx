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
import { yt_videoList } from "@/constant";
import YoutubeVideoContent from "@/components/video/YoutubeVideoContent";



export default async function CaseStudies() {

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
          <YoutubeVideoContent videoList={yt_videoList} dataFancyBox="caseStudies" />
          </div>
        </MotionDiv>
      </section>
    </MotionDiv>
  );
}
