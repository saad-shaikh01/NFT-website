const roadmapData = [
  {
    time: "February 01, 2022",
    title: "Idea Generation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
  {
    time: "February 01, 2022",
    title: "Design & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
  {
    time: "February 01, 2022",
    title: "Initial Release",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
  {
    time: "February 01, 2022",
    title: "Result & Final Report",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
  {
    time: "February 01, 2022",
    title: "Design & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
  {
    time: "February 01, 2022",
    title: "Design & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
  },
];

const RoadmapVertical = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h6 className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase mb-2">
            Road Map
          </h6>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            The Journey of <br /> Cyfonii NFT
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/10 hidden md:block"></div>

          <div className="flex flex-col gap-12">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 text-center md:text-right" : "md:pl-12 text-center md:text-left"}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <h5 className="text-xl font-bold font-heading mb-3 text-white">{item.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-black ring-opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/20 rounded-full blur-md -z-10"></div>
                </div>

                {/* Date Side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12 text-center md:text-left" : "md:pr-12 text-center md:text-right"}`}>
                  <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapVertical;
