import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

// Mock Data
const teamMembers = [
  { id: 1, name: "Jane Cooper", role: "Founder & CEO", image: "/images/layouts/team-01.png" },
  { id: 2, name: "Jenny Wilson", role: "Designer", image: "/images/layouts/team-02.png" },
  { id: 3, name: "Ralph Edwards", role: "Developer", image: "/images/layouts/team-03.png" },
  { id: 4, name: "Cody Fisher", role: "3D Artist", image: "/images/layouts/team-04.png" },
  { id: 5, name: "Jane Cooper", role: "Designer", image: "/images/layouts/team-05.png" },
  { id: 6, name: "Bobby Fischer", role: "Designer", image: "/images/layouts/team-06.png" },
  { id: 7, name: "Jenny Wilson", role: "Designer", image: "/images/layouts/team-07.png" },
  { id: 8, name: "Courtney Henry", role: "Designer", image: "/images/layouts/team-08.png" },
];

const TeamGrid = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            Team Members
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            Our Amazing Team <br /> Members
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-4 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5]">
                <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <Facebook size={18} />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <Twitter size={18} />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <Instagram size={18} />
                    </Link>
                </div>
              </div>
              <h5 className="text-xl font-bold font-heading mb-1 hover:text-primary transition-colors cursor-pointer">
                {member.name}
              </h5>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
