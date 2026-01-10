"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const testimonials = [
  {
    image: "/images/layouts/avt-02.png",
    name: "Jacob Jones",
    position: "Chief Product Officer",
    text: "“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “"
  },
  {
    image: "/images/layouts/avt-03.png",
    name: "Jacob Jones",
    position: "Chief Product Officer",
    text: "“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “"
  },
  {
    image: "/images/layouts/avt-04.png",
    name: "Jacob Jones",
    position: "Chief Product Officer",
    text: "“ Curabitur eu est feugiat quam feugiat tristique non vel erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue, nunc nec suscipit fringilla, augue ligula eleifend velit. “"
  }
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 lg:p-20 text-center">

            <div className="mb-12">
                 <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                        Testimonials
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                    What People Say
                </h3>
            </div>

            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                            <div className="max-w-4xl mx-auto">
                                <div className="mb-8 flex justify-center">
                                    <Image src="/images/icon/quote.png" alt="Quote" width={48} height={48} />
                                </div>
                                <p className="text-xl md:text-2xl text-gray-300 font-light italic leading-relaxed mb-10">
                                    {item.text}
                                </p>
                                <div className="flex flex-col items-center">
                                    <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-white/10">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h5 className="text-xl font-heading font-bold mb-1">{item.name}</h5>
                                    <p className="text-sm text-gray-400">{item.position}</p>
                                </div>
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

export default Testimonials;
