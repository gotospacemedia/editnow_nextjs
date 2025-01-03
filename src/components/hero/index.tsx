import Link from "next/link";
import { MotionDiv, MotionH1, MotionP } from "@/framer-motion/elements";
import { Button } from "../ui/button";
import {
  bottomSideVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";

export default function Hero() {
  return (
    <section className="section_wrapper relative min-h-[550px] overflow-hidden bg-gradient-to-br from-[#060606] via-brand_primary/15 to-[#060606] ">
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
            stroke="rgba(124, 255, 211, 0.1)"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        {/* Revenue badge */}
        <MotionDiv
          variants={fadeInVariants}
          className="mb-8 flex flex-col md:flex-row gap-1 items-center justify-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm max-w-max mx-auto"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="#fff"
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
          <span className="text-xs md:text-sm text-white">
            For brands or creators generating over €50k/month in revenue.
          </span>
        </MotionDiv>

        {/* Main heading */}
        <MotionH1
          variants={leftSideVariants}
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Contents That Drives Growth with{" "}
          <span className="text-brand_primary">EditNow</span>
        </MotionH1>

        {/* Subtitle */}
        <MotionP
          variants={rightSideVariants}
          className="mb-12 text-lg text-gray-300"
        >
          We are Edit Now, a video editing service provider dedicated to
          transforming your creative visions into stunning reality.
        </MotionP>

        {/* CTA buttons */}
        <MotionDiv
          variants={bottomSideVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/call">
            <Button className="btn_primary">Schedule a demo call</Button>
          </Link>
          <Link href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
            <Button className="btn_secondary">Send Email Instead</Button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
