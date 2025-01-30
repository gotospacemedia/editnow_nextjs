import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Drive from "@/assets/icons/drive.webp";
import Sheets from "@/assets/icons/sheets.webp";
import Whatsapp from "@/assets/icons/whatsapp.webp";
import Image from "next/image";
import { MotionSection } from "@/framer-motion/elements";
import { bottomSideVariants } from "@/framer-motion/variants";

const cardsData = [
  {
    id: 1,
    title: "Raw footage",
    description:
      "Share your pre-recorded or raw videos in your own unlimited storage Google drive folder.",
    icon: Drive,
  },
  {
    id: 2,
    title: "Available 24/7",
    description: "Contact us regarding anything on WhatsApp whenever you want.",
    icon: Whatsapp,
    link: "https://wa.me/8801840100578?text=Hello,",
  },
  {
    id: 3,
    title: "Real-time Updates",
    description:
      "Check out our personalized CRM system anytime you wanna know about the process.",
    icon: Sheets,
  },
];

export default function FeatureCards() {
  return (
    <MotionSection
      variants={bottomSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="section_wrapper"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-5 md:grid-cols-3">
          {cardsData.map((card) => {
            const link = card.link || null;

            return (
              <div key={card.id}>
                {link ? (
                  <Link href={link}>
                    <Card className="border border-brand_primary/70 hover:border-brand_primary/95 transition-all group">
                      <CardContent className="pt-6 text-center space-y-4">
                        <div className="rounded-full bg-white w-16 h-16 mx-auto flex items-center justify-center transition-all duration-300 group-hover:animate-pulse-scale">
                          <Image
                            src={card.icon || "/placeholder.svg"}
                            alt={card.title}
                            width={36}
                            height={36}
                            className="w-9 h-9"
                          />
                        </div>
                        <h2 className="text-2xl font-semibold text-white">
                          {card.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                          {card.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="border border-brand_primary/70 hover:border-brand_primary/95 transition-all group">
                    <CardContent className="pt-6 text-center space-y-4">
                      <div className="rounded-full bg-white w-16 h-16 mx-auto flex items-center justify-center transition-all duration-300 group-hover:animate-pulse-scale">
                        <Image
                          src={card.icon || "/placeholder.svg"}
                          alt={card.title}
                          width={36}
                          height={36}
                          className="w-9 h-9"
                        />
                      </div>
                      <h2 className="text-2xl font-semibold text-white">
                        {card.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
