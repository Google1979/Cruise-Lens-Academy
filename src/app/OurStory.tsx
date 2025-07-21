import PhotoRoshan from "@/images/photo-roshan.jpg";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function OurStory() {
  return (
    <section id="founders" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
            The Founders&apos; Story
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Cruise Lens Academy was born out of real journeys — not just ideas.
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
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              <strong>Rohan Singh</strong>, our Founder & CEO, worked as a Photo
              Manager on some of the world&apos;s leading cruise lines,
              traveling to 43 countries and leading multicultural teams onboard.
              During his time at sea, he encountered hundreds of talented Indian
              photographers working in local studios, weddings, or freelance
              gigs, all with the potential to go global, but stuck due to one
              harsh reality: they simply didn&apos;t know how.
            </p>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Most didn&apos;t have the required maritime documents. Many lacked
              formal creative training or the discipline expected onboard. And
              almost none had access to the kind of mentorship or placement
              guidance that could help them break into cruise photography
              careers. Rohan knew the talent was there, but the structure was
              missing.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Meanwhile, <strong>Suraj Thakre</strong>, a long-time friend and
              now Co-Founder, was building a strong reputation in the fitness
              and lifestyle sector, managing client journeys, mentoring teams,
              and driving performance-based results. With over 7 years of
              operational experience, Suraj had a deep understanding of what it
              takes to scale systems, build trust, and create career pathways
              for young professionals.
            </p>
          </div>
        </div>

        <div className="text-center text-lg text-white/90 max-w-4xl mx-auto mb-12">
          <p className="mb-8">
            Together, they saw an opportunity — not just to train photographers,
            but to transform lives.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-normal text-white mb-6">
              That&apos;s how Cruise Lens Academy came to life:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>A platform built on practical experience, not just theory</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>A career-ready program tailored to Indian creatives</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  A launchpad where discipline, creativity, and documentation
                  meet global opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-lg text-white/90 max-w-4xl mx-auto mb-16">
          Today, Rohan and Suraj work hand-in-hand to guide aspiring
          photographers — from the streets of India to the decks of
          international cruise ships — giving them every tool they need to dock
          locally, and sail globally.
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-effect rounded-3xl p-8">
            <Quote className="w-8 h-8 text-blue-300 mb-4" />

            <p className="text-white/90 text-lg italic mb-4">
              &quot;I created Cruise Lens Academy to bridge the gap between
              Indian talent and international cruise careers. Every photographer
              I met during my years at sea had potential — they just needed the
              right structure and guidance to unlock it.&quot;
            </p>
            <p className="text-white font-normal">
              - Rohan Singh, Founder & CEO
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8">
            <Quote className="w-8 h-8 text-pink-300 mb-4" />

            <p className="text-white/90 text-lg italic mb-4">
              &quot;We&apos;re not just training photographers — we&apos;re
              helping young Indians transform their lives and go global with the
              right support, skills, and confidence.&quot;
            </p>
            <p className="text-white font-normal">- Suraj Thakre, Co-Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
