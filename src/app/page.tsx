import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Project from "@/components/sections/project";
import Roadmap from "@/components/sections/roadmap";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import FAQ from "@/components/sections/faq";
import Create from "@/components/sections/create";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Project />
      <Roadmap />
      <Team />
      <Testimonials />
      <FAQ />
      <Create />
      <Footer />
    </main>
  );
}
