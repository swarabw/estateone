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
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-500 font-semibold">
            LOCATION ADVANTAGE
          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black">
            Connected To Everything
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 leading-8">
            Strategically located on Sinhgad Road with excellent
            connectivity to schools, hospitals, IT parks,
            shopping malls and daily conveniences.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Map */}

          <div className="rounded-[32px] overflow-hidden shadow-2xl border border-slate-800">

            <iframe
  title="Kolte Patil Sales Office Vadgaon"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4715648019524!2d73.80137119999999!3d18.462287099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29503207d73ff%3A0xbcace0773986e884!2sKolte%20Patil%20Sales%20Office%20Vadgaon!5e0!3m2!1sen!2sin!4v1784460789164!5m2!1sen!2sin"
  className="w-full h-[620px]"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>

          </div>

          {/* Cards */}

          <div>

            <div className="space-y-6">

              {locations.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-yellow-500 transition duration-300"
                  >

                    <div className="flex justify-between items-center">

                      <div className="flex items-center gap-5">

                        <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center">

                          <Icon className="text-black w-7 h-7" />

                        </div>

                        <div>

                          <h3 className="text-xl font-semibold">

                            {item.title}

                          </h3>

                          <p className="text-gray-400 mt-1">

                            Nearby Landmark

                          </p>

                        </div>

                      </div>

                      <div className="flex items-center gap-2 text-yellow-500 font-bold">

                        <Clock3 className="w-5 h-5" />

                        {item.time}

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-10 rounded-3xl bg-yellow-500 text-black p-8">

              <div className="flex items-center gap-3">

                <MapPin className="w-7 h-7" />

                <h3 className="text-2xl font-black">
                  Prime Address
                </h3>

              </div>

              <p className="mt-5 leading-8 font-medium">
                Kolte Patil Vyana,
                Sinhgad Road,
                Pune,
                Maharashtra.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}