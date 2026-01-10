import Navbar from "@/components/sections/navbar";
import PageTitle from "@/components/sections/page-title";
import TeamGrid from "@/components/sections/team-grid";
import Create from "@/components/sections/create";
import Footer from "@/components/sections/footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#070A29] text-white overflow-hidden font-body">
      <Navbar />
      <PageTitle title="Our Team" breadcrumb={["Explore", "Team"]} />
      <TeamGrid />
      <Create />
      <Footer />
    </main>
  );
}
