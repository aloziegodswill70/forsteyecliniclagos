import Link from "next/link";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
} from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="hidden border-b text-white lg:block"
      style={{
        background: "#FCA400",
        borderBottomColor: "#FCA400",
        boxShadow:
          "0 3px 18px rgba(252,164,0,.30), inset 0 -2px 0 rgba(255,255,255,.20)",
      }}
    >
      <div className="mx-auto flex h-11 w-full max-w-7xl items-center justify-between px-6 xl:px-10 2xl:px-14">

        {/* ================= LEFT ================= */}

        <div className="flex items-center gap-7 text-[13px] font-medium tracking-wide">

          {/* Phone */}

          <a
            href="tel:+2348186992818"
            className="group flex items-center gap-2 transition-all duration-300 hover:text-black"
          >
            <Phone
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              08186992818
            </span>
          </a>

          {/* Email */}

          <a
            href="mailto:firsteyeclinic@gmail.com"
            className="group flex items-center gap-2 transition-all duration-300 hover:text-black"
          >
            <Mail
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              forsteyeclinic@gmail.com
            </span>
          </a>

          {/* Working Hours */}

          <div className="flex items-center gap-2 text-white">
            <Clock3 size={14} />

            <span>
              Mon – Fri: 9:00 AM – 6:00 PM&nbsp;&nbsp; | &nbsp;&nbsp;Sat: 9:00 AM – 3:00 PM
            </span>
          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="flex items-center">

          {/* Head Office */}

          <Link
            href="https://maps.app.goo.gl/fWDwmcWg71EkZvAz5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[13px] font-medium transition-all duration-300 hover:text-black"
          >
            <MapPin
              size={14}
              className="transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              Head Office - Ogba
            </span>
          </Link>

        </div>

      </div>
    </div>
  );
}