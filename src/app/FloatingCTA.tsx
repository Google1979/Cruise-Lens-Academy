import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="floating-cta fixed right-6 bottom-6 z-50">
      <div className="flex flex-col space-y-4">
        <button className="cruise-gradient text-gray-800 font-bold px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400">
          <ArrowRight />
          <span>Apply Now</span>
        </button>
        <button className="glass-effect text-white font-semibold px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 border border-white/30 hover:scale-105 hover:bg-white/10 hover:text-blue-200">
          <ArrowRight />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
}
