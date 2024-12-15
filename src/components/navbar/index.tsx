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

const navMenu = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "Process",
    link: "#",
  },
  {
    label: "Reviews",
    link: "#",
  },
  {
    label: "FAQs",
    link: "#",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-l  from-[#081d1d] to-black">
        <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="mx-6 hidden flex-1 items-center justify-center lg:flex">
            <div className="rounded-full bg-zinc-800/70 border-2 border-zinc-800 px-4 py-2">
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
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button className="h-9 bg-[#7CFFD3] text-black hover:bg-[#63E6BA] lg:flex">
              Demo call
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
                    className="block rounded-lg px-4 py-2.5 text-center text-sm text-zinc-200 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 mx-auto">
                <Link
                  href="#contact"
                  className="rounded-lg bg-zinc-800 px-10 py-2.5 text-center text-sm text-white transition-colors hover:bg-zinc-700"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
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
