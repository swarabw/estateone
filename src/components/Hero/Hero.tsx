"use client";

import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  Download,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { project } from "@/data/project";

const features = [
  "21 Acre Township",
  "50+ Lifestyle Amenities",
  "Riverside Living",
  "Premium Clubhouse",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero.jpg"
        alt={project.name}
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div className="text-white">

            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 backdrop-blur-xl">

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">

                Exclusive Launch Pricing

              </span>

            </div>

            <h1 className="mt-8 font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">

              Premium Riverside
              <br />

              <span className="text-[#D4AF37]">

                Residences

              </span>

              <br />

              at {project.name}

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-200">

              Premium <strong>2, 3 & 3.5 BHK Homes</strong>
              <br />

              by {project.builder}

            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-gray-300">

                  Starting From

                </p>

                <h2 className="mt-2 text-5xl font-bold text-[#D4AF37]">

                  ₹80 Lakhs*

                </h2>

              </div>

              <div className="hidden h-16 w-px bg-white/20 lg:block" />

              <div className="flex items-center gap-3 text-lg text-gray-200">

                <MapPin
                  size={22}
                  className="text-[#D4AF37]"
                />

                <span>

                  {project.location}

                </span>

              </div>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              {features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                >

                  <CheckCircle2
                    className="text-[#D4AF37]"
                    size={20}
                  />

                  <span className="font-medium">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button
                size="lg"
                className="h-14 rounded-xl bg-[#D4AF37] px-8 text-black hover:bg-[#c69a2f]"
              >

                <Download
                  className="mr-2"
                  size={18}
                />

                Get Price Sheet

              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="h-14 rounded-xl border border-white/20 bg-white/10 px-8 text-white hover:bg-white/20"
              >

                Book Free Site Visit

                <ArrowRight
                  className="ml-2"
                  size={18}
                />

              </Button>

            </div>

          </div>

          {/* RIGHT START */}
                    <div className="relative">

            {/* Floating Badge */}

            <div className="absolute -top-6 left-1/2 z-30 -translate-x-1/2">

              <div className="rounded-full bg-[#D4AF37] px-6 py-3 shadow-2xl">

                <span className="text-sm font-bold uppercase tracking-wider text-black">

                  Exclusive Launch Offers

                </span>

              </div>

            </div>

            {/* Glass Card */}

            <div className="overflow-hidden rounded-[30px] border border-white/20 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">

              {/* Card Header */}

              <div className="border-b border-white/10 bg-black/20 px-8 py-8">

                <h2 className="font-heading text-3xl font-bold text-white">

                  Schedule Your Site Visit

                </h2>

                <p className="mt-3 leading-7 text-gray-300">

                  Get the latest price sheet, floor plans,
                  payment plans and exclusive launch offers.

                </p>

              </div>

              {/* Form */}

              <div className="p-8">

                <LeadForm />

              </div>

            </div>

            {/* Floating Bottom Card */}

            <div className="absolute -bottom-8 left-1/2 hidden w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl lg:flex lg:items-center lg:justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">

                  Premium Living

                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">

                  2, 3 & 3.5 BHK Residences

                </h3>

              </div>

              <div className="text-right">

                <p className="text-sm text-gray-300">

                  Starting From

                </p>

                <h3 className="text-3xl font-bold text-[#D4AF37]">

                  ₹80 Lakhs*

                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white via-white/40 to-transparent" />

    </section>
  );
}