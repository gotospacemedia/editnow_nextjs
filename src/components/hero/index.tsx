import Link from "next/link";
import { MotionDiv, MotionP } from "@/framer-motion/elements";
import { Button } from "../ui/button";
import {
  bottomSideVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import { cn } from "@/lib/utils";

import "./style.css";
import { Send } from "lucide-react";

// bg-gradient-to-br from-[#060606] via-brand_primary/15 to-[#060606]

export default function Hero() {
  return (
    <section
      className={cn("section_wrapper relative min-h-[550px] overflow-hidden")}
    >
      {/* Decorative background curve */}
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-200 600 Q 400 -100 1600 400"
            stroke="#4e1a3acb"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container relative mx-auto max-w-4xl text-center">
        {/* Revenue badge */}
        <MotionDiv
          variants={fadeInVariants}
          className="mb-8 flex flex-col md:flex-row gap-1 items-center justify-center rounded-full bg-zinc-700/70 text-gray-300 px-4 py-2 backdrop-blur-sm max-w-max mx-auto"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke=" #d1d5db"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="text-xs md:text-sm">
            For brands or creators generating over €50k/month in revenue.
          </span>
        </MotionDiv>

        {/* Main heading */}
        <MotionDiv variants={leftSideVariants} className="mb-6">
          <h1 className="text-[100px]  text-center font-bold text-white capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px] ">
            Grow superfast
          </h1>
          <div className="flex justify-center mt-2">
            <h1 className="text-[100px]  text-center font-bold text-white capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
              On
            </h1>
            <div className="h-[6rem] max-sm:h-[3rem] overflow-hidden words">
              <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
                youtube
              </p>
              <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
                instragram
              </p>
              <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
                tiktok
              </p>
              <p className="text-[100px] ml-8 max-sm:ml-2 text-left font-bold zip capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
                linkedin
              </p>
            </div>
          </div>

          <h1 className="text-[100px]  text-center font-bold text-white capitalize  leading-[100px] max-sm:leading-[50px] max-sm:text-[50px] max-md:text-[70px]">
            with <span className="text-brand_primary">EditNow</span>
          </h1>
        </MotionDiv>
        <br />
        {/* Subtitle */}
        <MotionP
          variants={rightSideVariants}
          className="mb-12 text-lg text-gray-400"
        >
          We are the wizards that transforms your creative vision into stunning
          reality in lightspeed. Our Expert team handles all for you to generate
          views and sales.
        </MotionP>

        {/* CTA buttons */}
        <MotionDiv
          variants={bottomSideVariants}
          className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/call">
            <Button className="btn_primary">Schedule a Discovery Call</Button>
          </Link>
          <Link href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
            <Button className="btn_secondary">
              <Send /> Send Email Instead
            </Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
