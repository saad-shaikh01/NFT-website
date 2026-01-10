import Link from "next/link";
import Image from "next/image";

const Create = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">

        <div className="relative bg-gradient-to-r from-[#DEC7FF] to-[#5C27FE] rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/layouts/pattern.png')] bg-cover opacity-20 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16">

                {/* Content */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                        Create your NFT portfolio
                    </h4>
                    <p className="text-white/80 text-lg mb-8">
                        Get udpated with news, tips & tricks
                    </p>
                    <Link
                        href="#"
                        className="inline-block px-10 py-4 bg-gradient-to-r from-[#FFCB52] to-[#FF7B02] rounded-xl text-white font-heading font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                    <div className="md:absolute md:-top-20 md:-right-10 w-[300px] lg:w-[400px] animate-move5">
                        <Image
                            src="/images/layouts/create.png"
                            alt="Create NFT"
                            width={400}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Create;
