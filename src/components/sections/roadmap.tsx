const roadmapData = [
  {
    time: "February 01, 2022",
    title: "Idea Generation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
    position: "left"
  },
  {
    time: "February 01, 2022",
    title: "Design & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
    position: "right"
  },
  {
    time: "February 01, 2022",
    title: "Initial Release",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
    position: "left"
  },
  {
    time: "February 01, 2022",
    title: "Result & Final Report",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
    position: "right"
  },
  {
    time: "February 01, 2022",
    title: "Design & Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.",
    position: "left"
  }
];

const Roadmap = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
             <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-sm tracking-wider uppercase">
                    Road Map
                </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                The Journey of <br /> Cyfonii NFT
            </h3>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-[#1F223E] hidden md:block"></div>

            <div className="flex flex-col gap-10">
                {roadmapData.map((item, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${item.position === "right" ? "md:flex-row-reverse" : ""}`}>

                        {/* Empty Space for alignment */}
                        <div className="w-full md:w-1/2 px-4"></div>

                        {/* Dot on Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-white hidden md:block z-10 border border-white">
                             <div className="absolute inset-0 bg-gradient-to-r from-[#DEC7FF] to-[#5C27FE] rounded-full opacity-50 blur-[2px]"></div>
                        </div>

                        {/* Content Box */}
                        <div className={`w-full md:w-1/2 px-4 ${item.position === "right" ? "md:pr-12 md:pl-4" : "md:pl-12 md:pr-4"}`}>
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                                {/* Connector Line (Desktop) */}
                                <div className={`hidden md:block absolute top-1/2 w-[30px] h-px bg-[#1F223E] ${item.position === "right" ? "right-[-30px]" : "left-[-30px]"}`}></div>
                                <div className={`hidden md:block absolute top-1/2 w-[20px] h-[20px] rounded-full border-4 border-[#1F223E] bg-white transform -translate-y-1/2 ${item.position === "right" ? "right-[-40px]" : "left-[-40px]"} z-20`}></div>

                                <div className="absolute -top-4 left-8 px-4 py-1 rounded-full border border-white/10 bg-[#14141F]">
                                    <span className="text-transparent bg-clip-text bg-gradient-main font-heading font-bold text-xs uppercase">
                                        {item.time}
                                    </span>
                                </div>

                                <h5 className="text-xl font-heading font-bold mb-4 mt-2 relative inline-block">
                                    {item.title}
                                    <span className="absolute bottom-[-5px] left-0 w-[50px] h-[3px] bg-gradient-to-r from-[#DEC7FF] to-[#5C27FE] rounded-full"></span>
                                </h5>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-8 py-3.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0 font-heading font-bold text-base">
                    View Full Road Map
                  </span>
                </button>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Roadmap;
