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
            <Link href="/call">
              <Button className="btn_primary">Book a demo call</Button>
            </Link>
            <Link href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
              <Button className="btn_secondary">Send Email Instead</Button>
            </Link>
          </MotionDiv>
        </div>

        {/* Bottom section with links*/}
        <MotionDiv
          variants={fadeInVariants}
          className="flex flex-col items-center justify-center pt-6 border-t border-gray-800"
        >
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EditNow
            </p>
          </div>
        </MotionDiv>
      </MotionDiv>
    </footer>
  );
}
