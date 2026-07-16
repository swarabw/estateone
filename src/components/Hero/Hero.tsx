"use client";

import Image from "next/image";
import { MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "@/components/LeadForm";
import { project } from "@/data/project";

const features = [
  "21 Acre Township",
  "50+ Lifestyle Amenities",
  "Riverside Living",
  "Premium Construction",
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
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="text-white">

            <div className="inline-flex items-center rounded-full bg-yellow-500 text-black px-5 py-2 font-semibold mb-8">
              NEW LAUNCH
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              {project.heroTitle}
            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9">
              {project.heroSubtitle}
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="text-4xl font-bold text-yellow-400">
                {project.heroPrice}
              </div>

            </div>

            <div className="flex items-center gap-3 mt-6 text-gray-200">

              <MapPin className="w-5 h-5 text-yellow-500" />

              {project.location}

            </div>

            <div className="flex items-center gap-2 mt-6">

              <Star className="fill-yellow-400 text-yellow-400" />

              <span className="font-semibold">
                4.9 Rating
              </span>

            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="text-yellow-500 w-5 h-5" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Book Site Visit
              </Button>

              <Button
                size="lg"
                variant="secondary"
              >
                Download Brochure
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lg:pl-10">

            <LeadForm />

          </div>

        </div>

      </div>

    </section>
  );
}