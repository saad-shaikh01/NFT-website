import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import PartiAssetGrid from "@/components/sections/parti-asset-grid";
import Footer from "@/components/sections/footer";

export default function PartiAssetPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Participants & Assets" breadcrumb={["Explore", "Participants & Assets"]} />
      <PartiAssetGrid />
      <Footer />
    </main>
  );
}
