import Navbar from "@/components/sections/navbar";
import CarouselSection from "@/components/sections/carousel-section";
import AboutV2 from "@/components/sections/about-v2";
import Footer from "@/components/sections/footer";

export default function ZigZagCarouselPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <div className="pt-20">
        <CarouselSection
            title="ZigZag Carousel"
            subtitle="The largest and most unique digital marketplace of vintage for crypto-collectibles and non-fungible tokens (NFTs)"
        />
      </div>
      <AboutV2 />
      <Footer />
    </main>
  );
}
