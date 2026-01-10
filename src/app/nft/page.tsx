import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import NFTGrid from "@/components/sections/nft-grid";
import Footer from "@/components/sections/footer";

export default function NFTPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="NFTs" breadcrumb={["Explore", "NFTs"]} />
      <NFTGrid />
      <Footer />
    </main>
  );
}
