"use client";

import { MessageCircle } from "lucide-react";
import { project } from "@/data/project";

export default function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${project.whatsapp}?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(project.name)}.%20Please%20share%20details.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
    >
      <MessageCircle size={32} />

      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25"></span>
    </a>
  );
}