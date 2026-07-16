"use client";

import {
  Building2,
  Trees,
  ShieldCheck,
  Waves,
  Dumbbell,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "21 Acre Township",
    desc: "Large integrated premium residential township.",
  },
  {
    icon: Trees,
    title: "70% Open Spaces",
    desc: "Green landscapes and beautifully planned gardens.",
  },
  {
    icon: Waves,
    title: "Riverside Living",
    desc: "Premium lifestyle with serene river views.",
  },
  {
    icon: Dumbbell,
    title: "50+ Amenities",
    desc: "Clubhouse, gym, swimming pool and much more.",
  },
  {
    icon: Trophy,
    title: "Premium Lifestyle",
    desc: "Luxury living crafted by Kolte Patil Developers.",
  },
  {
    icon: ShieldCheck,
    title: "RERA Approved",
    desc: "Transparent and legally compliant project.",
  },
];

export default function Highlights() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Project Highlights
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Why Choose Vyana?
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Experience premium architecture, world-class amenities,
            green open spaces and a luxurious lifestyle at one of
            Pune's fastest growing locations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 border"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-black" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}