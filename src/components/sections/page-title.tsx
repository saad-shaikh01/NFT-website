import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageTitleProps {
  title: string;
  breadcrumb: string[];
}

const PageTitle = ({ title, breadcrumb }: PageTitleProps) => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#0D0F2C]">
      {/* Background Shapes - Simplified representation of legacy shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">{title}</h2>
            <ul className="flex items-center gap-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight size={14} />
                  <span className={index === breadcrumb.length - 1 ? "text-primary" : ""}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Share this page - Placeholder for now */}
          <div className="flex items-center gap-4">
             <span className="text-gray-400">Share this page</span>
             <div className="flex gap-3">
                {/* Social Icons Placeholders */}
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
