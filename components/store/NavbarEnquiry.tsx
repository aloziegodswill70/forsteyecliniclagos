"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/2348033435554?text=Hello%20FORST%20Eye%20Clinic.%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20Low%20Vision%20Devices.";

export default function NavbarEnquiry() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-white transition hover:opacity-90"
    >
      <MessageCircle size={18} />
      Enquire Now
    </a>
  );
}