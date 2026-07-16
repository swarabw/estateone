"use client";

import Image from "next/image";
import { Building2, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  "30+ Years of Excellence",
  "50+ Landmark Projects",
  "28 Million+ Sq. Ft. Delivered",
  "Trusted by Thousands of Families",
];

export default function Builder() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            <div className="overflow-hidden rounded-[32px] shadow-2xl">

              <Image
                src="/images/builder.jpg"
                alt="Kolte Patil Developers"
                width={800}
                height={700}
                className="w-full h-auto object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 bg-yellow-500 rounded-3xl px-8 py-6 shadow-xl">

              <div className="flex items-center gap-4">

                <Award className="w-10 h-10 text-black" />

                <div>

                  <h3 className="text-3xl font-black">
                    30+
                  </h3>

                  <p className="font-semibold">
                    Years of Legacy
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <p className="uppercase tracking-[0.35em] text-yellow-600 font-semibold">
              DEVELOPER
            </p>

            <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight">
              Kolte Patil Developers
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              Kolte Patil Developers is one of India's most trusted
              real estate brands, known for premium residential
              communities, superior construction quality and timely
              delivery.
            </p>

            <div className="space-y-5 mt-10">

              {achievements.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-yellow-600 w-6 h-6" />

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <Button
              size="lg"
              className="mt-12 bg-yellow-500 hover:bg-yellow-600 text-black"
            >
              <Building2 className="mr-2 h-5 w-5" />
              Explore Project
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}