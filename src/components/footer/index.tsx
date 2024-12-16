import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../logo";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-10">
        {/* Top section with logo and buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-10 mb-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
          </Link>

          {/* CTA buttons */}
          <div className="flex items-center justify-center gap-4 ">
            <Button className="btn_primary">Book a demo call</Button>
            <Button className="btn_secondary">Send Email Instead</Button>
          </div>
        </div>

        {/* Bottom section with links and language */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800">
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
        </div>
      </div>
    </footer>
  );
}
