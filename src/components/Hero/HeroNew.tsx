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

      <div className="absolute inset-0 bg-black/45" />

      {/* Premium Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/85 via-[#050816]/45 to-transparent" />

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Content */}

      <div className="relative z-20">

        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-28">

          <div className="max-w-3xl">

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-xl">

              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4AF37] sm:text-sm">

                Exclusive Launch

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">

              Premium 2, 3 & 3.5 BHK

              <br />

              <span className="text-[#D4AF37]">
on Sinhgad Road
              </span>

              <br />

              at {project.name}

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200">
Experience premium riverside living by{" "}
<span className="font-semibold text-white">
Kolte Patil Developers
</span>
with world-class amenities, seamless connectivity and luxurious lifestyle spaces.
</p>

            {/* Price */}

            <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center">

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">

                  Starting From

                </p>

                <h2 className="mt-3 text-4xl font-bold text-[#D4AF37] lg:text-5xl">

                  ₹85Lakhs*

                </h2>

              </div>

              <div className="hidden h-16 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-3">

                <MapPin
                  className="text-[#D4AF37]"
                  size={22}
                />

                <span className="text-base text-gray-200">

                  {project.location}

                </span>

              </div>

            </div>
            <div className="mt-6 flex flex-wrap gap-3">

  <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-300">
    No Brokerage
  </span>

  <span className="rounded-full bg-[#D4AF37]/20 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
    RERA Approved
  </span>

  <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-300">
    Limited Pre-Launch Pricing
  </span>

</div>

            {/* CTA */}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <PremiumButton
                onClick={openModal}
                className="w-full sm:w-auto"
              >

                <Download
                  className="mr-2"
                  size={18}
                />

                Download Price List

              </PremiumButton>

              <PremiumButton
                variant="glass"
                onClick={openModal}
                className="w-full sm:w-auto"
              >

                Book Free Site Visit

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </PremiumButton>

            </div>
            <p className="mt-5 flex items-center gap-2 text-sm text-gray-300">
  <span className="text-yellow-400">★★★★★</span>
  Trusted by 500+ Homebuyers across Pune
</p>

            {/* PART 2 STARTS HERE */}

          </div>

        </div>

      </div>
      <div className="mt-8 flex flex-wrap gap-3">

  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✅ RERA Approved
  </div>

  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✅ No Brokerage
  </div>

  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✅ Bank Loan Available
  </div>

  <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
    ✅ Limited Pre-Launch Pricing
  </div>

</div>

    </section>
  );
}