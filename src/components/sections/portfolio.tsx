import { Wallet, Grid, ShoppingBag, FolderPlus } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: <Wallet className="w-8 h-8 text-white" />,
    title: "Connect your wallet",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    step: "Step 1",
    color: "from-[#1DE8F1] to-[#00BBFF]"
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    title: "Buy your NFT",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    step: "Step 2",
    color: "from-[#00E3FF] to-[#00D0FF]"
  },
  {
    icon: <Grid className="w-8 h-8 text-white" />,
    title: "Create collection",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    step: "Step 3",
    color: "from-[#DEC7FF] to-[#5C27FE]"
  },
  {
    icon: <FolderPlus className="w-8 h-8 text-white" />,
    title: "Sell your NFT",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
    step: "Step 4",
    color: "from-[#00D0FF] to-[#00BBFF]"
  }
];

const Portfolio = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    Join NFT Portfolio
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Become a Cyfonii <br /> Player Now
            </h3>
        </div>

        <div className="flex flex-wrap items-center">
            {/* Left Column: Steps */}
            <div className="w-full lg:w-1/2 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((item, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
                            <div className="absolute -top-3 left-6 px-4 py-1 rounded-full border border-white/10 bg-[#14141F]">
                                 <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-xs uppercase">
                                    {item.step}
                                </span>
                            </div>
                            <div className="flex items-start mb-4 mt-4">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mr-4 flex-shrink-0`}>
                                    {item.icon}
                                </div>
                            </div>
                            <h5 className="text-lg font-heading font-bold mb-3">{item.title}</h5>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">
                <div className="relative animate-move5 duration-[3s]">
                    <Image
                        src="/images/layouts/portfolio.png"
                        alt="Portfolio"
                        width={600}
                        height={600}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
