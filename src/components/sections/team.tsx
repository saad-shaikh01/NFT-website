"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  { id: 1, image: "/images/layouts/team-01.png", name: "Jane Cooper", position: "Founder & CEO" },
  { id: 2, image: "/images/layouts/team-02.png", name: "Jenny Wilson", position: "Designer" },
  { id: 3, image: "/images/layouts/team-03.png", name: "Ralph Edwards", position: "Developer" },
  { id: 4, image: "/images/layouts/team-04.png", name: "Cody Fisher", position: "3D Artist" },
  { id: 5, image: "/images/layouts/team-01.png", name: "Jane Cooper", position: "Founder & CEO" },
];

const partners = [
    "/images/logo/brand-01.png",
    "/images/logo/brand-02.png",
    "/images/logo/brand-03.png",
    "/images/logo/brand-04.png",
    "/images/logo/brand-05.png",
    "/images/logo/brand-06.png",
];

const Team = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [emblaRefPartners, emblaApiPartners] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    Team Members
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Our Amazing Team <br /> Members
            </h3>
        </div>

        {/* Team Carousel */}
        <div className="relative group mb-32">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {teamMembers.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-4">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 text-center hover:transform hover:-translate-y-2 transition-all duration-300 group/card">
                                <div className="relative rounded-2xl overflow-hidden mb-5 h-[300px] w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                                    />
                                    {/* Social Icons Overlay */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary transition-colors text-black hover:text-white">
                                            <Facebook className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary transition-colors text-black hover:text-white">
                                            <Twitter className="w-4 h-4" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary transition-colors text-black hover:text-white">
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                                <h5 className="text-xl font-heading font-bold mb-1 hover:text-primary transition-colors cursor-pointer">
                                    {item.name}
                                </h5>
                                <p className="text-sm text-gray-400">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
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

        {/* Partners */}
        <div className="text-center">
             <h6 className="font-heading font-bold text-lg mb-8">We Are Partnered with Top Brands</h6>
             <div className="overflow-hidden" ref={emblaRefPartners}>
                <div className="flex -ml-8 items-center">
                    {partners.map((logo, index) => (
                        <div key={index} className="flex-[0_0_50%] md:flex-[0_0_33%] lg:flex-[0_0_16.66%] min-w-0 pl-8 flex justify-center">
                            <div className="relative w-[150px] h-[50px] opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                                <Image
                                    src={logo}
                                    alt="Partner"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
