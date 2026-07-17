"use client";

import { useCallback } from "react";

import { ArrowRight, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { project } from "@/data/project";

export default function CTA() {
  const scrollToForm = useCallback(() => {
  const form = document.getElementById("lead-form");

  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}, []);
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C8A54B20,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] border border-yellow-500/20 bg-white/5 backdrop-blur-xl p-12 lg:p-20">

          <div className="text-center">

            <p className="uppercase tracking-[0.4em] text-yellow-500 font-semibold">
              LIMITED PERIOD OFFER
            </p>

            <h2 className="mt-6 text-5xl lg:text-7xl font-black text-white leading-tight">

              Book Your Dream Home

              <br />

              Before Prices Increase

            </h2>

            <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-9">

              Schedule a free site visit with EstateOne Realtors and
              receive the latest price sheet, floor plans and exclusive
              launch offers.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

             <Button
  size="lg"
  onClick={scrollToForm}
  className="h-16 px-10 text-lg bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
>
  Book Free Site Visit

  <ArrowRight className="ml-3 h-5 w-5" />
</Button>
              <Button
  size="lg"
  onClick={scrollToForm}
  variant="secondary"
  className="h-16 px-10 text-lg"
>
  <Download className="mr-3 h-5 w-5" />

  Get Price Sheet
</Button>

            </div>

            <div className="mt-14 inline-flex items-center gap-4 rounded-full border border-yellow-500/20 bg-white/10 px-8 py-5">

              <Phone className="text-yellow-500 h-6 w-6" />

              <span className="text-white text-xl font-bold">

                {project.phone}

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}