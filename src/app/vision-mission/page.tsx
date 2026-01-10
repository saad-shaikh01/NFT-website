import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import VisionMission from "@/components/sections/vision-mission";
import Footer from "@/components/sections/footer";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Visions & Mission" breadcrumb={["Explore", "Visions & Mission"]} />
      <VisionMission />
      <Footer />
    </main>
  );
}
