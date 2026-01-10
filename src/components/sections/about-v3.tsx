import Image from "next/image";
import Link from "next/link";

const AboutV3 = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="order-2 lg:order-1">
                 <div className="relative">
                    {/* Card 1 */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-sm ml-auto mb-6 transform lg:translate-x-12">
                         <div className="flex justify-between items-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-main flex items-center justify-center">
                                <span className="font-bold text-xs">C</span>
                            </div>
                            <div className="text-right">
                                <h6 className="text-sm font-bold">3D Digital Artwork</h6>
                                <span className="text-primary text-sm font-bold">2.26 ETH</span>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                             <Image src="/images/layouts/banner-04.png" alt="NFT" fill className="object-cover" />
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary">
                                <Image src="/images/layouts/avt-07.png" alt="Author" fill className="object-cover" />
                            </div>
                            <div>
                                <h6 className="text-sm font-bold">Leslie Alexander</h6>
                                <p className="text-xs text-gray-400">@leslie754</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                     <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 max-w-xs transform -translate-y-12 lg:-translate-x-4">
                         <div className="flex justify-between items-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-main flex items-center justify-center">
                                <span className="font-bold text-xs">C</span>
                            </div>
                            <div className="text-right">
                                <h6 className="text-sm font-bold">3D Digital Artwork</h6>
                                <span className="text-primary text-sm font-bold">2.26 ETH</span>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                             <Image src="/images/layouts/banner-05.png" alt="NFT" fill className="object-cover" />
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary">
                                <Image src="/images/layouts/avt-07.png" alt="Author" fill className="object-cover" />
                            </div>
                            <div>
                                <h6 className="text-sm font-bold">Leslie Alexander</h6>
                                <p className="text-xs text-gray-400">@leslie754</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="order-1 lg:order-2">
                 <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
                    About us
                </h6>
                <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Hight Quality <br/> NFT Collections
                </h3>
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

        </div>
      </div>
    </section>
  );
};

export default AboutV3;
