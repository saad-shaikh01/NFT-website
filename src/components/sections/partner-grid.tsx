import Image from "next/image";
import Link from "next/link";

const partners = [
  { id: 1, name: "Stikey", logo: "/images/logo/brand-01.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 2, name: "Stikey", logo: "/images/logo/brand-02.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 3, name: "Stikey", logo: "/images/logo/brand-03.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 4, name: "Stikey", logo: "/images/logo/brand-04.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 5, name: "Stikey", logo: "/images/logo/brand-05.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 6, name: "Stikey", logo: "/images/logo/brand-06.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 7, name: "Stikey", logo: "/images/logo/brand-01.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
  { id: 8, name: "Stikey", logo: "/images/logo/brand-02.png", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas." },
];

const PartnerGrid = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            Partners
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            We Are Partnered <br /> with Top Brands
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="h-20 flex items-center justify-center mb-6">
                 {/* Using grayscale/opacity for unhovered state */}
                 <div className="relative w-32 h-16 opacity-70 group-hover:opacity-100 transition-opacity">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                 </div>
              </div>
              <h5 className="text-xl font-bold font-heading mb-3">{partner.name}</h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
             <Link
                href="/contact"
                className="group relative px-8 py-3 rounded-full bg-gradient-main text-white font-heading font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(92,39,254,0.4)]"
            >
                <span className="relative z-10">Join Us Now</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerGrid;
