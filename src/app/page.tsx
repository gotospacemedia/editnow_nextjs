import { getVimeoShortFormatVideo, VimeoResponse } from "@/lib/vimeo";

import Hero from "@/components/hero";
import StoriesSlider from "@/components/stories-slider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";
import Faq from "@/components/faq";
import ComparisonSection from "@/components/comparison-section";
import Services from "@/components/Services";
import TurnContentToBusiness from "@/components/turn-content-to-business/indes";
import ProcessSteps from "@/components/process-steps";
import CreatorsWeWorkWith from "@/components/creators-we-work-with";
import MarketingSection from "@/components/MarketingSection";
import VideoMarketCategories from "@/components/VideoMarketCategories";
import TrackRecords from "@/components/TrackRecords";
import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";

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
      <Services />
      <TurnContentToBusiness />
      <VideoMarketCategories />
      <ProcessSteps />
      <MarketingSection />
      <TrackRecords />
      <CreatorsWeWorkWith />
      <ComparisonSection />
      <Faq />
    </MotionDiv>
  );
}
