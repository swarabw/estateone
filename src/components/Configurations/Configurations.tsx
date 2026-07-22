"use client";

import { project } from "@/data/project";
import { Button } from "@/components/ui/button";
import { useLeadModal } from "@/components/lead/LeadModalContext";
import {
  Home,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Configurations() {
  const { openModal } = useLeadModal();
  return (
    <section
      id="configurations"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">

            CONFIGURATIONS

          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">

            Choose Your
            <br />

            Dream Residence

          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">

            Spacious residences designed with intelligent layouts,
            premium specifications and elegant finishes for
            comfortable modern living.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {project.configurations.map((config, index) => (

            <div
              key={config.type}
              className="group relative overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#C89B3C]/40 hover:shadow-2xl"
            >

              {index === 1 && (

                <div className="absolute right-6 top-6 z-20 rounded-full bg-[#C89B3C] px-5 py-2 text-xs font-bold uppercase tracking-widest text-black">

                  Most Popular

                </div>

              )}

              {/* Header */}

              <div className="bg-gradient-to-r from-[#101010] to-[#232323] p-10 text-white">

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C89B3C]">

                    <Home
                      className="text-black"
                      size={30}
                    />

                  </div>

                  <div>

                    <div>
  <h3 className="text-3xl font-bold text-white">
    {config.type}
  </h3>

  <p className="mt-2 text-lg font-medium text-[#C89B3C]">
    {config.type === "2 BHK"
      ? "Starting ₹85 Lakhs Onwards"
      : "Starting ₹1.15 Cr Onwards"}
  </p>
</div>

                  </div>

                </div>

              </div>

              {/* Body */}

              <div className="p-10">

                <div className="space-y-6">

                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">

                    <span className="text-gray-500">

                      Carpet Area

                    </span>

                    <span className="font-semibold text-gray-900">

                      {config.carpet}

                    </span>

                  </div>

                  <div className="flex items-center justify-between border-b border-gray-100 pb-5">

                    <span className="text-gray-500">

                      Starting Price

                    </span>

                    <span className="text-3xl font-bold text-[#C89B3C]">

                      {config.price}

                    </span>

                  </div>

                </div>

                {/* Features */}

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={18}
                      className="text-[#C89B3C]"
                    />

                    <span>

                      Premium Specifications

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={18}
                      className="text-[#C89B3C]"
                    />

                    <span>

                      Smart Space Planning

                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <CheckCircle2
                      size={18}
                      className="text-[#C89B3C]"
                    />

                    <span>

                      Exclusive Launch Pricing

                    </span>

                  </div>

                </div>

                {/* Buttons */}

                <div className="mt-10 grid grid-cols-2 gap-5">

                 <Button
  onClick={openModal}
  className="h-14 bg-[#C89B3C] font-medium text-black hover:bg-[#b98d2f]"
>
  Book Visit
</Button>

                  <Button
  onClick={openModal}
  variant="outline"
  className="h-14 border-[#C89B3C]/30 hover:bg-[#faf8f3]"
>
  <Sparkles size={18} className="mr-2" />
  Floor Plan
  <ArrowRight className="ml-2" size={16} />
</Button>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}