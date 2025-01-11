import { Check, X } from "lucide-react";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
} from "@/framer-motion/variants";
import Logo from "../logo";

export default function ComparisonSectionExact() {
  return (
    <MotionSection
      variants={leftSideVariants}
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
            <Card className="border-gray-700 hover:border-gray-60 hover:custom_shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Other agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "May be slow to adapt to new trends and technologies.",
                    "May focus on short–term projects and lack long-term client relationships.",
                    "May prioritize completing projects over achieving results.",
                    "May prioritize their own processes over the client’s needs.",
                    "May experience delays,budget overruns and communication breakdowns during project execution.",
                  ].map((text, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-400"
                    >
                      <div className="bg-gray-800 p-1 rounded-full">
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
            <Card className="bg-brand_primary/70 hover:bg-brand_primary/80 hover:custom_shadow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Logo variant="light" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Stays ahead of the curve by embracing new trends and technologies in the creative space.",
                    "Builds long-term partnerships with clients based on trust and mutual success.",
                    "Prioritizes results and demonstrates a clear return on investment.",
                    "Puts the client’s needs and goals first.",
                    "EditNow has a robust project management system to ensure projects are delivered on time and within budget,while maintaining high quality standards",
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-background p-1 rounded-full">
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
