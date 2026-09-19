"use client";

import React, { useState, useEffect, FormEvent } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "General Consultation",
    shift: "Evening Shift (3:00 PM – 6:00 PM)",
    date: "",
    urgency: "Routine",
  });

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setFormData((prev) => ({ ...prev, date: `${yyyy}-${mm}-${dd}` }));
  }, []);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Assalam-o-Alaikum Dr. Aayisha Quddus,\n\nMy Name: ${formData.name}\nMobile: ${formData.phone}\nTreatment Requested: ${formData.service}\nPreferred Date: ${formData.date}\nShift: ${formData.shift}\nUrgency Level: ${formData.urgency}\n\nPlease confirm my appointment at Awami Plaza.`;
    window.open(`https://wa.me/923035452839?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleWebSubmit = () => {
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    alert(
      "Your reservation inquiry has been dispatched to Dr. Aayisha's operatory queue. Our clinical desk will call you shortly to confirm your exact chair time."
    );
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-space-xl px-4 sm:px-6 md:px-margin max-w-4xl mx-auto" id="smart-booking">
      <div className="rounded-3xl bg-surface-container-lowest border border-[#1E6FFF]/20 p-5 sm:p-8 md:p-space-xl shadow-xl flex flex-col gap-6 sm:gap-space-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1E6FFF]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-1 text-center max-w-xl mx-auto relative z-10">
          <span className="font-label-caps text-[10px] sm:text-[11px] text-[#1E6FFF] font-bold tracking-wider uppercase">
            CHAIRSIDE APPOINTMENT CONCIERGE
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold tracking-tight mt-1">
            Reserve Your Dental Consultation
          </h2>
          <p className="font-body-md text-xs sm:text-sm md:text-base text-on-surface-variant mt-1 leading-relaxed">
            Submit your desired slot below. Our front-desk coordinator will immediately confirm your appointment via WhatsApp or telephone.
          </p>
        </div>

        {/* Booking Form */}
        <form className="flex flex-col gap-4 sm:gap-5 relative z-10" id="clinic-booking-form" onSubmit={handleBookingSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary" htmlFor="book-name">
                Patient Full Name *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-surface-container-low text-on-surface border border-secondary/20 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] text-xs sm:text-sm min-h-[48px]"
                id="book-name"
                placeholder="e.g. Dr. Salman Khan"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary" htmlFor="book-phone">
                WhatsApp / Mobile Number *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-surface-container-low text-on-surface border border-secondary/20 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] text-xs sm:text-sm min-h-[48px]"
                id="book-phone"
                pattern="[0-9]{4}-[0-9]{7}|[0-9]{11}"
                placeholder="0300-1234567"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Treatment Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary" htmlFor="book-service">
                Primary Dental Concern *
              </label>
              <select
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-surface-container-low text-on-surface border border-secondary/20 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] text-xs sm:text-sm min-h-[48px]"
                id="book-service"
                required
                value={formData.service}
                onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
              >
                <option value="General Consultation">General Checkup &amp; Assessment</option>
                <option value="Severe Toothache / RCT">Severe Toothache / Root Canal (Urgent)</option>
                <option value="Scaling &amp; Polishing">Scaling &amp; Ultrasonic Polishing</option>
                <option value="Teeth Whitening">Laser Cold-Light Teeth Whitening</option>
                <option value="Dental Implants">Dental Implants Consultation</option>
                <option value="Braces &amp; Aligners">Braces or Clear Aligners</option>
                <option value="Dentures">Dentures &amp; Missing Teeth Prosthetics</option>
              </select>
            </div>

            {/* Preferred Shift */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary" htmlFor="book-shift">
                Preferred Shift &amp; Time *
              </label>
              <select
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-surface-container-low text-on-surface border border-secondary/20 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] text-xs sm:text-sm min-h-[48px]"
                id="book-shift"
                required
                value={formData.shift}
                onChange={(e) => setFormData((prev) => ({ ...prev, shift: e.target.value }))}
              >
                <option value="Evening Shift (3:00 PM – 6:00 PM)">Evening Shift (3:00 PM – 6:00 PM)</option>
                <option value="Evening Shift (6:00 PM – 9:30 PM)">Evening Shift (6:00 PM – 9:30 PM)</option>
                <option value="Morning Shift (11:00 AM – 2:00 PM)">Morning Shift (11:00 AM – 2:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Preferred Date & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary" htmlFor="book-date">
                Preferred Appointment Date *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-surface-container-low text-on-surface border border-secondary/20 focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] text-xs sm:text-sm min-h-[48px]"
                id="book-date"
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-primary">
                Clinical Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                <label
                  className={`flex items-center justify-center p-2 sm:p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                    formData.urgency === "Routine"
                      ? "bg-[#1E6FFF]/10 text-[#0F4FCC] border-[#1E6FFF] ring-2 ring-[#1E6FFF]/20"
                      : "bg-surface-container-low text-on-surface border-secondary/15"
                  }`}
                >
                  <input
                    className="sr-only"
                    name="urgency"
                    type="radio"
                    value="Routine"
                    checked={formData.urgency === "Routine"}
                    onChange={() => setFormData((prev) => ({ ...prev, urgency: "Routine" }))}
                  />
                  <span>Routine</span>
                </label>
                <label
                  className={`flex items-center justify-center p-2 sm:p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                    formData.urgency === "Mild Sensitivity"
                      ? "bg-[#8FCBF2]/25 text-[#002b66] border-[#1E6FFF]/50 ring-2 ring-[#8FCBF2]/30"
                      : "bg-surface-container-low text-on-surface border-secondary/15"
                  }`}
                >
                  <input
                    className="sr-only"
                    name="urgency"
                    type="radio"
                    value="Mild Sensitivity"
                    checked={formData.urgency === "Mild Sensitivity"}
                    onChange={() => setFormData((prev) => ({ ...prev, urgency: "Mild Sensitivity" }))}
                  />
                  <span>Sensitivity</span>
                </label>
                <label
                  className={`flex items-center justify-center p-2 sm:p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                    formData.urgency === "Urgent Toothache"
                      ? "bg-error-container text-on-error-container border-error ring-2 ring-error/30"
                      : "bg-error-container/40 text-on-error-container border-error/20"
                  }`}
                >
                  <input
                    className="sr-only"
                    name="urgency"
                    type="radio"
                    value="Urgent Toothache"
                    checked={formData.urgency === "Urgent Toothache"}
                    onChange={() => setFormData((prev) => ({ ...prev, urgency: "Urgent Toothache" }))}
                  />
                  <span>Toothache</span>
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons (min 48px height, stacked on mobile) */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              className="flex-1 py-3.5 px-4 rounded-full btn-neon font-label-ui text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md text-white min-h-[48px]"
              type="submit"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Book via WhatsApp (0303-5452839)</span>
            </button>
            <button
              className="py-3.5 px-6 rounded-full bg-[#121417] text-white hover:bg-[#1B1F24] border border-[#1E6FFF]/30 font-label-ui text-xs sm:text-sm font-semibold transition-colors min-h-[48px]"
              onClick={handleWebSubmit}
              type="button"
            >
              Send via Web
            </button>
          </div>

          {/* Privacy & Protection Assurance */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-on-surface-variant pt-1 text-center">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[16px] flex-shrink-0">lock</span>
            <span>Your personal details and medical history are strictly confidential under PMDC ethics.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
