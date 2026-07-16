"use client";

import { ShieldCheck, BadgeCheck, Building2, Award } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "RERA Approved",
    value: "100% Legal",
  },
  {
    icon: BadgeCheck,
    title: "Builder",
    value: "Kolte Patil",
  },
  {
    icon: Building2,
    title: "Configurations",
    value: "2, 3 & 3.5 BHK",
  },
  {
    icon: Award,
    title: "Possession",
    value: "Coming Soon",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-500 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-black" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  {item.title}
                </p>

                <h3 className="font-semibold text-lg">
                  {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}