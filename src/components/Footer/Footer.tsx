"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { project } from "@/data/project";

export default function Footer() {
  return (
    <footer className="bg-[#050816] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-heading font-semibold tracking-tight text-white">
              Estate<span className="text-[#D4AF37]">One</span>
            </h2>

            <p className="mt-7 max-w-sm text-lg leading-8 text-gray-300">
              Authorized Channel Partner for premium residential projects
              across Pune.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-2xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-7">

              <div className="flex items-start gap-4">

                <Phone
                  size={24}
                  className="mt-1 text-[#D4AF37]"
                />

                <div className="space-y-1">

                  <p className="text-lg text-white">
                    {project.phone}
                  </p>

                  <p className="text-lg text-gray-300">
                    {project.alternatePhone}
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Mail
                  size={24}
                  className="mt-1 text-[#D4AF37]"
                />

                <p className="text-lg text-gray-300 break-all">
                  {project.email}
                </p>

              </div>

              <div className="flex items-start gap-4">

                <MapPin
                  size={24}
                  className="mt-1 text-[#D4AF37]"
                />

                <p className="text-lg text-gray-300">
                  {project.location}
                </p>

              </div>

            </div>

          </div>

          {/* Project */}

          <div>

            <h3 className="mb-8 text-2xl font-semibold text-white">
              Project Information
            </h3>

            <div className="space-y-6 text-lg">

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Project :
                </span>{" "}
                {project.name}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Builder :
                </span>{" "}
                {project.builder}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  RERA :
                </span>{" "}
                {project.rera}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Possession :
                </span>{" "}
                {project.possession}
              </p>

            </div>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8">

          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EstateOne Realtors. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}