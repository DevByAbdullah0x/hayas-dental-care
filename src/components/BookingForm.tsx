"use client";

import React, { useState, useEffect, FormEvent } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
    <section className="w-full py-14 sm:py-18 md:py-20 px-4 sm:px-6 md:px-margin bg-[#F0F5F4] border-b border-[#DDE5E2]" id="smart-booking">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] p-5 sm:p-8 md:p-10 shadow-soft flex flex-col gap-6 sm:gap-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F5C5E]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col gap-1 text-center max-w-xl mx-auto relative z-10">
          <span className="font-label-caps text-[10px] sm:text-[11px] text-[#0F5C5E] font-bold tracking-wider uppercase">
            CHAIRSIDE APPOINTMENT CONCIERGE
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#083F42] font-semibold tracking-tight mt-1">
            Reserve Your Dental Consultation
          </h2>
          <p className="font-body-md text-xs sm:text-sm md:text-base text-[#647070] mt-1 leading-relaxed">
            Submit your desired slot below. Our front-desk coordinator will immediately confirm your appointment via WhatsApp or telephone.
          </p>
        </div>

        {/* Booking Form */}
        <form className="flex flex-col gap-4 sm:gap-5 relative z-10" id="clinic-booking-form" onSubmit={handleBookingSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-name">
                Patient Full Name *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/30 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] placeholder:text-[#647070]/60"
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
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-phone">
                WhatsApp / Mobile Number *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/30 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] placeholder:text-[#647070]/60"
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
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-service">
                Primary Dental Concern *
              </label>
              <select
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/30 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px]"
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
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-shift">
                Preferred Shift &amp; Time *
              </label>
              <select
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/30 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px]"
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
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-date">
                Preferred Appointment Date *
              </label>
              <input
                className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/30 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px]"
                id="book-date"
                required
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]">
                Clinical Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                <label
                  className={`flex items-center justify-center p-2 sm:p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                    formData.urgency === "Routine"
                      ? "bg-[#F0F5F4] text-[#0F5C5E] border-[#0F5C5E] ring-2 ring-[#0F5C5E]/20"
                      : "bg-[#FFFFFF] text-[#647070] border-[#DDE5E2] hover:border-[#0F5C5E]/40"
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
                      ? "bg-[#C9A96E]/15 text-[#856124] border-[#C9A96E] ring-2 ring-[#C9A96E]/25"
                      : "bg-[#FFFFFF] text-[#647070] border-[#DDE5E2] hover:border-[#C9A96E]/40"
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
                      ? "bg-red-50 text-red-700 border-red-500 ring-2 ring-red-500/20"
                      : "bg-[#FFFFFF] text-[#647070] border-[#DDE5E2] hover:border-red-400"
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
              className="flex-1 py-3.5 px-4 rounded-full btn-primary font-label-ui text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-white min-h-[48px]"
              type="submit"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Book via WhatsApp (0303-5452839)</span>
            </button>
            <button
              className="py-3.5 px-6 rounded-full bg-[#083F42] text-white hover:bg-[#0F5C5E] border border-[#083F42] font-label-ui text-xs sm:text-sm font-semibold transition-colors min-h-[48px] shadow-sm"
              onClick={handleWebSubmit}
              type="button"
            >
              Send via Web
            </button>
          </div>

          {/* Privacy & Protection Assurance */}
          <div className="flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#647070] pt-1 text-center">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[16px] flex-shrink-0">lock</span>
            <span>Your personal details and medical history are strictly confidential under PMDC ethics.</span>
          </div>
        </form>
      </div>
    </section>
  );
}
