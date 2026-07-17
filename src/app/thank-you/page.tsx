"use client";

import Link from "next/link";
import { CheckCircle2, Phone, Download } from "lucide-react";
import { project } from "@/data/project";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] flex items-center justify-center px-6">

      <div className="w-full max-w-2xl rounded-[36px] bg-white p-12 shadow-2xl text-center">

        <CheckCircle2
          size={80}
          className="mx-auto text-green-600"
        />

        <p className="mt-8 uppercase tracking-[0.3em] text-[#C89B3C] font-semibold">
          THANK YOU
        </p>

        <h1 className="mt-4 text-5xl font-heading font-bold text-gray-900">

          Your Enquiry
          <br />
          Has Been Received

        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-600">

          Thank you for your interest in
          <strong> Kolte Patil Vyana.</strong>

          <br /><br />

          Our relationship manager will contact you shortly with:

        </p>

        <div className="mt-10 rounded-2xl bg-[#faf8f3] p-8 text-left">

          <ul className="space-y-4 text-lg">

            <li>✅ Latest Price Sheet</li>

            <li>✅ Floor Plans</li>

            <li>✅ Payment Plan</li>

            <li>✅ Launch Offers</li>

            <li>✅ Free Site Visit</li>

          </ul>

        </div>

        <div className="mt-10 flex flex-col gap-5">

          <a
            href={`tel:${project.phone}`}
            className="h-14 rounded-xl bg-[#C89B3C] flex items-center justify-center font-bold text-black hover:bg-[#b78b2c]"
          >

            <Phone className="mr-3 h-5 w-5" />

            Call Now

          </a>

          <button
            className="h-14 rounded-xl border flex items-center justify-center font-semibold"
          >

            <Download className="mr-3 h-5 w-5" />

            Download Brochure

          </button>

          <Link
            href="/"
            className="text-gray-500 hover:text-black mt-2"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}