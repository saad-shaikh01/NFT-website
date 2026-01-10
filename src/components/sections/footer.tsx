import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative pt-20 overflow-hidden">
        {/* Background Shape */}
      <div className="absolute top-0 left-[-20%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-16 text-center max-w-4xl mx-auto mb-16 relative overflow-hidden">
             {/* Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/layouts/pattern.png')] bg-cover opacity-10 pointer-events-none"></div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">Get Newsletter</h3>
                <p className="text-gray-400 mb-8">Get udpated with news, tips & tricks</p>

                <form className="max-w-md mx-auto relative">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full bg-white/10 border border-white/10 rounded-lg py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="hidden sm:block absolute top-1.5 right-1.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-heading font-bold py-2.5 px-6 rounded-md hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                         <button className="sm:hidden mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-heading font-bold py-3 rounded-md hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
                <Link href="/">
                    <Image
                        src="/images/logo/logo.png"
                        alt="Cyfonii"
                        width={140}
                        height={34}
                        className="h-auto w-auto"
                    />
                </Link>
            </div>

            {/* Links */}
            <div className="mb-6 md:mb-0">
                <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8">
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Explore</Link></li>
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Collections</Link></li>
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Team</Link></li>
                     <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
                 <p className="text-center text-xs text-gray-600 mt-4">Copyright © 2022, Cyfonii. Designed by Themesflat</p>
            </div>

            {/* Socials */}
            <div>
                 <ul className="flex space-x-4">
                    <li>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 group">
                            <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </li>
                    <li>
                         <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 group">
                            <Twitter className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </li>
                     <li>
                         <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 group">
                            <Linkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </li>
                     <li>
                         <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 transition-all duration-300 group">
                            <Youtube className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                        </Link>
                    </li>
                 </ul>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
