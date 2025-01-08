import { Check, X } from "lucide-react";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  containerVariants,
  fadeInVariants,
  rightSideVariants,
} from "@/framer-motion/variants";
import Logo from "../logo";

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
          className="flex flex-col md:flex-row gap-5"
        >
          {/* Other Agencies Column */}
          <MotionDiv variants={fadeInVariants} className="flex-1">
            <Card className="border-gray-700 hover:border-gray-60">
              <CardHeader>
                <CardTitle className="text-2xl">Other agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Limited to design or copy only",
                    "Extremely long delivery times",
                    "Pathways take a long time, little flexibility",
                    "General best practices, little customization",
                    "Little transparency and communication",
                  ].map((text, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="bg-background p-1 rounded-full">
                        <X className="h-5 w-5 shrink-0" />
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* EditFlow Column */}
          <MotionDiv variants={fadeInVariants} className="flex-1">
            <Card className="bg-brand_primary/70 hover:bg-brand_primary/80 ">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Logo variant="dark" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Creatives that enable performance and scale up",
                    "Fast delivery and adjustment based on data",
                    "In-house team with extensive experience within e-com",
                    "Creatives made specifically for your brand and target audience",
                    "Proactive communication and clear reporting",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-[#19796f] p-1 rounded-full">
                        <Check className="h-5 w-5 shrink-0" />
                      </div>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </MotionDiv>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
