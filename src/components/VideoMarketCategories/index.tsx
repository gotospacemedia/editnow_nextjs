import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv, MotionSection } from "@/framer-motion/elements";
import {
  bottomSideVariants,
  containerVariants,
  fadeInVariants,
} from "@/framer-motion/variants";
import {
  Dumbbell,
  Palmtree,
  Gamepad2,
  Shirt,
  Video,
  Apple,
  Briefcase,
  Film,
} from "lucide-react";

const categories = [
  {
    title: "Short Format Videos",
    items: [
      { name: "Fitness", icon: Dumbbell },
      { name: "Lifestyle", icon: Palmtree },
      { name: "Gaming", icon: Gamepad2 },
      { name: "Fashion", icon: Shirt },
    ],
  },
  {
    title: "Long Format Videos",
    items: [
      { name: "Vlogs", icon: Video },
      { name: "Nutrition", icon: Apple },
      { name: "Entrepreneurship", icon: Briefcase },
      { name: "Documentaries", icon: Film },
    ],
  },
];

export default function VideoMarketCategories() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="heading_1">Perfect Market for Video Content</h2>
        </div>
        <MotionDiv
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2"
        >
          {categories.map((category) => (
            <MotionDiv variants={fadeInVariants} key={category.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center p-4 bg-secondary rounded-lg"
                      >
                        <item.icon className="w-6 h-6 mr-2 text-primary" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
