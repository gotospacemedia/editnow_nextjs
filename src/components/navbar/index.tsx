"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Logo from "../logo";
import { MotionDiv } from "@/framer-motion/elements";
import {
  containerVariants,
  fadeInVariants,
  leftSideVariants,
  rightSideVariants,
} from "@/framer-motion/variants";

const navMenu = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Services",
    link: "/#Services",
  },
  {
    label: "Process",
    link: "/#Process",
  },
  {
    label: "Portfolio",
    link: "/portfolio",
  },
  {
    label: "FAQs",
    link: "/#FAQs",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#060606] to-[#001a1a]">
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 sm:px-8 !overflow-hidden"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MotionDiv
              variants={leftSideVariants}
              className="flex items-center gap-2"
            >
              <Logo />
            </MotionDiv>
          </Link>

          {/* Desktop Navigation */}
          <nav className="mx-6 hidden flex-1 items-center justify-center lg:flex">
            <MotionDiv
              variants={fadeInVariants}
              className="rounded-full bg-zinc-800/70 border-2 border-zinc-800 px-4 py-2"
            >
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-6">
                  {navMenu.map((menu) => (
                    <NavigationMenuItem key={menu.label}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={menu.link}
                          className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
                        >
                          {menu.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </MotionDiv>
          </nav>

          {/* Right side buttons */}
          <MotionDiv
            variants={rightSideVariants}
            className="flex items-center gap-4"
          >
            <Link href="/call">
              <Button className="h-9 bg-brand_primary text-black hover:bg-brand_primary/80 lg:flex">
                Demo call
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </MotionDiv>
        </MotionDiv>

        {/* Mobile Navigation Overlay */}
        <div
          className={`absolute left-0 right-0 z-40 transform overflow-hidden bg-gradient-to-l  from-[#081d1d] to-black backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <ul className="flex flex-col space-y-1">
              {navMenu.map((menu) => (
                <li key={menu.label}>
                  <Link
                    href={menu.link}
                    className="block rounded-lg px-4 py-2.5 text-center text-sm text-zinc-200 transition-colors hover:text-[#7CFFD3]"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 mx-auto">
                <Link
                  href="mailto:hello@editnow.co?subject=Hello%20EditNow&body=I%20would%20like%20to%20inquire%20about%20your%20services."
                  className="rounded-lg bg-zinc-800 px-10 py-2.5 text-center text-sm text-white transition-colors hover:bg-zinc-700 hover:text-[#7CFFD3]"
                  onClick={() => setIsOpen(false)}
                >
                  Send Email
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay backdrop */}
      {isOpen && (
        <button
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          onKeyDown={(e) => e.key === "Enter" && setIsOpen(false)}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
