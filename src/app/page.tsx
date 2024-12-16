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

export default async function Home() {
  const response = (await getVimeoShortFormatVideo({})) as VimeoResponse;

  return (
    <div>
      <Hero />
      <StoriesSlider stories={response?.data} />
      <GrowingBrandsSlider />
      <Services />
      <TurnContentToBusiness />
      <ProcessSteps />
      <CreatorsWeWorkWith />
      <ComparisonSection />
      <Faq />
    </div>
  );
}
