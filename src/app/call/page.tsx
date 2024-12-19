import { getVimeoShortFormatVideo, VimeoResponse } from "@/lib/vimeo";

import StoriesSlider from "@/components/stories-slider";
import GrowingBrandsSlider from "@/components/growing-brands-slider";

import { MotionDiv } from "@/framer-motion/elements";
import { containerVariants } from "@/framer-motion/variants";
import MeetingSchedule from "@/components/MeetingSchedule";

export default async function DemoCall() {
  const response = (await getVimeoShortFormatVideo({})) as VimeoResponse;

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="!overflow-hidden"
    >
      <MeetingSchedule />
      <GrowingBrandsSlider />
      <StoriesSlider stories={response?.data} />
    </MotionDiv>
  );
}
