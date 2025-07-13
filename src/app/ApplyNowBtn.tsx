import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ApplyNowBtn({ className }: { className?: string }) {
  return (
    <Link
      href="/apply"
      className={cn(
        "cruise-gradient text-gray-800 font-bold px-6 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400",
        className
      )}
      aria-label="Apply Now"
    >
      <ArrowRight />
      <span>Apply Now</span>
    </Link>
  );
}
