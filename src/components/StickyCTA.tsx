"use client";

import PremiumButton from "@/components/ui/PremiumButton";
import { useLeadModal } from "@/components/lead/LeadModalContext";

export default function StickyCTA() {
  const { openModal } = useLeadModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] border-t border-white/10 bg-[#0A0F1F]/95 backdrop-blur-xl shadow-2xl lg:hidden">
      <div className="flex items-center justify-between gap-4 px-4 py-3">

        <div>
          <p className="text-xs text-gray-400">
            Starting From
          </p>

          <h3 className="text-xl font-bold text-[#D4AF37]">
            ₹85Lakhs*
          </h3>
        </div>

        <PremiumButton
          onClick={openModal}
          className="px-6 py-3"
        >
          Book Site Visit
        </PremiumButton>

      </div>
    </div>
  );
}