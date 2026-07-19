"use client";

import {
  ShieldCheck,
  Building2,
  Trees,
  Waves,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "RERA Approved",
    value: "100% Legal Project",
  },
  {
    icon: Building2,
    title: "Configurations",
    value: "2, 3 & 3.5 BHK",
  },
  {
    icon: Trees,
    title: "Township",
    value: "21 Acres",
  },
  {
    icon: Waves,
    title: "Lifestyle",
    value: "Riverside Living",
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-30 mt-8 md:-mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#C89B3C]/15 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 p-5 sm:gap-5 sm:p-8 transition-all duration-300 hover:bg-[#faf8f3] ${
                  index !== items.length - 1
                    ? "border-b border-gray-100 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C89B3C]/10 sm:h-16 sm:w-16">
                  <item.icon
                    size={26}
                    className="text-[#C89B3C] sm:h-[30px] sm:w-[30px]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">
                    {item.title}
                  </p>

                  <h3 className="mt-1 text-base font-bold leading-snug text-gray-900 sm:text-lg">
                    {item.value}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}