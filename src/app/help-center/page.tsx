import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import FAQV2 from "@/components/sections/faq-v2";
import Footer from "@/components/sections/footer";

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Help Center" breadcrumb={["Explore", "Help Center"]} />
      <FAQV2 />
      <Footer />
    </main>
  );
}
