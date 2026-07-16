"use client";

import {
  Dumbbell,
  Waves,
  Trees,
  ShieldCheck,
  Car,
  Building2,
  Gamepad2,
  Baby,
  HeartPulse,
  Landmark,
  Volleyball,
  Sparkles,
} from "lucide-react";

const amenities = [
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "Fully Equipped Gym",
    icon: Dumbbell,
  },
  {
    title: "Clubhouse",
    icon: Building2,
  },
  {
    title: "Jogging Track",
    icon: Trees,
  },
  {
    title: "Kids Play Area",
    icon: Baby,
  },
  {
    title: "Indoor Games",
    icon: Gamepad2,
  },
  {
    title: "Basketball Court",
    icon: Volleyball,
  },
  {
    title: "Yoga Deck",
    icon: HeartPulse,
  },
  {
    title: "Multipurpose Hall",
    icon: Landmark,
  },
  {
    title: "Visitor Parking",
    icon: Car,
  },
  {
    title: "24×7 Security",
    icon: ShieldCheck,
  },
  {
    title: "Landscaped Gardens",
    icon: Sparkles,
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-600 font-semibold">
            LIFESTYLE
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black">
            World-Class Amenities
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Designed to deliver a luxurious lifestyle with thoughtfully
            planned recreational spaces, wellness facilities and modern
            conveniences.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {amenities.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-[28px] bg-white border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-2xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">

                  <Icon className="w-8 h-8 text-black" />

                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  Premium lifestyle feature thoughtfully designed for
                  residents.
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}