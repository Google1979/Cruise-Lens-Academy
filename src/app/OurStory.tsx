import PhotoRoshan from "@/images/photo-roshan.jpg";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section id="founders" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Story Behind
            <span className="block">Cruise Lens Academy</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Cruise Lens Academy was born out of lived experience — not just
            ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <div className="glass-effect rounded-3xl p-4">
              <Image
                src={PhotoRoshan}
                alt="Rohan Singh, Co-founder"
                className="rounded-2xl w-full"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p
              className="text-lg text-white/90 mb-4 leading-relaxed"
              data-edit-disabled="true"
            >
              <strong>Rohan Singh</strong>, after working aboard cruise ships
              across 43 countries, saw first-hand how thousands of passionate
              Indian photographers were missing out on global career
              opportunities. Not because of talent gaps, but due to a lack of
              documentation, structured training, and real placement guidance.
            </p>
            <p
              className="text-lg text-white/90 leading-relaxed"
              data-edit-disabled="true"
            >
              Meanwhile, <strong>Suraj Thakre</strong>, with 7+ years of
              experience managing teams and client journeys in the fitness and
              lifestyle sector, knew how much operational structure and
              mentorship matter in shaping careers. His strength lies in making
              systems work — something every academy needs to scale impact.
            </p>
          </div>
        </div>

        <div className="text-center text-lg text-white/90 max-w-4xl mx-auto mb-16">
          Together, they started Cruise Lens Academy — a space where creative
          passion meets professional polish, and where Indian photographers are
          empowered to dock locally and sail globally.
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-8">
            <Quote className="w-8 h-8 text-blue-300 mb-4" />

            <p className="text-white/90 text-lg italic mb-4">
              “I created Cruise Lens Academy to bridge the gap between Indian
              talent and international cruise careers. This platform is where
              creativity meets opportunity.”
            </p>
            <p className="text-white font-semibold">- Rohan Singh</p>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <Quote className="w-8 h-8 text-pink-300 mb-4" />

            <p className="text-white/90 text-lg italic mb-4">
              “We’re not just training photographers — we’re helping young
              Indians transform their lives and go global with the right
              support, skills, and confidence.”
            </p>
            <p className="text-white font-semibold">- Suraj Thakre</p>
          </div>
        </div>
      </div>
    </section>
  );
}
