import { cn } from "@/lib/utils";
import Link from "next/link";

export default function EnquireNowBtn({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href="/contact"
      className={cn(
        "glass-effect text-white font-normal px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-2 border border-white/30 hover:scale-105 hover:bg-white/10 hover:text-blue-200",
        className
      )}
    >
      {children}
    </Link>
  );
}
