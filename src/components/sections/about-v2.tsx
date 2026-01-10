import Image from "next/image";
import Link from "next/link";

const AboutV2 = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            About us
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-8">
            Hight Quality <br /> NFT Collections
          </h3>

            <div className="relative mb-8">
                <Image
                    src="/images/layouts/about-06.png"
                    alt="About"
                    width={800}
                    height={400}
                    className="mx-auto rounded-2xl"
                />
            </div>

            <p className="text-lg text-gray-300 mb-6">
                Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
            </p>
            <p className="text-gray-400 mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat
            </p>

            <Link
                href="/about"
                className="group relative inline-flex items-center px-8 py-3 rounded-full bg-transparent border border-primary/50 text-white font-heading font-bold overflow-hidden transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(92,39,254,0.4)]"
            >
                <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">More About Us</span>
            </Link>
        </div>

        <div className="border-t border-white/10 pt-16">
            <h6 className="text-center text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-10">
                We Are Partnered with Top Brands
            </h6>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                {/* Placeholder for brands - usually a slider but static for now or simple flex */}
                 {['01', '02', '03', '04', '05', '06'].map((num) => (
                    <div key={num} className="relative w-32 h-12 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src={`/images/logo/brand-${num}.png`}
                            alt={`Brand ${num}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutV2;
