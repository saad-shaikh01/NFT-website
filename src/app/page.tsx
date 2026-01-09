import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
