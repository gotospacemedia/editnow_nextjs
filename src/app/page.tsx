import { getVimeoShortFormatVideo, VimeoResponse } from "@/lib/vimeo";

import Hero from "@/components/hero";
import StoriesSlider from "@/components/stories-slider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";
import Faq from "@/components/faq";
import ComparisonSection from "@/components/comparison-section";
import TurnContentToBusiness from "@/components/turn-content-to-business/indes";
import ProcessSteps from "@/components/process-steps";
import CreatorsWeWorkWith from "@/components/creators-we-work-with";
import MarketingSection from "@/components/MarketingSection";
import ServicesWeOffer from "@/components/ServicesWeOffer";
import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import FeatureCards from "@/components/feature-cards";
import ProcessToGetYouViral from "@/components/ProcessToGetYouViral";
import FactorsDriveGrowth from "@/components/FactorsDriveGrowth";

export default async function Home() {
  const response = (await getVimeoShortFormatVideo({})) as VimeoResponse;

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <Hero />
      <StoriesSlider stories={response?.data} />
      <GrowingBrandsSlider />
      <ServicesWeOffer />
      <ProcessToGetYouViral />
      <FactorsDriveGrowth />
      <ProcessSteps />
      <FeatureCards />
      <TurnContentToBusiness />
      <MarketingSection />
      <CreatorsWeWorkWith />
      <ComparisonSection />
      <Faq />
    </MotionDiv>
  );
}
