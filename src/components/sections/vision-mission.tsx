import Image from "next/image";

const VisionMission = () => {
  return (
    <>
      {/* Vision Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/layouts/about-01.png"
                  alt="Vision"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
                Vision
              </h6>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Cost-effective for users
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Best for small businesses
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Easy to use and integrate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
                Mission
              </h6>
              <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Ac tortor vitae purus faucibus ornare suspendisse sed nisi.
              </p>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/layouts/about-02.png"
                  alt="Mission"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
