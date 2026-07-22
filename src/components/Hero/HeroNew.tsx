"use client";

import Image from "next/image";
import { MapPin, Download, ArrowRight } from "lucide-react";

import PremiumButton from "@/components/ui/PremiumButton";
import { useLeadModal } from "@/components/lead/LeadModalContext";
import { project } from "@/data/project";

export default function HeroNew() {
  const { openModal } = useLeadModal();

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Image */}

      <Image
        src="/images/hero.jpg"
        alt={project.name}
        fill
        priority
        quality={95}
        sizes="100vw"
        className="object-cover object-center scale-105"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/30" />

      {/* Premium Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70  via-[#050816]/45 to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Content */}

      <div className="relative z-20">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-36 sm:px-10 lg:px-16">

          <div className="max-w-2xl space-y-10">

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-xl">

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37] sm:text-sm">

                Exclusive Launch

              </span>

            </div>

            {/* Heading */}
<div className="mt-8 space-y-5">

  <h1 className="font-heading text-[2.8rem] leading-[1.05] font-medium tracking-[-0.03em] text-white sm:text-6xl xl:text-7xl">

    Kolte Patil Vyana

  </h1>

  <p className="font-heading text-xl font-normal text-white/85 sm:text-2xl md:text-3xl">

    Luxury Riverside Living

  </p>

  <div className="flex items-center gap-3">

    <div className="h-px w-12 bg-[#D4AF37]" />

    <p className="text-lg font-medium tracking-[0.12em] uppercase text-[#D4AF37]">

      Premium 2 & 3 Residences

    </p>

  </div>

</div>
            {/* Subtitle */}
<p className="mt-8 max-w-lg text-base leading-8 text-white/70 lg:text-lg">

Experience thoughtfully crafted riverside residences by
<span className="font-semibold text-white">
{" "}Kolte Patil Developers
</span>
designed with timeless architecture, expansive open spaces and world-class amenities on Sinhgad Road.

</p>

            {/* Price */}
            <div className="mt-12 h-px w-32 bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <div className="mt-12">

  <p className="text-xs uppercase tracking-[0.35em] text-white/50">

    Starting From

  </p>

  <h2 className="mt-3 text-5xl font-semibold tracking-tight text-[#D4AF37]">

    ₹85 Lakhs*

  </h2>

  <div className="mt-5 flex items-center gap-3 text-white/70">

    <MapPin
      className="text-[#D4AF37]"
      size={18}
    />

    <span>

      Sinhgad Road, Pune

    </span>

  </div>

</div>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <PremiumButton
                onClick={openModal}
                className="h-14 w-full sm:h-16 sm:w-auto"
              >

                <Download
                  className="mr-2"
                  size={18}
                />

                Download Brochure

              </PremiumButton>

              <PremiumButton
                variant="glass"
                onClick={openModal}
                className="h-14 w-full sm:h-16 sm:w-auto"
              >

                Book a Private Site Visit

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </PremiumButton>

            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/60">
    Crafted by Kolte Patil Developers
</p>
<div className="mt-8 flex flex-wrap gap-3">

            {/* PART 2 STARTS HERE */}

          </div>

        </div>

      </div>
      

 <div className="mt-8 mb-20 flex flex-wrap gap-3">

  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✓ RERA Approved
  </div>

  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✓ No Brokerage
  </div>

  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✓ Bank Loan Available
  </div>

  <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✓ Limited Pre-Launch Pricing
  </div>

</div>
</div>

    </section>
  );
}