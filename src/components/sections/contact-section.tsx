"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus aliquam parturient erat id vel, condimentum a, hendrerit egestas. Auctor cras diam, dui pulvinar elit.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-heading font-bold mb-2">Location</h5>
                  <p className="text-gray-400">
                    1234 North Avenue Luke Lane, South Bend, <br /> IN 360001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-heading font-bold mb-2">Email</h5>
                  <p className="text-gray-400">
                    cyfonii@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-xl font-heading font-bold mb-2">Phone</h5>
                  <p className="text-gray-400">
                    +123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4">Phone</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 ml-4">Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-6 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 ml-4">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-black/20 border border-white/10 rounded-3xl py-4 px-6 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button className="px-8 py-3 rounded-full bg-gradient-main text-white font-bold hover:shadow-[0_0_20px_rgba(92,39,254,0.4)] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
