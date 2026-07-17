"use client";

import { Phone, MessageCircle } from "lucide-react";
import { project } from "@/data/project";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">

      <div className="grid grid-cols-2">

        <a
          href={`tel:${project.phone}`}
          className="flex h-16 items-center justify-center gap-2 bg-[#C89B3C] text-base font-semibold text-black transition hover:bg-[#b98d2f]"
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href={`https://wa.me/${project.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-16 items-center justify-center gap-2 bg-[#25D366] text-base font-semibold text-white transition hover:bg-[#20bd5a]"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

      </div>

    </div>
  );
}