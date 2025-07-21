import { Brush, Globe, FileText, Target, Users } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Creative Excellence",
      desc: "Lightroom, Photoshop & real cruise workflows.",
      gradient: "cruise-gradient",
      icon: <Brush className="w-10 h-10" />,
    },
    {
      title: "Global Access",
      desc: "Our hiring partners place photographers across leading cruise lines.",
      gradient: "sunset-gradient",
      icon: <Globe className="w-10 h-10" />,
    },
    {
      title: "Documentation Support",
      desc: "STCW, INDOS, SID, CDC & Medicals – all handled.",
      gradient: "mint-gradient",
      icon: <FileText className="w-10 h-10" />,
    },
    {
      title: "Placement Assistance",
      desc: "After your skill evaluation, we refer you to real cruise job openings.",
      gradient: "ocean-gradient",
      icon: <Target className="w-10 h-10" />,
    },
    {
      title: "1-on-1 Mentorship",
      desc: "Personal guidance throughout your learning journey.",
      gradient: "cruise-gradient",
      icon: <Users className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Why Choose Cruise Lens Academy?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-gradient-to-br from-[#191726] via-[#23203a] to-[#191726] border border-white/10 shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 group hover:shadow-2xl hover:-translate-y-2 hover:border-white/20"
            >
              <div
                className={`w-20 h-20 ${card.gradient} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg`}
              >
                <span className="cruise-gradient backdrop-blur-xl rounded-xl p-4 flex items-center justify-center shadow-2xl border border-white/20 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-3xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="text-2xl font-normal text-white mb-2 tracking-tight drop-shadow">
                {card.title}
              </h3>
              <p className="text-white/80 text-base leading-relaxed">
                {card.desc}
              </p>
              <div className="mt-6 w-10 h-1 rounded-full bg-gradient-to-r from-white/30 via-white/60 to-white/30 opacity-60 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
