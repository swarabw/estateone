"use client";

import {
  MapPin,
  School,
  Hospital,
  Train,
  ShoppingBag,
  Building2,
  Navigation,
  Clock3,
} from "lucide-react";

const locations = [
  {
    icon: School,
    title: "Delhi Public School",
    time: "8 Min",
  },
  {
    icon: Hospital,
    title: "Deenanath Mangeshkar Hospital",
    time: "12 Min",
  },
  {
    icon: ShoppingBag,
    title: "Phoenix Mall",
    time: "18 Min",
  },
  {
    icon: Train,
    title: "Metro Station",
    time: "10 Min",
  },
  {
    icon: Building2,
    title: "Hinjewadi IT Park",
    time: "30 Min",
  },
  {
    icon: Navigation,
    title: "Pune Railway Station",
    time: "35 Min",
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#050816] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-xs font-medium uppercase tracking-[0.35em] text-yellow-400">
            Location Advantage
          </span>

          <h2 className="mt-8 font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Connected To
            <br />
            <span className="text-yellow-400">
              Everything That Matters
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Perfectly positioned at{" "}
            <span className="font-semibold text-white">
              Kolte Patil Vyana
            </span>
            , offering seamless connectivity to schools,
            hospitals, IT hubs, shopping destinations and
            daily conveniences across Pune.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-14 lg:grid-cols-2">

          {/* Google Map */}

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

            <iframe
              title="Kolte Patil Sales Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4715648019524!2d73.80137119999999!3d18.462287099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29503207d73ff%3A0xbcace0773986e884!2sKolte%20Patil%20Sales%20Office%20Vadgaon!5e0!3m2!1sen!2sin!4v1784460789164!5m2!1sen!2sin"
              className="h-[620px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

          {/* Right Side */}
          <div>

            <div className="space-y-6">
                            {locations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:border-yellow-500/60 hover:bg-white/[0.07] hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-7 w-7 text-black" />
                        </div>

                        <div>
                          <h3 className="text-xl font-medium text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm tracking-wide text-gray-400">
                            Nearby Landmark
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">

                        <Clock3 className="h-4 w-4" />

                        {item.time}

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Prime Address */}

            <div className="mt-8 rounded-[30px] bg-gradient-to-r from-yellow-500 to-yellow-400 p-[1px]">

              <div className="rounded-[30px] bg-[#101726] p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500">
                    <MapPin className="h-7 w-7 text-black" />
                  </div>

                  <div>

                    <p className="text-sm uppercase tracking-[0.30em] text-yellow-400">
                      Prime Address
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Kolte Patil Vyana
                    </h3>

                  </div>

                </div>

                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Sinhgad Road,
                  <br />
                  Pune,
                  Maharashtra.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}