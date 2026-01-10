import { Wallet, ShoppingBag, LayoutGrid, Tag } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    icon: Wallet,
    title: "Connect your wallet",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
  },
  {
    step: "Step 2",
    icon: ShoppingBag,
    title: "Buy your NFT",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
  },
  {
    step: "Step 3",
    icon: LayoutGrid,
    title: "Create collection",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
  },
  {
    step: "Step 4",
    icon: Tag,
    title: "Sell your NFT",
    description: "Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
  },
];

const PortfolioSteps = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            Join NFT Portfolio
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            Become a Cyfonii <br /> Player Now
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-500 bg-white/10 px-2 py-1 rounded">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary">
                  <item.icon size={28} />
                </div>
                <h5 className="text-xl font-bold font-heading mb-3">{item.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-[600px] hidden lg:block">
             {/* Placeholder for portfolio image - using existing asset layout */}
             <div className="absolute inset-0 bg-[url('/images/layouts/portfolio.png')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSteps;
