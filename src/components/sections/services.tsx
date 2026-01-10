import { Layers, Zap, Star, Users } from "lucide-react";

const services = [
  {
    icon: <Layers className="w-10 h-10 text-white" />,
    title: "Huge Collection",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    number: "01",
  },
  {
    icon: <Zap className="w-10 h-10 text-white" />,
    title: "High Quality",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    number: "02",
  },
  {
    icon: <Star className="w-10 h-10 text-white" />,
    title: "Top Resource",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    number: "03",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Big Community",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
    number: "04",
  },
];

const Services = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Shape */}
       <div className="absolute top-0 right-[-20%] w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    Our Speciality
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Complete Solutions <br /> for your NFT
            </h3>
            <p className="text-gray-300 text-lg">
                Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 pt-16 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                    {/* Icon */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-[105px] h-[105px] rounded-full bg-gradient-to-br from-[#DEC7FF] to-[#5C27FE] flex items-center justify-center border-4 border-[#070A29] group-hover:rotate-[360deg] transition-transform duration-700">
                        {service.icon}
                    </div>

                    <h5 className="text-xl font-heading font-bold mt-4 mb-3">{service.title}</h5>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <h3 className="text-4xl font-heading font-bold text-white/10 group-hover:text-white transition-colors duration-300">
                        {service.number}
                    </h3>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
