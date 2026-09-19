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
    <section
      className="w-full py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin bg-[#083F42] text-white relative overflow-hidden scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      id="smart-booking"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0F5C5E]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A96E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col gap-10 sm:gap-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
          <span className="font-label-caps text-xs sm:text-[13px] text-[#C9A96E] font-bold tracking-[0.2em] uppercase">
            Chairside Concierge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold tracking-tight leading-tight">
            Ready for a healthier smile?
          </h2>
          <p className="text-base sm:text-lg text-[#C9A96E] font-display italic font-normal">
            Book your consultation with Haya&apos;s Dental Care.
          </p>
          <p className="text-xs sm:text-sm text-[#DDE5E2]/80 leading-relaxed max-w-lg mt-1">
            Choose your preferred slot below. Our clinical coordinator will confirm
            your appointment directly via WhatsApp or phone.
          </p>
        </div>

        {/* High-End Booking Form Card */}
        <div className="rounded-3xl bg-[#FFFFFF] text-[#1E2929] border border-[#DDE5E2] p-6 sm:p-10 md:p-12 shadow-soft-lg">
          <form className="flex flex-col gap-5 sm:gap-6" id="clinic-booking-form" onSubmit={handleBookingSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-name">
                  Patient Full Name *
                </label>
                <input
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F6F1] text-[#1E2929] border border-[#DDE5E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/20 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] placeholder:text-[#647070]/60 transition-all"
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
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-phone">
                  WhatsApp / Mobile Number *
                </label>
                <input
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F6F1] text-[#1E2929] border border-[#DDE5E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/20 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] placeholder:text-[#647070]/60 transition-all"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Treatment Selection */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-service">
                  Primary Dental Concern *
                </label>
                <select
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F6F1] text-[#1E2929] border border-[#DDE5E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/20 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] transition-all"
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
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-shift">
                  Preferred Shift &amp; Time *
                </label>
                <select
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F6F1] text-[#1E2929] border border-[#DDE5E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/20 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] transition-all"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]" htmlFor="book-date">
                  Preferred Appointment Date *
                </label>
                <input
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F6F1] text-[#1E2929] border border-[#DDE5E2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F5C5E]/20 focus:border-[#0F5C5E] text-xs sm:text-sm min-h-[48px] transition-all"
                  id="book-date"
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-[#083F42]">
                  Clinical Urgency Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`flex items-center justify-center p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                      formData.urgency === "Routine"
                        ? "bg-[#EEF6F5] text-[#0F5C5E] border-[#0F5C5E] ring-1 ring-[#0F5C5E]/30"
                        : "bg-[#F8F6F1] text-[#647070] border-[#DDE5E2] hover:border-[#0F5C5E]/40"
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
                    className={`flex items-center justify-center p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                      formData.urgency === "Mild Sensitivity"
                        ? "bg-[#F6F1E7] text-[#856124] border-[#C9A96E] ring-1 ring-[#C9A96E]/30"
                        : "bg-[#F8F6F1] text-[#647070] border-[#DDE5E2] hover:border-[#C9A96E]/40"
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
                    className={`flex items-center justify-center p-2.5 rounded-xl border cursor-pointer font-label-caps text-[10px] sm:text-[11px] font-bold text-center transition-all min-h-[48px] ${
                      formData.urgency === "Urgent Toothache"
                        ? "bg-red-50 text-red-700 border-red-500 ring-1 ring-red-500/30"
                        : "bg-[#F8F6F1] text-[#647070] border-[#DDE5E2] hover:border-red-400"
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
              <button
                className="flex-1 py-4 px-6 rounded-full btn-primary font-semibold text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 text-white min-h-[50px] shadow-soft"
                type="submit"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Book My Appointment →</span>
              </button>
              <button
                className="py-4 px-7 rounded-full bg-[#083F42] text-white hover:bg-[#0F5C5E] border border-[#083F42] font-semibold text-xs sm:text-sm transition-all min-h-[50px] shadow-xs"
                onClick={handleWebSubmit}
                type="button"
              >
                Send via Web
              </button>
            </div>

            {/* Direct Contact & Privacy Note */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#647070] border-t border-[#DDE5E2]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[18px]">call</span>
                <span>Immediate Assistance: <a href="tel:03035452839" className="text-[#083F42] font-bold hover:underline">0303-5452839</a></span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[16px]">lock</span>
                <span>Confidential medical history under strict PMDC ethics.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
