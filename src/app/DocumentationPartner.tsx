import { MapPin, Phone, Calendar, FileText } from "lucide-react";
import Image from "next/image";
import VTMALogo from "@/images/vtmalogo.png";

export default function DocumentationPartner() {
  return (
    <section id="partners" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Documentation Partner
          </h2>
        </div>

        <div className="glass-effect rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 cruise-gradient rounded-3xl flex items-center justify-center mr-6">
                  {/* <User className="w-10 h-10 text-gray-800" /> */}
                  <Image
                    src={VTMALogo}
                    className="w-10 h-10"
                    alt="Vijayatilak Maritime Academy Logo"
                  />
                </div>
                <div>
                  <p className="text-white/80 text-lg">Official Partner</p>
                  <h3 className="text-3xl font-normal text-white">
                    Vijayatilak Maritime Academy
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-white/90">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-300" />
                  <span>Naigaon East, Vasai-Virar, Maharashtra 401208</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-300" />
                  <span>077100 42076</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-300" />
                  <span>Batch Days: Every Monday &amp; Thursday</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-normal text-white mb-4">
                Documents Handled for Our Students:
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["INDOS", "STCW", "SID", "CDC", "Medicals"].map((doc) => (
                  <div className="flex items-center space-x-3" key={doc}>
                    <FileText className="w-5 h-5 text-green-400" />
                    <span className="text-white" data-edit-disabled="true">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>

              <div className="glass-effect rounded-2xl p-4 mt-6">
                <p
                  className="text-white/90 text-center"
                  data-edit-disabled="true"
                >
                  <strong className="text-white">Note:</strong>
                  Students do not need to worry about scheduling or booking —
                  Cruise Lens Academy coordinates your complete process directly
                  with Vijayatilak Academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
