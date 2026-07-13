import Link from "next/link";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="hidden border-b text-white lg:block"
      style={{
        background: "#FF3B1F",
        borderBottomColor: "#FF7A45",
        boxShadow:
          "0 3px 18px rgba(255,59,31,.35), inset 0 -2px 0 rgba(212,206,30,.45)",
      }}
    >
      <div className="mx-auto flex h-11 w-full max-w-7xl items-center justify-between px-6 xl:px-10 2xl:px-14">

        {/* Left */}

        <div className="flex items-center gap-7 text-[13px] font-medium tracking-wide">

          <a
            href="tel:+2348186992818"
            className="group flex items-center gap-2 transition-all duration-300 hover:text-[#D4CE1E]"
          >
            <Phone
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>08186992818</span>
          </a>

          <a
            href="mailto:firsteyeclinic@gmail.com"
            className="group flex items-center gap-2 transition-all duration-300 hover:text-[#D4CE1E]"
          >
            <Mail
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>firsteyeclinic@gmail.com</span>
          </a>

          <div className="flex items-center gap-2 text-white/95">
            <Clock3 size={14} />
            <span>Mon – Sat : 9:00 AM – 6:00 PM</span>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-6">

          <a
            href="https://maps.app.goo.gl/fWDwmcWg71EkZvAz5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[13px] font-medium transition-all duration-300 hover:text-[#D4CE1E]"
          >
            <MapPin
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span>Head Office - Ogba</span>
          </a>

          <div className="h-5 w-px bg-white/30" />

          <Link
            href="https://www.facebook.com/forsteyeclinic"
            target="_blank"
            className="transition-all duration-300 hover:scale-110 hover:text-[#D4CE1E]"
          >
            <FaFacebookF size={15} />
          </Link>

          <Link
            href="https://www.instagram.com/forsteyeclinic"
            target="_blank"
            className="transition-all duration-300 hover:scale-110 hover:text-[#D4CE1E]"
          >
            <FaInstagram size={16} />
          </Link>

          <Link
            href="https://www.tiktok.com/@forsteyeclinic"
            target="_blank"
            className="transition-all duration-300 hover:scale-110 hover:text-[#D4CE1E]"
          >
            <FaTiktok size={16} />
          </Link>

          <Link
            href="https://wa.me/2348186992818"
            target="_blank"
            className="rounded-full bg-[#25D366] p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <FaWhatsapp size={15} />
          </Link>

        </div>

      </div>
    </div>
  );
}