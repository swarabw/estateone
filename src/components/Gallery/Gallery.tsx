"use client";

import Image from "next/image";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-600 font-semibold">
            PROJECT GALLERY
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black">
            Experience Luxury
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
            Explore thoughtfully designed residences, premium amenities,
            lush green spaces and modern architecture.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20">

          {images.map((image, index) => (

            <div
              key={index}
              className="group relative h-[340px] rounded-[30px] overflow-hidden shadow-xl"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="text-white">

                  <p className="text-lg font-semibold">
                    Premium View
                  </p>

                  <p className="text-sm text-gray-300">
                    Kolte Patil Vyana
                  </p>

                </div>

                <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center">

                  <Camera className="text-black w-5 h-5" />

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            View Complete Gallery

            <ArrowRight className="ml-2 w-5 h-5" />

          </Button>

        </div>

      </div>
    </section>
  );
}