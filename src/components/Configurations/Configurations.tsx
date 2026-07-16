"use client";

import { project } from "@/data/project";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function Configurations() {
  return (
    <section
      id="configurations"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold">
            CONFIGURATIONS
          </p>

          <h2 className="text-5xl lg:text-6xl font-black mt-5">
            Choose Your Dream Home
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-8">
            Spacious residences crafted with premium finishes,
            intelligent layouts and luxurious interiors.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {project.configurations.map((config) => (

            <div
              key={config.type}
              className="rounded-[32px] border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden"
            >

              <div className="bg-slate-900 text-white p-10">

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center">

                      <Home className="text-black" />

                    </div>

                    <div>

                      <h3 className="text-3xl font-bold">

                        {config.type}

                      </h3>

                      <p className="text-gray-300 mt-1">

                        Premium Residence

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="p-10">

                <div className="space-y-8">

                  <div className="flex justify-between">

                    <span className="text-gray-500">

                      Carpet Area

                    </span>

                    <span className="font-semibold">

                      {config.carpet}

                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">

                      Starting Price

                    </span>

                    <span className="text-2xl font-bold text-yellow-600">

                      {config.price}

                    </span>

                  </div>

                </div>

                <div className="grid grid-cols-2 gap-5 mt-10">

                  <Button
                    className="h-14 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  >
                    Book Visit
                  </Button>

                  <Button
                    variant="outline"
                    className="h-14"
                  >
                    Floor Plan

                    <ArrowRight className="ml-2 w-4 h-4" />

                  </Button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}