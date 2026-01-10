import Link from "next/link";
import { User, Layers, Coins, BarChart3 } from "lucide-react";

const tokens = [
  { icon: User, label: "Name", value: "Al Mahmud" },
  { icon: Layers, label: "Platform", value: "Cyfonii" },
  { icon: Coins, label: "Total Supply", value: "100'000 tokens" },
  { icon: BarChart3, label: "ICO Supply", value: "60'000 tokens" },
  { icon: Coins, label: "Token Price", value: "0.25€ / 0.29 USD" },
];

const Token = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Shapes */}
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
              Token Information
            </h6>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Here’s what you <br /> need to know <br /> about NFT
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg">
              Sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat
            </p>
            <Link
                href="#"
                className="group relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-main text-white font-heading font-bold overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(92,39,254,0.4)]"
            >
                <span className="relative z-10">Buy Token</span>
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tokens.map((token, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <token.icon size={20} />
                    </div>
                    <span className="text-gray-400 text-sm uppercase tracking-wider">{token.label}</span>
                  </div>
                  <h4 className="text-xl font-bold font-heading">{token.value}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
