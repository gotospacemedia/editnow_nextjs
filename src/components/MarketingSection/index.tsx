import { Button } from "@/components/ui/button";
import { MotionSection } from "@/framer-motion/elements";
import { leftSideVariants } from "@/framer-motion/variants";
import Link from "next/link";

export default function MarketingSection() {
  return (
    <MotionSection
      variants={leftSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper !py-16"
    >
      <div className="max-w-7xl mx-auto rounded-3xl border border-gray-800 p-8 md:p-12">
        <div className="flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Instead of reading through the details you can also join our demo
            call to be familiarise with our process
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
            In a short 30-minute demo call, we&apos;d love to explain more about
            EditNow and the options we can offer your brand.
          </p>
          <Link href={"/call"}>
            <Button className="btn_primary">Demo call</Button>
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
