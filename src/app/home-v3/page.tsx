import Navbar from "@/components/sections/navbar";
import HeroV3 from "@/components/sections/hero-v3";
import AboutV3 from "@/components/sections/about-v3";
import Token from "@/components/sections/token";
import Project from "@/components/sections/project";
import Roadmap from "@/components/sections/roadmap";
import Team from "@/components/sections/team";
import Speciality from "@/components/sections/speciality";
import Testimonials from "@/components/sections/testimonials";
import FAQV2 from "@/components/sections/faq-v2"; // Using FAQV2 as it supports tabs/categories
import Footer from "@/components/sections/footer";

export default function HomeV3() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <HeroV3 />
      <AboutV3 />
      <Token />
      <Project />
      <Roadmap />
      <Team />
      <Speciality />
      <Testimonials />
      <FAQV2 />
      <Footer />
    </main>
  );
}
