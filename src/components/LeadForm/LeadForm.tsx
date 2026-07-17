"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

export default function LeadForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) return;

    const formElement = e.currentTarget;

    setLoading(true);

    const form = new FormData(formElement);

    const lead = {
      name: form.get("name"),
      phone: form.get("phone"),
      email: form.get("email"),
      configuration: form.get("configuration"),
      budget: form.get("budget"),
      purpose: form.get("purpose"),
      timeline: form.get("timeline"),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit."
        );
      }

      formElement.reset();

      /* ===========================
         TRACKING EVENTS
      =========================== */

      if (typeof window !== "undefined") {
        const w = window as any;

        // Meta Pixel
        if (typeof w.fbq === "function") {
          w.fbq("track", "Lead");
        }

        // GTM / GA4
        w.dataLayer = w.dataLayer || [];

        w.dataLayer.push({
          event: "generate_lead",
          lead_source: "Website",
          project: "Kolte Patil Vyana",
        });
      }

      router.push("/thank-you");

    } catch (error) {

      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div
      id="lead-form"
      className="rounded-[32px] border border-white/20 bg-white/95 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl"
    >

      <div className="mb-8">

        <p className="font-semibold uppercase tracking-[0.22em] text-[#C89B3C]">

          EXCLUSIVE LAUNCH PRICING

        </p>

        <h2 className="mt-2 font-heading text-4xl font-bold text-gray-900">

          Get Price Sheet &
          <br />
          Exclusive Offers

        </h2>

        <p className="mt-4 leading-7 text-gray-600">

          Submit your details to receive the latest
          price sheet, floor plans, payment plans and
          exclusive launch offers directly from our
          sales team.

        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >        <input
          required
          name="name"
          placeholder="Full Name"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        />

        <input
          required
          name="phone"
          type="tel"
          placeholder="Mobile Number"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address (Optional)"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        />

        <select
          required
          name="configuration"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        >
          <option value="">Select Configuration</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>3.5 BHK</option>
        </select>

        <select
          required
          name="budget"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        >
          <option value="">Select Budget</option>
          <option>₹80L - ₹1Cr</option>
          <option>₹1Cr - ₹1.25Cr</option>
          <option>₹1.25Cr+</option>
        </select>

        <select
          required
          name="purpose"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        >
          <option value="">Purchase Purpose</option>
          <option>Self Use</option>
          <option>Investment</option>
          <option>Both</option>
        </select>

        <select
          required
          name="timeline"
          className="h-14 w-full rounded-xl border border-gray-200 px-5 outline-none transition-all focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/20"
        >
          <option value="">Purchase Timeline</option>
          <option>Immediately</option>
          <option>Within 3 Months</option>
          <option>Within 6 Months</option>
          <option>Just Exploring</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="h-14 w-full rounded-xl bg-[#C89B3C] text-lg font-semibold text-black transition-all hover:bg-[#B58B34] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Unlock Launch Pricing"}
        </button>

        <div className="rounded-xl bg-[#FAF8F3] p-4 text-center text-sm text-gray-600">

          🔒 Your information is 100% secure.
          <br />
          No spam. No brokerage.
          <br />
          Instant response from our sales team.

        </div></form>

      <div className="mt-6 text-center text-xs leading-6 text-gray-500">
        By clicking the button, you agree to receive
        calls, WhatsApp messages and emails from
        EstateOne Realtors regarding this project.
      </div>

    </div>
  );
}