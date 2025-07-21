// import { Ship } from "lucide-react";
import Image from "next/image";
import CordeliaLogo from "@/images/recruitement/CordeliaCruises-Logo.jpg";
import MarellaCruiseLogo from "@/images/recruitement/Marella-Cruises-Logo.jpg";
import POCruisesLogo from "@/images/recruitement/POCruises.jpg";
import CunardLineLogo from "@/images/recruitement/Cunard-Line-Logo.jpg";

export default function RecruitmentPartner() {
  return (
    <section id="recruitment" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Recruitment &amp; Placement
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Where Our Hiring Partners&apos; Photographers Sail
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto">
          <p className="text-lg text-white/90 text-center mb-8">
            We proudly support the career journeys of photographers who are now
            working on some of the world’s most iconic cruise lines. Our
            placement support is based on skill — not promises. Once you
            complete the required training and clear your internal evaluation,
            we connect you with verified hiring partners and real opportunities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 sunset-gradient rounded-3xl flex items-center justify-center mx-auto mb-4">
                {/* <Ship className="w-12 h-12 text-gray-800" /> */}
                <Image
                  src={CordeliaLogo}
                  // className="w-auto h-16"
                  alt="Cordelia Cruises Logo"
                />
              </div>
              <h3
                className="text-xl font-normal text-white"
                data-edit-disabled="true"
              >
                Cordelia Cruises
              </h3>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 sunset-gradient rounded-3xl flex items-center justify-center mx-auto mb-4">
                {/* <Ship className="w-12 h-12 text-gray-800" /> */}
                <Image
                  src={MarellaCruiseLogo}
                  // className="w-12 h-auto"
                  alt="Marella Cruises Logo"
                />
              </div>
              <h3
                className="text-xl font-normal text-white"
                data-edit-disabled="true"
              >
                Marella Cruises
              </h3>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 sunset-gradient rounded-3xl flex items-center justify-center mx-auto mb-4">
                {/* <Ship className="w-12 h-12 text-gray-800" /> */}
                <Image
                  src={POCruisesLogo}
                  // className="w-12 h-12"
                  alt="P&O Cruises Logo"
                />
              </div>
              <h3
                className="text-xl font-normal text-white"
                data-edit-disabled="true"
              >
                P&amp;O Cruises
              </h3>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 sunset-gradient rounded-3xl flex items-center justify-center mx-auto mb-4">
                {/* <Ship className="w-12 h-12 text-gray-800" /> */}
                <Image
                  src={CunardLineLogo}
                  // className="w-12 h-12"
                  alt="Cunard Line Logo"
                />
              </div>
              <h3
                className="text-xl font-normal text-white"
                data-edit-disabled="true"
              >
                Cunard Line
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
