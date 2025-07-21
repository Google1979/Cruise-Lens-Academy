"use client";
import { ArrowRight } from "lucide-react";
import ApplyNowBtn from "./ApplyNowBtn";
import EnquireNowBtn from "./EnquireNowBtn";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`floating-cta fixed right-6 bottom-6 z-50 transition-all duration-300 ${
        scrolled ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col space-y-4">
        <ApplyNowBtn className="rounded-full " />
        <EnquireNowBtn className="glass-effect text-white font-normal px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 border border-white/30 hover:scale-105 hover:bg-white/10 hover:text-blue-200">
          <ArrowRight />
          <span>Enquire</span>
        </EnquireNowBtn>
      </div>
    </div>
  );
}
