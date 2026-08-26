"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does FORST Eye Clinic provide?",
    answer:
      "FORST Eye Clinic provides comprehensive eye examinations, glaucoma care, cataract evaluation, dry eye care, pediatric eye care, low vision services, digital lenses and optical services.",
  },
  {
    question: "How often should I have an eye examination?",
    answer:
      "Regular eye examinations are important even when you have no obvious vision problems. The frequency depends on your age, eye health, medical history and risk factors. Our eye care professionals can recommend an appropriate examination schedule for you.",
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended to help us provide you with the best possible care. You can book an appointment online or contact FORST Eye Clinic to arrange a convenient time.",
  },
  {
    question: "Does FORST Eye Clinic accept HMO?",
    answer:
      "Yes. FORST Eye Clinic works with selected Health Maintenance Organizations (HMOs). HMO eligibility and covered services may vary depending on your health plan, so we recommend confirming your coverage before your visit.",
  },
  {
    question: "Do you provide glaucoma screening and management?",
    answer:
      "Yes. We provide glaucoma assessment and management, including eye pressure measurement, optic nerve evaluation and other appropriate tests to help detect and monitor glaucoma.",
  },
  {
    question: "Do you provide cataract care?",
    answer:
      "Yes. We assess patients with cataracts and provide appropriate eye care, monitoring and referral for surgical treatment when necessary.",
  },
  {
    question: "Do you provide eye care for children?",
    answer:
      "Yes. We provide pediatric eye care and vision assessments to help identify and manage vision problems that may affect children's visual development and learning.",
  },
  {
    question: "Do you provide prescription glasses and optical services?",
    answer:
      "Yes. Our optical services include prescription lenses, frames and other vision solutions. We also provide digital lens options for people who spend significant time using computers, phones and other digital devices.",
  },
  {
    question: "Can I visit FORST Eye Clinic if I have blurred vision or eye pain?",
    answer:
      "Yes. Symptoms such as blurred vision, eye pain, redness, headaches, excessive tearing or difficulty seeing at night should not be ignored. A comprehensive eye examination can help identify the possible cause and determine the appropriate care.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCA400]/20 bg-[#FCA400]/10 px-5 py-2 text-sm font-semibold text-[#FCA400]">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-neutral-900 md:text-5xl">
            Questions About
            <span className="block text-[#FCA400]">
              Your Eye Care
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-neutral-600">
            Find answers to some of the most common questions about our eye
            care services, appointments, HMO coverage and optical services.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mx-auto mt-12 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#FCA400]/40 shadow-md"
                    : "border-neutral-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-bold leading-6 text-neutral-900 sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#FCA400] text-white"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-neutral-600 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl bg-[#FCA400] px-6 py-10 text-center sm:px-10">

          <h3 className="text-2xl font-black text-white md:text-3xl">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90">
            Our team is available to help you with questions about your eye
            health, appointments, HMO coverage or optical services.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#FCA400] transition hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
            </a>

            <a
              href="/book-eye-appointment"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#FCA400]"
            >
              Book Appointment
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}