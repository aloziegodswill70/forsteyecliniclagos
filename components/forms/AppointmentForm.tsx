"use client";

import {
  User,
  Phone,
  Mail,
  Building2,
  CalendarDays,
  Clock,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

const WHATSAPP = "2348186992818";

export default function AppointmentForm() {
  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    const get = (name: string) =>
      (
        form.elements.namedItem(name) as HTMLInputElement
      )?.value || "";

    const message = encodeURIComponent(`
Hello FORST Eye Clinic,

I would like to book an appointment.

Full Name:
${get("fullName")}

Phone Number:
${get("phone")}

Email:
${get("email")}

Age:
${get("age")}

Service:
${get("service")}

Preferred Branch:
${get("branch")}

Preferred Date:
${get("date")}

Preferred Time:
${get("time")}

Additional Information:
${get("message")}
`);

    window.open(
      `https://wa.me/${WHATSAPP}?text=${message}`,
      "_blank"
    );
  }

  return (
    <div
      id="appointment-form"
      className="mt-20 overflow-hidden rounded-[36px] border border-neutral-200 bg-white p-8 shadow-xl lg:p-14"
    >
      <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
        Appointment Request Form
      </span>

      <h2 className="mt-6 text-4xl font-black text-neutral-900">
        Schedule Your Visit
      </h2>

      <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-600">
        Complete the form below. Clicking{" "}
        <strong>Book Appointment</strong> will open WhatsApp
        with your appointment details already filled in.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {/* Full Name */}

        <div className="relative">
          <User
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            name="fullName"
            required
            placeholder="Full Name"
            className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          />
        </div>

        {/* Phone */}

        <div className="relative">
          <Phone
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          />
        </div>

        {/* Email */}

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          />
        </div>

        {/* Age */}

        <input
          name="age"
          type="number"
          placeholder="Age"
          className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-primary"
        />

        {/* Service */}

        <div className="relative">
          <Stethoscope
            size={18}
            className="absolute left-5 top-5 text-neutral-400"
          />

          <select
            name="service"
            required
            className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          >
            <option value="">Select Eye Care Service</option>
            <option>Comprehensive Eye Examination</option>
            <option>Glaucoma Screening</option>
            <option>Cataract Consultation</option>
            <option>Dry Eye Clinic</option>
            <option>Low Vision Assessment</option>
            <option>Pediatric Eye Care</option>
            <option>Contact Lens Consultation</option>
            <option>Optical Services</option>
            <option>Emergency Eye Care</option>
          </select>
        </div>

        {/* Branch */}

        <div className="relative">
          <Building2
            size={18}
            className="absolute left-5 top-5 text-neutral-400"
          />

          <select
            name="branch"
            required
            className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          >
            <option value="">Preferred Branch</option>
            <option>Ogba</option>
            <option>Festac</option>
            <option>Surulere</option>
            <option>Agbara</option>
            <option>Ibeju-Lekki</option>
            <option>Magodo</option>
          </select>
        </div>

        {/* Date */}

        <div className="relative">
          <CalendarDays
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            type="date"
            name="date"
            required
            className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          />
        </div>

        {/* Time */}

        <div className="relative">
          <Clock
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
          />

          <input
            type="time"
            name="time"
            required
            className="w-full rounded-2xl border border-neutral-200 py-4 pl-14 pr-5 outline-none transition focus:border-primary"
          />
        </div>

        {/* Message */}

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us briefly about your eye concerns or reason for your visit..."
          className="rounded-2xl border border-neutral-200 px-5 py-4 outline-none transition focus:border-primary md:col-span-2"
        />

        {/* Submit */}

        <button
          type="submit"
          className="md:col-span-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-primary py-5 text-lg font-bold text-white transition hover:opacity-90"
        >
          <MessageCircle size={22} />
          Book Appointment via WhatsApp
        </button>
      </form>
    </div>
  );
}