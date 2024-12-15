import { getVimeoStories } from "@/lib/vimeo";

import Hero from "@/components/hero";
import StoriesSlider from "@/components/stories-slider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";
import Faq from "@/components/faq";
import ComparisonSection from "@/components/comparison-section";

export type Story = {
  video: {
    name: string;
    pictures: {
      base_link: string;
    };
    link: string;
  };
};

type VimeoResponse = {
  data: Story[];
};

export default async function Home() {
  const response = (await getVimeoStories()) as VimeoResponse;

  return (
    <div>
      <Hero />
      <StoriesSlider stories={response?.data} />
      <GrowingBrandsSlider />
      <ComparisonSection />
      <Faq />
    </div>
  );
}
