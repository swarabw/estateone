"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const lead = {
      name: form.get("name"),
      phone: form.get("phone"),
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
        throw new Error(result.message || "Failed to submit lead.");
      }

      alert("Thank You! Our Team Will Contact You Soon.");

      e.currentTarget.reset();

    } catch (error) {

      console.error(error);

      alert("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="rounded-[32px] border border-white/20 bg-white/95 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] p-8">

      <div className="mb-8">

        <p className="text-yellow-600 font-semibold uppercase tracking-widest">
          Enquire Now
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Book Free Site Visit
        </h2>

        <p className="text-gray-500 mt-3">
          Get Price Sheet, Floor Plans & Exclusive Launch Offers
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          required
          name="name"
          placeholder="Full Name"
          className="h-14 w-full rounded-xl border px-5 outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          required
          name="phone"
          type="tel"
          placeholder="Mobile Number"
          className="h-14 w-full rounded-xl border px-5 outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <select
          required
          name="configuration"
          className="h-14 w-full rounded-xl border px-5"
        >
          <option value="">Select Configuration</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>3.5 BHK</option>
        </select>

        <select
          required
          name="budget"
          className="h-14 w-full rounded-xl border px-5"
        >
          <option value="">Select Budget</option>
          <option>₹80L - ₹1Cr</option>
          <option>₹1Cr - ₹1.25Cr</option>
          <option>₹1.25Cr+</option>
        </select>

        <select
          required
          name="purpose"
          className="h-14 w-full rounded-xl border px-5"
        >
          <option value="">Purchase Purpose</option>
          <option>Self Use</option>
          <option>Investment</option>
          <option>Both</option>
        </select>

        <select
          required
          name="timeline"
          className="h-14 w-full rounded-xl border px-5"
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
  className="w-full h-14 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold"
>
  {loading ? "Submitting..." : "Get Best Price"}
</button>

      </form>

      <div className="mt-6 text-center text-xs text-gray-500 leading-6">
        By clicking the button, you agree to receive calls, WhatsApp
        messages and emails from EstateOne Realtors regarding this
        project.
      </div>

    </div>
  );
}