"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const HeroV2 = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            setPrevBtnEnabled(emblaApi.canScrollPrev());
            setNextBtnEnabled(emblaApi.canScrollNext());
        };
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi]);

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const slides = [
        { image: "/images/layouts/banner-01.png", avatar: "/images/layouts/avt-05.png" },
        { image: "/images/layouts/banner-02.png", avatar: "/images/layouts/avt-06.png" },
        { image: "/images/layouts/banner-03.png", avatar: "/images/layouts/avt-07.png" },
        { image: "/images/layouts/banner-01.png", avatar: "/images/layouts/avt-05.png" },
    ];

    return (
        <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
             {/* Background shapes would go here */}

            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-16">
                     <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-4">
                        We are Monteno NFT
                    </h6>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                        Most Popular <br/> Collections
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                        Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
                    </p>
                    <Link href="/contact" className="group relative inline-flex items-center px-8 py-4 rounded-full bg-transparent border border-white/20 overflow-hidden transition-all hover:border-primary">
                        <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="relative z-10 font-bold">Get Connected</span>
                    </Link>
                </div>

                <div className="relative group max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {slides.map((slide, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex items-center gap-2">
                                                 <div className="w-8 h-8 rounded-full bg-gradient-main flex items-center justify-center">
                                                    <span className="font-bold text-xs">C</span>
                                                 </div>
                                            </div>
                                            <div className="text-right">
                                                 <h6 className="text-sm font-bold">3D Digital Artwork</h6>
                                                 <span className="text-primary text-sm font-bold">2.26 ETH</span>
                                            </div>
                                        </div>

                                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                            <Image src={slide.image} alt="NFT" fill className="object-cover" />
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                                                <Image src={slide.avatar} alt="Author" fill className="object-cover" />
                                            </div>
                                            <div>
                                                <h6 className="text-sm font-bold">Leslie Alexander</h6>
                                                <p className="text-xs text-gray-400">@leslie754</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                     <button
                        className="absolute top-1/2 -left-4 lg:-left-12 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors z-10"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        className="absolute top-1/2 -right-4 lg:-right-12 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors z-10"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroV2;
