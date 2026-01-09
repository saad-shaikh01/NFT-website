import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-[-20%] w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center flex-col-reverse lg:flex-row">

          {/* Left Column: Images */}
          <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
             <div className="relative mx-auto max-w-[500px] lg:max-w-full">
                {/* Main Image */}
                <div className="relative z-10 rounded-[30px] overflow-hidden border border-white/10 transform rotate-[5deg] hover:rotate-0 transition-all duration-500">
                     <Image
                        src="/images/layouts/about-01.png"
                        alt="About Main"
                        width={420}
                        height={533}
                        className="w-full h-auto"
                    />
                </div>

                {/* Floating Images (Decorations) */}
                <div className="absolute top-1/2 -left-12 z-20 animate-move5">
                    <Image src="/images/layouts/about-02.png" alt="Decor 1" width={121} height={117} />
                </div>
                <div className="absolute -bottom-12 -left-8 z-20 animate-move5 duration-[4s]">
                    <Image src="/images/layouts/about-03.png" alt="Decor 2" width={222} height={222} />
                </div>
                 <div className="absolute -bottom-10 right-1/3 z-0 animate-move5 duration-[5s]">
                    <Image src="/images/layouts/about-04.png" alt="Decor 3" width={65} height={62} />
                </div>
                 <div className="absolute -bottom-20 -right-8 z-20 animate-move5 duration-[3s]">
                    <Image src="/images/layouts/about-05.png" alt="Decor 4" width={255} height={246} />
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 px-4">
             <div className="pl-0 lg:pl-12">
                <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                        About us
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                    High Quality <br /> NFT Collections
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
                </p>
                <p className="text-gray-400 text-base mb-10 leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat
                </p>

                <Link
                    href="#"
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                  <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 font-heading font-bold text-base">
                    More About Us
                  </span>
                </Link>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
