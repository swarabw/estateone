"use client";

import { X, Download, MapPin, ShieldCheck } from "lucide-react";
import { useLeadModal } from "./LeadModalContext";
import LeadForm from "@/components/LeadForm";

export default function LeadModal() {
  const { open, closeModal } = useLeadModal();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/75 p-4 pt-6 backdrop-blur-md md:items-center">
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] animate-in fade-in zoom-in-95 duration-300">

        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition hover:scale-105"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#0B1120] via-[#101A33] to-[#18294F] px-5 py-6 md:px-8 md:py-8">

          <p className="text-xs font-semibold uppercase tracking-[0.30em] text-[#D4AF37]">
            EstateOne Realtors
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Unlock Pre-Launch Prices
          </h2>

          <p className="mt-3 text-sm text-gray-300 md:text-base">
            Book your free site visit and download the latest cost sheet.
          </p>

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3 text-white">
              <Download size={18} className="text-[#D4AF37]" />
              <span className="text-sm md:text-base">
                Latest Cost Sheet PDF
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <MapPin size={18} className="text-[#D4AF37]" />
              <span className="text-sm md:text-base">
                Free Guided Site Visit
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span className="text-sm md:text-base">
                No Brokerage • Limited Pre-Launch Offer
              </span>
            </div>

          </div>

        </div>

        {/* Form */}
        <div className="bg-white p-5 md:p-8">
          <LeadForm />
        </div>

      </div>
    </div>
  );
}