"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroV3 = () => {
    // Basic countdown timer logic
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Target date: 2 days from now (mock)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D0F2C]">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/layouts/deco.png')] bg-no-repeat bg-right-top opacity-20 pointer-events-none mix-blend-screen"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                         <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                            Discover and <br/>
                            Collect Digital Art <br/>
                            and <span className="text-transparent bg-clip-text bg-gradient-main">NFTs</span>
                        </h2>
                         <p className="text-gray-400 text-lg mb-8">
                            Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
                        </p>
                        <div className="flex flex-wrap gap-4 mb-12">
                             <Link href="/contact" className="group relative px-8 py-3 rounded-full bg-gradient-main text-white font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(92,39,254,0.4)]">
                                <span className="relative z-10">Explore Now</span>
                            </Link>
                             <Link href="/contact" className="group relative px-8 py-3 rounded-full bg-transparent border border-white/20 text-white font-bold overflow-hidden transition-all hover:border-primary">
                                <span className="relative z-10">Create NFT's</span>
                            </Link>
                        </div>

                        <div className="flex justify-between max-w-sm">
                            <div>
                                <h4 className="text-2xl font-bold">52K<span className="text-primary">+</span></h4>
                                <p className="text-gray-400 text-sm">Artwork</p>
                            </div>
                             <div>
                                <h4 className="text-2xl font-bold">27K<span className="text-primary">+</span></h4>
                                <p className="text-gray-400 text-sm">Auction</p>
                            </div>
                             <div>
                                <h4 className="text-2xl font-bold">18K<span className="text-primary">+</span></h4>
                                <p className="text-gray-400 text-sm">Artist</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative">
                        <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 max-w-md mx-auto lg:mr-0 lg:ml-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-lg font-bold">Ninja 3D Digital Artwork</h4>
                                <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                                    <span className="text-primary">♥</span>
                                    <span className="text-sm font-bold">3432</span>
                                </div>
                            </div>

                            {/* Placeholder for Main Image inside card if needed, or just layout */}
                             <div className="bg-black/20 rounded-2xl p-6 mb-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Current Bid</p>
                                        <h4 className="text-2xl font-bold text-primary">2.26 ETH</h4>
                                        <p className="text-gray-400 text-sm">$8,154.36</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-sm mb-1">Remaining time</p>
                                        <div className="font-mono text-xl font-bold">
                                            {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                                        </div>
                                    </div>
                                </div>
                            </div>

                             <button className="w-full py-4 rounded-full bg-gradient-main font-bold hover:shadow-lg transition-all">
                                Place a Bid
                            </button>
                        </div>

                         {/* Decorative elements */}
                         <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-24 h-24 bg-primary rounded-full blur-[50px] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroV3;
