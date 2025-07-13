import { ArrowRight, Camera, Ship, Globe } from "lucide-react";
import ShipBackground from "./Background";
import ApplyNowBtn from "./ApplyNowBtn";
import EnquireNowBtn from "./EnquireNowBtn";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-6"
    >
      <ShipBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 text-shadow">
            Cruise Lens Academy
          </h1>

          <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-medium text-shadow">
            Dock here. Sail everywhere.
          </p>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            India&apos;s only career-focused cruise photography training
            platform. Transform your creative talent into global cruise
            professional opportunities.
          </p>

          {/* Feature highlights */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-blue-200">
              <Camera className="w-6 h-6" />
              <span className="font-medium">Photography</span>
            </div>
            <div className="flex items-center space-x-2 text-pink-200">
              <Ship className="w-6 h-6" />
              <span className="font-medium">Cruise Career</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-200">
              <Globe className="w-6 h-6" />
              <span className="font-medium">Global Exposure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ApplyNowBtn className="inline-flex items-center justify-center ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cruise-gradient h-11 rounded-md text-black font-bold text-lg px-8 py-4 shadow-lg hover:scale-105 transform transition-all duration-200 group" />

            <EnquireNowBtn className="inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-white/10 hover:bg-blue-400 hover:text-white h-11 rounded-md border-blue-300 text-blue-100 font-semibold text-lg px-8 py-4 backdrop-blur-sm shadow-lg hover:scale-105 transform duration-200 group">
              Enquire Now
              <ArrowRight />
            </EnquireNowBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
