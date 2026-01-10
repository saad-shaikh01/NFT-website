import Navbar from "@/components/sections/navbar";
import HeroV2 from "@/components/sections/hero-v2";
import AboutV2 from "@/components/sections/about-v2";
import ProjectV2 from "@/components/sections/project-v2";
import Roadmap from "@/components/sections/roadmap";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import FAQV2 from "@/components/sections/faq-v2";
import Create from "@/components/sections/create";
import Footer from "@/components/sections/footer";

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <HeroV2 />
      <AboutV2 />
      {/* Counter Section could be reused or added here if needed */}
      <ProjectV2 />
      <Roadmap />
      <Team />
      <Testimonials />
      <FAQV2 />
      {/* Blog Section could be added here */}
      <Footer />
    </main>
  );
}
