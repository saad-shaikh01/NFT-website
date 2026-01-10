"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data
const carouselItems = [
  { id: 1, image: "/images/layouts/item-01.png", title: "3D Digital Artwork", price: "2.26 ETH", author: "Leslie Alexander", authorAvatar: "/images/layouts/avt-06.png" },
  { id: 2, image: "/images/layouts/item-02.png", title: "3D Digital Artwork", price: "2.26 ETH", author: "Leslie Alexander", authorAvatar: "/images/layouts/avt-07.png" },
  { id: 3, image: "/images/layouts/item-03.png", title: "3D Digital Artwork", price: "2.26 ETH", author: "Leslie Alexander", authorAvatar: "/images/layouts/avt-05.png" },
  { id: 4, image: "/images/layouts/item-04.png", title: "3D Digital Artwork", price: "2.26 ETH", author: "Leslie Alexander", authorAvatar: "/images/layouts/avt-06.png" },
  { id: 5, image: "/images/layouts/item-05.png", title: "3D Digital Artwork", price: "2.26 ETH", author: "Leslie Alexander", authorAvatar: "/images/layouts/avt-07.png" },
];

interface CarouselSectionProps {
    title: string;
    subtitle: string;
}

const CarouselSection = ({ title, subtitle }: CarouselSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {title}
          </h2>
          <p className="text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex -ml-6">
                    {carouselItems.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 min-w-0">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-2">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-2">
                                         <div className="w-8 h-8 rounded-full bg-gradient-main flex items-center justify-center">
                                            <span className="font-bold text-xs">C</span>
                                         </div>
                                    </div>
                                    <div className="text-right">
                                         <h6 className="text-sm font-bold text-white">{item.title}</h6>
                                         <span className="text-primary text-sm font-bold">{item.price}</span>
                                    </div>
                                </div>

                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                    <Image src={item.image} alt="NFT" fill className="object-cover" />
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                                        <Image src={item.authorAvatar} alt={item.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h6 className="text-sm font-bold text-white">{item.author}</h6>
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

export default CarouselSection;
