"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo/logo.png"
                alt="Cyfonii"
                width={160}
                height={38}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    RoadMap
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white hover:text-primary font-heading font-bold text-base transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-white hover:text-primary transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <Link
              href="#"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 font-heading font-bold">
                Join Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-background border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  RoadMap
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-primary font-heading font-bold text-lg transition-colors border-b border-white/5 pb-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4 mt-6">
             <button className="flex items-center text-white hover:text-primary transition-colors">
              <Search className="w-5 h-5 mr-2" />
              <span className="font-heading font-bold">Search</span>
            </button>

            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative w-full text-center px-5 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 font-heading font-bold">
                Join Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
