"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqCategories = ["Cryptocurrency", "NFT Token", "Collection", "Crypto Trading"];

const faqs = [
  {
    category: "Cryptocurrency",
    items: [
      {
        question: "When the musics over turn off the light?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
       {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
       {
        question: "When the musics over turn off the light?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
       {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
    ]
  },
  {
      category: "NFT Token",
      items: [
           {
        question: "When the musics over turn off the light?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      {
        question: "What is the best way to collect NFT?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.",
      },
      ]
  }
];

const FAQV2 = () => {
  const [activeCategory, setActiveCategory] = useState("Cryptocurrency");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqs = faqs.find(c => c.category === activeCategory)?.items || faqs[0].items;

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            FAQs
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Frequently <br /> Aksed Questions
          </h3>
          <p className="text-gray-400">
            Below is a list of frequently asked questions and answers from partners and 3D artist.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {faqCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => { setActiveCategory(category); setOpenIndex(0); }}
                    className={`px-6 py-2 rounded-full font-bold transition-all ${
                        activeCategory === category
                        ? "bg-gradient-main text-white shadow-lg"
                        : "bg-transparent text-gray-400 hover:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {currentFaqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all ${openIndex === index ? 'bg-white/10' : ''}`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className="font-heading font-bold text-lg">
                                <span className="text-primary mr-2">{index + 1 < 10 ? `0${index + 1}` : index + 1}.</span> {faq.question}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-gradient-main' : 'bg-white/10'}`}>
                                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>
                        <div
                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            <p className="text-gray-400 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FAQV2;
