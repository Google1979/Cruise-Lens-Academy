// import Image from "next/image";
import { AlertTriangle, Ship } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            About Cruise Lens Academy
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
            India's only full-stack cruise photography training platform — where
            your passion meets international opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
            <div className="mb-8">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                The Challenge
              </h3>
            </div>
            <p className="text-lg text-white/70 leading-relaxed">
              Thousands of talented Indian photographers dream of working
              abroad, but most never make it past the dock. The barrier isn't
              skill — it's the lack of proper maritime documentation, structured
              creative training, and real placement support. The result? Missed
              opportunities, shattered confidence, and careers that never leave
              the shore.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Solution
              </h3>
            </div>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Cruise Lens Academy bridges this gap through comprehensive
              training that goes beyond photography. We provide maritime
              documentation assistance, hands-on technical training, and actual
              placement support with global cruise lines.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Whether you're starting fresh, transitioning careers, or advancing
              your current role, our structured programs are designed to make
              you cruise-ready — professionally and personally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
