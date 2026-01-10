"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown, Heart } from "lucide-react";

// Mock Data - Reusing NFT items structure but different content if needed
const assetItems = [
  { id: 1, image: "/images/item/item-01.png", title: "3D Digital Artwork", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 2, image: "/images/item/item-02.png", title: "King Of Pirates", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 3, image: "/images/item/item-03.png", title: "Pomeranian Doge", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 4, image: "/images/item/item-04.png", title: "Nintendo Switch", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 5, image: "/images/item/item-05.png", title: "The Strange Art", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 6, image: "/images/item/item-06.png", title: "3D Digital Artwork", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 7, image: "/images/item/item-07.png", title: "Pixel Art Addicted", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
  { id: 8, image: "/images/item/item-08.png", title: "3D Digital Artwork", author: "Roger Herwitz", authorAvatar: "/images/layouts/avt-01.png", price: "0.45 ETH", likes: 3432 },
];

const PartiAssetGrid = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
                <input
                    type="text"
                    placeholder="Search item here..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-6 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors">
                    <Search size={20} />
                </button>
            </div>

            <div className="flex flex-wrap gap-4">
                {["All categories", "Buy now", "All item"].map((filter, index) => (
                    <div key={index} className="relative group">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <span>{filter}</span>
                            <ChevronDown size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {assetItems.map((item) => (
                <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                        <button className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 hover:bg-primary transition-colors">
                            <Heart size={14} className="text-white" />
                            <span className="text-xs font-bold">{item.likes}</span>
                        </button>
                    </div>

                    <div className="mb-4">
                        <Link href="#" className="text-xl font-heading font-bold hover:text-primary transition-colors block mb-2">{item.title}</Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/50">
                                <Image src={item.authorAvatar} alt={item.author} fill className="object-cover" />
                            </div>
                            <div className="text-sm">
                                <span className="text-gray-400 block text-xs">Owned by</span>
                                <span className="font-bold">{item.author}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                            <span className="text-gray-400 text-xs block mb-1">Current Bid</span>
                            <span className="text-primary font-bold">{item.price}</span>
                        </div>
                        <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all text-sm font-bold">
                            Place Bid
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Load More - Optional visual element */}
        <div className="flex justify-center mt-12">
             <button className="px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-bold hover:border-primary hover:bg-primary/10 transition-all">
                Load More
            </button>
        </div>

      </div>
    </section>
  );
};

export default PartiAssetGrid;
