import Image from "next/image";
import Link from "next/link";

const projects = [
  { id: 1, image: "/images/item/item-01.png", title: "3D Digital Artwork" },
  { id: 2, image: "/images/item/item-02.png", title: "King Of Pirates" },
  { id: 3, image: "/images/item/item-03.png", title: "Pomeranian Doge" },
  { id: 4, image: "/images/item/item-04.png", title: "3D Digital Artwork" },
  { id: 5, image: "/images/item/item-05.png", title: "Nintendo Switch" },
  { id: 6, image: "/images/item/item-06.png", title: "The Strange Art" },
  { id: 7, image: "/images/item/item-07.png", title: "Pixel Art Addicted" },
  { id: 8, image: "/images/item/item-08.png", title: "3D Digital Artwork" },
];

const ProjectV2 = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
              Our Speciality
            </span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            OUR COLLECTION
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-5 hover:transform hover:-translate-y-2 transition-all duration-300 group/card">
              <div className="relative rounded-2xl overflow-hidden mb-5 h-[300px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                />
              </div>
              <div className="text-center">
                <Link href="#" className="text-xl font-heading font-bold hover:text-primary transition-colors">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
             <Link
                href="#"
                className="group relative px-8 py-3 rounded-full bg-transparent border border-primary/50 text-white font-heading font-bold overflow-hidden transition-all hover:border-primary hover:shadow-[0_0_20px_rgba(92,39,254,0.4)]"
            >
                <div className="absolute inset-0 bg-gradient-main opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                   View All COLLECTION
                </span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectV2;
