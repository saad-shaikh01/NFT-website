import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Contact" breadcrumb={["Contact"]} />
      <ContactSection />
      <Footer />
    </main>
  );
}
