import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

const Navbar = () => {
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

          {/* Action Buttons */}
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
             {/* I will implement Mobile Menu later if needed or using a simple sheet */}
             <button className="text-white">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
