import Image from "next/image";
import PhotoShip from "@/images/photo-ship.jpg";

export default function ShipBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        alt="Luxury cruise ship sailing on calm ocean waters at sunset"
        className="w-full h-full object-cover object-[0%_0%] md:opacity-20 object-right md:object-center"
        src={PhotoShip}
        loading="eager"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a18]/20 via-[#0c0a18]/80 to-[#0c0a18]"></div>
    </div>
  );
}
