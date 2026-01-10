import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import TeamGrid from "@/components/sections/team-grid";
import Footer from "@/components/sections/footer";

export default function AdvisorPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Advisors & Backers" breadcrumb={["Explore", "Advisors & Backers"]} />
      <TeamGrid />
      <Footer />
    </main>
  );
}
