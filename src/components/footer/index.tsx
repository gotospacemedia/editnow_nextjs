import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../logo";
import { MotionDiv } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";

export default function Footer() {
  return (
    <footer className="bg-black text-white overflow-hidden">
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-10"
      >
        {/* Top section with logo and buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 mb-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MotionDiv
              variants={leftSideVariants}
              className="flex items-center gap-2"
            >
              <Logo />
            </MotionDiv>
          </Link>

          {/* CTA buttons */}
          <MotionDiv
            variants={rightSideVariants}
            className="flex items-center justify-center gap-4 "
          >
            <Button className="btn_primary">Book a demo call</Button>
            <Button className="btn_secondary">Send Email Instead</Button>
          </MotionDiv>
        </div>

        {/* Bottom section with links*/}
        <MotionDiv
          variants={fadeInVariants}
          className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800"
        >
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EditNow
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </MotionDiv>
      </MotionDiv>
    </footer>
  );
}
