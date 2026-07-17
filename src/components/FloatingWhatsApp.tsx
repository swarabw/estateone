"use client";

import { MessageCircle } from "lucide-react";
import { project } from "@/data/project";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${project.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_20px_50px_rgba(37,211,102,0.6)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
    </a>
  );
}