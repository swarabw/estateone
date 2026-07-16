"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { project } from "@/data/project";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              Estate<span className="text-yellow-500">One</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Authorized Channel Partner for Premium Residential Projects
              across Pune.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <Phone className="text-yellow-500 mt-1" />

                <div>
                  <p>{project.phone}</p>
                  <p>{project.alternatePhone}</p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-yellow-500 mt-1" />

                <p>{project.email}</p>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-yellow-500 mt-1" />

                <p>{project.location}</p>

              </div>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Project Information
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                <strong>Project :</strong> {project.name}
              </p>

              <p>
                <strong>Builder :</strong> {project.builder}
              </p>

              <p>
                <strong>RERA :</strong> {project.rera}
              </p>

              <p>
                <strong>Possession :</strong> {project.possession}
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-gray-500 text-sm">

          © {new Date().getFullYear()} EstateOne Realtors. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}