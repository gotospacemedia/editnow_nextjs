import { Check, X } from "lucide-react";
import Logo from "../logo";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
} from "@/framer-motion/variants";

export default function ComparisonSectionExact() {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="heading_1">
            EditNow goes just that
            <br />
            one step further
          </h2>
        </div>

        <MotionDiv
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-6"
        >
          {/* Other Agencies Column */}
          <MotionDiv
            variants={fadeInVariants}
            className="flex-1 bg-[#1c1c1c] rounded-2xl p-6"
          >
            <h4 className="text-2xl text-white font-semibold mb-6">
              Other agencies
            </h4>
            <ul className="space-y-4">
              {[
                "Limited to design or copy only",
                "Extremely long delivery times",
                "Pathways take a long time, little flexibility",
                "General best practices, little customization",
                "Little transparency and communication",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-black/30 p-1 rounded-full">
                    <X className="h-5 w-5 text-white shrink-0" />
                  </div>
                  <span className="text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* EditFlow Column */}
          <MotionDiv
            variants={fadeInVariants}
            className="flex-1 bg-brand_primary text-black rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 text-2xl font-semibold mb-6">
              <Logo variant="dark" />
            </div>

            <ul className="space-y-4">
              {[
                "Creatives that enable performance and scale up",
                "Fast delivery and adjustment based on data",
                "In-house team with extensive experience within e-com",
                "Creatives made specifically for your brand and target audience",
                "Proactive communication and clear reporting",
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-[#119286] p-1 rounded-full">
                    <Check className="h-5 w-5 text-white shrink-0" />
                  </div>
                  <span className="">{text}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
