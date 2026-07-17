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
    <section className="relative -mt-10 z-30">

      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl border border-[#C89B3C]/15 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {items.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-5 p-8 transition-all duration-300 hover:bg-[#faf8f3] ${
                  index !== items.length - 1
                    ? "border-b border-gray-100 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C89B3C]/10">

                  <item.icon
                    size={30}
                    className="text-[#C89B3C]"
                  />

                </div>

                <div>

                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">

                    {item.title}

                  </p>

                  <h3 className="mt-1 text-lg font-bold text-gray-900">

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