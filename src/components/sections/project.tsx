"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, image: "/images/layouts/project-01.png", title: "3D Digital Artwork" },
  { id: 2, image: "/images/layouts/project-02.png", title: "King Of Pirates" },
  { id: 3, image: "/images/layouts/project-03.png", title: "Pomeranian Doge" },
  { id: 4, image: "/images/layouts/project-04.png", title: "Nintendo Switch" },
  { id: 5, image: "/images/layouts/project-05.png", title: "The Strange Art" },
];

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
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

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
       {/* Background Shape */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    Our Collection
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                OUR COLLECTION
            </h3>
        </div>

        <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-4">
                    {projects.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 pl-4">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:transform hover:-translate-y-2 transition-all duration-300 group/card">
                                <div className="relative rounded-2xl overflow-hidden mb-5 h-[300px] w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                                    />
                                </div>
                                <div className="text-center">
                                    <Link href="#" className="text-xl font-heading font-bold hover:text-primary transition-colors">
                                        {item.title}
                                    </Link>
                                </div>
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

      </div>
    </section>
  );
};

export default Project;
