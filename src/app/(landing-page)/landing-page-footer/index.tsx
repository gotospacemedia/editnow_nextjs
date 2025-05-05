"use client";

import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants, rightSideVariants } from "@/framer-motion/variants";
import { Mail, Phone } from "lucide-react";

export default function LandingPageFooter() {
  return (
    <footer className="overflow-hidden bg-black">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20 mb-10"
      >
        {/* Top section with logo and buttons */}
        <div className="flex flex-col items-start justify-center gap-10">
          <MotionDiv
            variants={rightSideVariants}
            className="w-full bg-black flex items-center justify-center gap-4 z-30"
          >
            <div className="mb-4 sm:mb-0 space-y-5">
              <p className="border-b mb-5 pb-2 uppercase">Connect</p>
              <p className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a
                  href="mailto:jobyersiam@gmail.com"
                  className="hover:text-brand_primary transition-all"
                >
                  jobyersiam@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Phone size={16} />
                <a
                  href="https://wa.me/8801840100578?text=Hello"
                  className="hover:text-brand_primary transition-all"
                  target="_blank"
                >
                  +880 1840100578
                </a>
              </p>
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </footer>
  );
}
