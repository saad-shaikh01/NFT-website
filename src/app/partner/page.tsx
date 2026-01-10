import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import PartnerGrid from "@/components/sections/partner-grid";
import Footer from "@/components/sections/footer";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Partners & Investors" breadcrumb={["Explore", "Partners & Investors"]} />
      <PartnerGrid />
      <Footer />
    </main>
  );
}
