"use client";

import {
  Building2,
  Trees,
  ShieldCheck,
  Waves,
  Dumbbell,
  Trophy,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "21 Acre Township",
    desc: "A thoughtfully planned integrated township with premium residences, landscaped avenues and modern urban infrastructure.",
  },
  {
    icon: Trees,
    title: "70% Open Spaces",
    desc: "Experience lush green landscapes, gardens and open recreational spaces designed for healthier everyday living.",
  },
  {
    icon: Waves,
    title: "Riverside Living",
    desc: "Wake up to peaceful river views and enjoy a refreshing environment away from the city's chaos.",
  },
  {
    icon: Dumbbell,
    title: "50+ Lifestyle Amenities",
    desc: "Clubhouse, swimming pool, gym, sports courts, children's play area and much more.",
  },
  {
    icon: Trophy,
    title: "Premium Lifestyle",
    desc: "Luxury homes crafted with superior specifications, elegant interiors and timeless architecture.",
  },
  {
    icon: ShieldCheck,
    title: "RERA Approved",
    desc: "Buy with confidence in a legally compliant project from a trusted developer.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#F8F8F6] py-28">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-[#C89B3C]">

            PROJECT HIGHLIGHTS

          </p>

          <h2 className="mt-5 font-heading text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">

            Designed For
            <br />

            Premium Living

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">

            Experience luxurious riverside living with world-class
            amenities, expansive green spaces and thoughtfully
            designed residences in one of Pune's most promising
            locations.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/30 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C89B3C]/10">

                <item.icon
                  size={30}
                  className="text-[#C89B3C]"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">

                {item.title}

              </h3>

              <p className="mt-5 leading-8 text-gray-600">

                {item.desc}

              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-[#C89B3C] opacity-0 transition-all duration-300 group-hover:opacity-100">

                Learn More

                <ArrowRight size={18} />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}