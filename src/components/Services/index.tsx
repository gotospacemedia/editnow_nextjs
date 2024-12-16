import React from "react";
import ServiceTab from "./ServiceTab";
import { MotionSection } from "@/framer-motion/elements";
import { sectionVariants } from "@/framer-motion/variants";

const Services = () => {
  return (
    <MotionSection
      variants={sectionVariants({ from: "bottom" })}
      initial="hidden"
      animate="visible"
      className="section_wrapper"
      id="Services"
    >
      <div className="rounded-xl space-y-5 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="heading_1">Our services includes</h2>
        </div>

        <div>
          <ServiceTab />
        </div>
      </div>
    </MotionSection>
  );
};

export default Services;
