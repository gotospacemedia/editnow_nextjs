import { MotionSection } from "@/framer-motion/elements";
import { rightSideVariants } from "@/framer-motion/variants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  {
    id: 1,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },

  {
    id: 2,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },

  {
    id: 3,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },

  {
    id: 4,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },

  {
    id: 5,
    brand_name: "Sinicare",
    brand_logo: "/growing-brands/sinicare.png",
  },
];

export default function GrowingBrandsSlider() {
  return (
    <MotionSection
      variants={rightSideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full flex flex-col md:flex-row gap-5 justify-center items-center bg-[#060606] py-10 overflow-hidden"
    >
      <div className="md:ml-10 lg:ml-40">
        <p className="text-gray-300 min-w-[200px]">
          Collaborated with the <br /> fastest-growing brands
        </p>
      </div>
      <Marquee
        gradient
        gradientColor="#131212"
        autoFill
        gradientWidth={20}
        speed={100}
      >
        {[...brands, ...brands].map((brand) => (
          <div
            key={String(Math.random() * brand.id + 2000)}
            className="px-5 md:px-8"
          >
            <Image
              src={brand.brand_logo}
              alt={"brand"}
              width={300}
              height={300}
              className="w-[120px] md:w-[150px] lg:w-[160px] object-cover"
            />
          </div>
        ))}
      </Marquee>
    </MotionSection>
  );
}
