import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Introduction",
    description:
      "We start with a conversation to get to know your business. What are your goals? What obstacles do you have to overcome? Together we determine if there is a good match.",
  },
  {
    number: 2,
    title: "Onboarding",
    description:
      "After agreement, you get a dedicated contact person who gets to know your brand inside out. Everything is arranged clearly and quickly, so we can get to work quickly.",
  },
  {
    number: 3,
    title: "Pre-production",
    description:
      "We plan shoots, develop scripts, and arrange the best creators and locations for your brand. Within a week, the foundation is in place for successful creatives.",
  },
  {
    number: 4,
    title: "Production",
    description:
      "We get to work and deliver creative assets that are ready for immediate use in your campaigns. Everything is tailored to enhance your brand.",
  },
  {
    number: 5,
    title: "Completion",
    description:
      "After delivery, you have space to provide feedback. We make sure everything is exactly in line with your vision and goals.",
  },
  {
    number: 6,
    title: "Testing and optimization",
    description:
      "Once creatives go live, we closely monitor performance. Based on the data, we make adjustments as needed, so you always stay on track for growth.",
  },
];

export default function ProcessSteps() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="Process"
    >
      <div className="max-w-7xl mx-auto">
        <div className="">
          <h2 className="heading_1">Our process</h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <MotionDiv variants={fadeInVariants} key={step.number}>
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                    <span className="text-brand_primary">{step.number}</span>
                  </div>
                  <CardTitle className="text-xl text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{step.description}</p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
