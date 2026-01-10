"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = ["Cryptocurrency", "NFT Token", "Collection", "Crypto Trading"];

const faqs = [
  {
    question: "When the musics over turn off the light?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis."
  },
  {
    question: "What is the best way to collect NFT?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis."
  },
  {
    question: "What is the best way to collect NFT?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis."
  },
  {
    question: "What is the best way to collect NFT?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis."
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("NFT Token");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Shape */}
       <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    FAQs
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Frequently <br /> Aksed Questions
            </h3>
            <p className="text-gray-300 text-lg mb-4">
                Below is a list of frequently asked questions and answers from partners and 3D artist
            </p>
            <p className="text-gray-400 text-sm">
                Please check this FAQ first before contacting us.
            </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-white/10 pb-8">
            {faqCategories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-lg text-sm font-bold font-heading transition-all duration-300 ${
                        activeCategory === cat
                        ? "bg-white/10 text-white shadow-[0_0_20px_rgba(92,39,254,0.3)]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-gradient-to-r from-[rgba(222,199,255,0.1)] to-[rgba(92,39,254,0.1)]" : ""}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                        >
                            <span className="text-white font-heading font-bold text-sm md:text-base pr-8">
                                <span className="text-primary mr-2">0{index + 1}.</span> {faq.question}
                            </span>
                            <div className="flex-shrink-0 text-white">
                                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                        </button>
                        <div
                            className={`px-6 transition-all duration-300 ease-in-out ${
                                openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Column (Duplicate for demo layout) */}
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const realIndex = index + 4;
                    return (
                        <div
                            key={realIndex}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === realIndex ? "bg-gradient-to-r from-[rgba(222,199,255,0.1)] to-[rgba(92,39,254,0.1)]" : ""}`}
                        >
                            <button
                                onClick={() => toggleAccordion(realIndex)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-white font-heading font-bold text-sm md:text-base pr-8">
                                    <span className="text-primary mr-2">0{realIndex + 1}.</span> {faq.question}
                                </span>
                                <div className="flex-shrink-0 text-white">
                                    {openIndex === realIndex ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <div
                                className={`px-6 transition-all duration-300 ease-in-out ${
                                    openIndex === realIndex ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
