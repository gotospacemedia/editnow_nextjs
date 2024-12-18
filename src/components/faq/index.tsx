import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";

// FAQ data
const faqData = [
  {
    question: "What kind of videos do you edit?",
    answer:
      "We edit a wide range of videos, from short-form social media contents such as reels and short YouTube videos to long-form documentaries and corporate videos such as product demonstrations, interviews, and podcasts.",
  },
  {
    question: "How long does the editing process typically take?",
    answer:
      "The turnaround time depends on the length and complexity of the project. However, we strive to deliver high-quality results in a timely manner.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is tailored to the specific needs of each project. We offer flexible packages to accommodate different budgets.",
  },
  {
    question:
      "Do you offer any discounts for bulk orders or long-term projects?",
    answer: "Yes, we offer discounts for bulk orders and long-term projects.",
  },
  {
    question: "How do you communicate with clients?",
    answer:
      "We primarily communicate with clients via email and project management tools. We also offer video conferencing for more complex projects.",
  },
  {
    question: "How involved will I be in the editing process?",
    answer:
      "We encourage client involvement throughout the editing process. We'll provide regular updates and seek your feedback to ensure we meet your expectations.",
  },
  {
    question: "Can you add special effects or animations to my videos?",
    answer:
      "Yes, we can add various special effects and animations to your videos, depending on your specific requirements.",
  },
];

export default function FAQ() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
      id="FAQs"
    >
      <MotionDiv
        variants={containerVariants}
        className="max-w-3xl mx-auto text-white"
      >
        <div className="">
          <h2 className="heading_1">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <MotionDiv variants={fadeInVariants} key={`faq-${index}`}>
              <AccordionItem
                value={`item-${index + 1}`}
                className="border border-gray-800 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-medium py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </MotionDiv>
          ))}
        </Accordion>
      </MotionDiv>
    </MotionSection>
  );
}
