import PhotoCamera from "@/images/photo-camera.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Cruise Lens Academy
            </h2>
            <p className="text-lg text-white/90 mb-4 leading-relaxed">
              Cruise Lens Academy is India’s only full-stack cruise photography
              training platform — where your passion meets international
              opportunity.
            </p>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              We are more than just a photography institute. At Cruise Lens
              Academy, we guide aspiring Indian photographers through the exact
              path needed to launch a successful cruise ship photography career,
              including maritime documentation, hands-on creative training, and
              real placement support.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Whether you’re a beginner, ex-seafarer, or currently working
              onboard, we’ve got a course designed to elevate your profile and
              sail you ahead.
            </p>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-3xl p-4">
              <Image
                src={PhotoCamera}
                alt="Professional photographer taking pictures on cruise ship deck"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
