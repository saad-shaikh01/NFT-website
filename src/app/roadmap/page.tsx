import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import RoadmapVertical from "@/components/sections/roadmap-vertical";
import ProjectV2 from "@/components/sections/project-v2"; // Using Grid project
import FAQV2 from "@/components/sections/faq-v2";
import Footer from "@/components/sections/footer";

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="A big year on the horizon" breadcrumb={["Road Map"]} />
      <RoadmapVertical />
      <ProjectV2 />
      <FAQV2 />
      <Footer />
    </main>
  );
}
