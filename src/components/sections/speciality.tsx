import { ShieldCheck, UserCheck, Key, RefreshCw } from "lucide-react";

const specialities = [
  {
    icon: ShieldCheck,
    title: "Safe Database",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
  },
  {
    icon: UserCheck,
    title: "Non-fungible token",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
  },
  {
    icon: Key,
    title: "Verify Payment",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
  },
  {
    icon: RefreshCw,
    title: "Timestamp server",
    description: "Oficia dese runt mollit anim id est labo met, consectetur adipis",
  },
];

const Speciality = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#0D0F2C]">
       <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:pr-12">
                 <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
                    Technology
                </h6>
                <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Cyfonii unique <br /> Technology
                </h3>
            </div>

            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {specialities.map((item, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
                             <div className="w-16 h-16 rounded-full bg-gradient-to-b from-white/20 to-transparent flex items-center justify-center mb-6">
                                <item.icon className="w-8 h-8 text-primary" />
                             </div>
                             <h4 className="text-xl font-bold font-heading mb-4 capitalize">{item.title}</h4>
                             <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
