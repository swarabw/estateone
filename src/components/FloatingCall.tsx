"use client";

import { Phone } from "lucide-react";
import { project } from "@/data/project";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${project.phone}`}
      className="fixed bottom-28 right-6 z-[9998] flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-2xl transition-all duration-300 hover:scale-110 lg:hidden"
    >
      <Phone size={30} />
    </a>
  );
}