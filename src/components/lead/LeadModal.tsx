"use client";

import { X, Download, MapPin, ShieldCheck } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import LeadForm from "@/components/LeadForm";

export default function LeadModal() {
  const { open, closeModal } = useLeadModal();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] animate-in fade-in zoom-in-95 duration-300">

        {/* Close Button */}

        <button
          onClick={closeModal}
          className="absolute right-5 top-5 z-20 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Header */}

        <div className="bg-gradient-to-br from-[#0B1120] via-[#101A33] to-[#18294F] px-8 py-8">

          <p className="text-sm font-semibold uppercase tracking-[0.30em] text-[#D4AF37]">
            EstateOne Realtors
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Unlock Pre-Launch Prices
          </h2>

          <p className="mt-3 text-gray-300">
            Book your free site visit and download the latest cost sheet.
          </p>

          {/* Benefits */}

          <div className="mt-6 grid gap-3">

            <div className="flex items-center gap-3 text-white">
              <Download size={18} className="text-[#D4AF37]" />
              <span>Latest Cost Sheet PDF</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <MapPin size={18} className="text-[#D4AF37]" />
              <span>Free Guided Site Visit</span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span>No Brokerage • Limited Pre-Launch Offer</span>
            </div>

          </div>

        </div>

        {/* Form */}

        <div className="bg-white p-8">
          <LeadForm />
        </div>

      </div>
    </div>
  );
}