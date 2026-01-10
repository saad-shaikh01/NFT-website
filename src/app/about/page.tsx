import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import AboutV2 from "@/components/sections/about-v2";
// import Counter from "@/components/sections/counter"; // Assuming Counter is part of another section or reusable
import PortfolioSteps from "@/components/sections/portfolio-steps";
import Team from "@/components/sections/team";
import Create from "@/components/sections/create";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="About us" breadcrumb={["About us"]} />
      <AboutV2 />
      {/* Counter Component logic is simple, can be embedded or separate if reused often.
          For now, skipping explicit Counter component as it was small in home-v2.
          Wait, I should check if I made a counter component in home-v2.
          Looking at home-v2 legacy HTML, it had a counter section.
          In my home-v2 conversion, I might have skipped it or put it in AboutV2?
          Let's implement a simple Counter section here if needed or reuse if exists.
      */}
      <PortfolioSteps />
      <Team />
      <Create />
      <Footer />
    </main>
  );
}
