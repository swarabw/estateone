"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "What is the starting price?",
      a: "2 BHK starts from ₹85 Lakhs onwards.",
    },
    {
      q: "Is the project RERA approved?",
      a: "Yes. The project is RERA registered.",
    },
    {
      q: "How can I schedule a site visit?",
      a: "Fill the form and our team will contact you immediately.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600">
            Everything you need to know before booking your dream home.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-16"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
            >
              <AccordionTrigger>
                {faq.q}
              </AccordionTrigger>

              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}