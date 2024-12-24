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
    brand_name: "Banshree",
    brand_logo: "/growing-brands/banshree.png",
  },

  {
    id: 3,
    brand_name: "Blucheez",
    brand_logo: "/growing-brands/blucheez.png",
  },

  {
    id: 4,
    brand_name: "Broski-smash",
    brand_logo: "/growing-brands/broski-smash.png",
  },

  {
    id: 5,
    brand_name: "dressi-dale",
    brand_logo: "/growing-brands/dressi-dale.png",
  },
  {
    id: 6,
    brand_name: "fakir-apparels",
    brand_logo: "/growing-brands/fakir-apparels.png",
  },
  {
    id: 7,
    brand_name: "free-jeans",
    brand_logo: "/growing-brands/free-jeans.png",
  },
  {
    id: 8,
    brand_name: "greenview-golf",
    brand_logo: "/growing-brands/greenview-golf.png",
  },
  {
    id: 9,
    brand_name: "jumpfactor",
    brand_logo: "/growing-brands/jumpfactor.png",
  },
  {
    id: 10,
    brand_name: "luxury-watches",
    brand_logo: "/growing-brands/luxury-watches.png",
  },
  {
    id: 11,
    brand_name: "rahman",
    brand_logo: "/growing-brands/rahman.png",
  },
  {
    id: 12,
    brand_name: "sleek",
    brand_logo: "/growing-brands/sleek.png",
  },
  {
    id: 13,
    brand_name: "sprezzatura",
    brand_logo: "/growing-brands/sprezzatura.png",
  },
  {
    id: 14,
    brand_name: "studio-ombre",
    brand_logo: "/growing-brands/studio-ombre.png",
  },
  {
    id: 15,
    brand_name: "yoyoso",
    brand_logo: "/growing-brands/yoyoso.png",
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
        {[...brands].map((brand) => (
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
