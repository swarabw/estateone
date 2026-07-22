"use client";

import { ArrowRight, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { project } from "@/data/project";
import { useLeadModal } from "@/components/lead/LeadModalContext";

export default function CTA() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-[#050816] py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D4AF3720,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="rounded-[42px] border border-white/10 bg-white/[0.03] p-12 backdrop-blur-xl lg:p-20">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]">
              LIMITED PERIOD OFFER
            </span>

            <h2 className="mt-8 font-heading text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Reserve Your Home
              <br />
              <span className="text-[#D4AF37]">
                Before Prices Increase
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
              Schedule a complimentary site visit with EstateOne Realtors
              and receive the latest price sheet, floor plans and exclusive
              pre-launch offers.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button
                size="lg"
                onClick={openModal}
                className="h-16 rounded-xl bg-[#D4AF37] px-10 text-lg font-semibold text-black hover:bg-[#C39B2D]"
              >
                Book Free Site Visit
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={openModal}
                className="h-16 rounded-xl border border-white/15 bg-white text-lg text-black hover:bg-gray-100"
              >
                <Download className="mr-3 h-5 w-5" />
                Get Price Sheet
              </Button>

            </div>

            <div className="mt-14 inline-flex items-center gap-4 rounded-full border border-[#D4AF37]/20 bg-white/5 px-8 py-5">

              <Phone className="h-6 w-6 text-[#D4AF37]" />

              <span className="text-xl font-semibold text-white">
                {project.phone}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}