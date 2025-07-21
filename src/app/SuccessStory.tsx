import Image from "next/image";
import { Quote, Star } from "lucide-react";

export default function SuccessStory() {
  const successStories = [
    {
      name: "Valued Graduate",
      role: "Cruise Photographer",
      image: "/images/photo-person.jpg",
      testimonial:
        "After two months with Cruise Lens Academy, I not only got my STCW docs and portfolio done, but also cracked my first cruise interview. Highly recommended!",
    },
    {
      name: "Rahul Patel",
      role: "Lead Photographer",
      image: "/images/photo-person.jpg",
      testimonial:
        "The job placement assistance was phenomenal. Within 2 months of completing the course, I had multiple offers from top cruise lines. The academy's industry connections are unmatched.",
    },
    {
      name: "Priya Sharma",
      role: "International Photographer",
      image: "/images/photo-person.jpg",
      testimonial:
        "Cruise Lens Academy transformed my passion for photography into an incredible international career. The 1-on-1 mentorship and STCW certification made all the difference.",
    },
  ];
  return (
    <section id="testimonials" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Hear from our graduates who are now living their dream careers on
            cruise ships around the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <SuccessStoryCard
              key={index}
              name={story.name}
              role={story.role}
              image={story.image}
              testimonial={story.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoryCard({
  name,
  role,
  image,
  testimonial,
}: {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}) {
  return (
    <div className="glass-effect rounded-3xl p-8 card-hover flex flex-col h-full">
      <Quote className="w-8 h-8 text-blue-300 mb-4" />
      <p
        className="text-white/90 mb-6 leading-relaxed flex-grow"
        data-edit-disabled="true"
      >
        {testimonial}
      </p>
      <div className="flex items-center space-x-4 mt-auto pt-6 border-t border-white/10">
        <div className="w-14 h-14 rounded-full overflow-hidden glass-effect p-1">
          <Image
            alt={name}
            className="w-full h-full object-cover rounded-full"
            src={image}
            height={60}
            width={60}
          />
        </div>
        <div>
          <div className="text-white font-normal">{name}</div>
          <div className="text-white/70 text-sm">{role}</div>
        </div>
        <div className="ml-auto flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 text-yellow-400"
              strokeWidth={2}
              fill="currentColor"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
