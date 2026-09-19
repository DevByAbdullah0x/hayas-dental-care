"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [activeShift, setActiveShift] = useState<"morning" | "evening">("evening");

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F6F1] text-[#1E2929] px-4 sm:px-6 md:px-margin pt-8 sm:pt-10 pb-12 sm:pb-16 md:pb-space-xl border-b border-[#DDE5E2]">
      {/* Subtle Warm Luxury Ambient Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#0F5C5E]/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#C9A96E]/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-space-xl items-center relative z-10">
        {/* Left Column: Trust & Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6">
          {/* Trust Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(8,63,66,0.06)] border border-[#DDE5E2] max-w-full">
            <div className="flex items-center text-[#C9A96E] text-[13px] sm:text-[14px] flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[15px] sm:text-[16px] text-[#C9A96E] fill-current"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              ))}
            </div>
            <span className="font-label-caps text-[10px] sm:text-[11px] text-[#083F42] font-bold tracking-wider truncate">
              4.9/5.0 RATING · 180+ VERIFIED PATIENT REVIEWS
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] text-[#083F42] tracking-tight leading-[1.15]">
            Gentle, precise dental care for{" "}
            <span className="font-editorial-italic italic text-[#0F5C5E] underline decoration-[#C9A96E] decoration-wavy decoration-2">
              every smile
            </span>{" "}
            in your family.
          </h1>

          {/* Lede Body Text */}
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#647070] max-w-2xl leading-relaxed">
            Led by{" "}
            <strong className="text-[#083F42] font-semibold">
              Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)
            </strong>
            , we blend painless anesthesia protocols, Swiss clinical standards,
            and hospital-grade sterilization into a warm, serene boutique
            practice right here on Adiyala Road, Rawalpindi.
          </p>

          {/* CTA Button Cluster */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
            <Link
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-label-ui text-sm font-semibold text-white min-h-[48px] text-center shadow-md"
              href="#smart-booking"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_add_on
              </span>
              <span>Book an Appointment</span>
            </Link>

            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFFFF] text-[#083F42] border border-[#DDE5E2] hover:border-[#0F5C5E] hover:text-[#0F5C5E] transition-colors font-label-ui text-sm min-h-[48px] text-center shadow-sm font-medium"
              href="tel:03035452839"
            >
              <span className="material-symbols-outlined text-[18px] text-[#0F5C5E]">
                call
              </span>
              <span>Call 0303-5452839</span>
            </a>

            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#F0F5F4] text-[#0F5C5E] border border-[#0F5C5E]/30 hover:bg-[#E2ECE9] transition-all font-label-ui text-sm min-h-[48px] text-center font-medium"
              href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px] text-[#0F5C5E]">
                chat
              </span>
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          {/* Social Proof Stack */}
          <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 border-t border-[#DDE5E2] w-full">
            <div className="flex -space-x-2.5 items-center flex-shrink-0">
              <img
                className="w-9 h-9 rounded-full border-2 border-[#FFFFFF] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8lBfaTX1eTwFX2ICLlgqKv9JkiKOKF8sOOZFFkQWauLCbtihsxGy-YQ_cbAhf8wb-vFOXD7VdPqQt423JO6p_CXGeRBIOt7fAl4IKH4dJYzOKSWlPgTRJ1Gc27YWdIA2StxU9PNLqvfRagSVFaVwQ1jzmLrqbr-Xqt_mvMJESA8wIFKpfgxJiY6WzctxHRcNtSfQ2btqbT23KrQinRZef6RZfcnrxXPHLwMjXnHyhqCPxl9txr31"
                alt="Satisfied Patient"
              />
              <img
                className="w-9 h-9 rounded-full border-2 border-[#FFFFFF] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcuG3xHhqruxz3ApZrX0hYClrEV8sD-MKcCysTNmrinqV2XOyNv_MxKlbBduyHSZMOrGnVjadJ8kpKOsVNZd5EpgNYjVhEW2G2vlhyRwC8Rrk0qwbBHfSveT7GU71-O5oFGj2LwvMv2OxiV9BpbK7kHfidm1O7eJYwILlg6AT7npOcj8fQ_jLA4jV62xcYXMB3yCJ3y3r5_j-OEduFIJEi1O-A7_YdJ6ovhPslhto5tAt7rvGongo"
                alt="Orthodontic Patient"
              />
              <img
                className="w-9 h-9 rounded-full border-2 border-[#FFFFFF] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZtA4hPK9QbrVLhUbyhjryUlExSrL_QLeQLbflyCXImxS5UN5ZBv5Fx1CJrQhPwcOuxga8EtHiyCKT0UIdfZ1koUy_VcJaEfVjvKaSsCP-8clGq76McDVGxYaP7aMXK4gKXFtepEkLwR-jIVJ4M-rNe-LqTwVwOfjNKujryYHEcKN5t8XwRf26ufNqxe3xLYH1mo60FgBI8BkfEMa-ie9YcUJOMJ_2Vh5JUsWAu1Pp77XZ2FgOTIA"
                alt="Restorative Patient"
              />
              <div className="w-9 h-9 rounded-full bg-[#0F5C5E] text-white flex items-center justify-center font-label-caps text-[10px] font-bold shadow-sm">
                2.5K+
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-label-ui text-xs sm:text-sm font-semibold text-[#083F42]">
                2,500+ Happy Smiles Restored
              </span>
              <span className="font-label-caps text-[10px] sm:text-[11px] text-[#647070]">
                Across Rawalpindi, Askari &amp; Bahria Town
              </span>
            </div>

            <div className="hidden xl:flex items-center gap-2 ml-auto">
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-[#0F5C5E] font-semibold bg-[#FFFFFF] border border-[#DDE5E2] px-2.5 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[13px] text-[#0F5C5E]">
                  shield
                </span>{" "}
                Zero Needle Shock
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-[#0F5C5E] font-semibold bg-[#FFFFFF] border border-[#DDE5E2] px-2.5 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[13px] text-[#0F5C5E]">
                  sanitizer
                </span>{" "}
                Class-B Autoclave
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Doctor Card & Live Shift Switcher */}
        <div className="lg:col-span-5 relative w-full">
          <div className="rounded-2xl p-4 sm:p-6 bg-[#FFFFFF] shadow-soft-lg border border-[#DDE5E2] flex flex-col gap-4 relative overflow-hidden">
            {/* Subtle card highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#0F5C5E]/5 blur-2xl pointer-events-none"></div>

            {/* Doctor Card Header */}
            <div className="flex items-center gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-[#DDE5E2]">
              <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl overflow-hidden shadow-sm flex-shrink-0 border-2 border-[#0F5C5E]/30">
                <img
                  alt="Dr. Aayisha Quddus BDS MIHS RDS C-Ortho"
                  className="w-full h-full object-cover"
                  src="/dr-aayisha-quddus.jpg"
                />
                <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#0F5C5E] border-2 border-white"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="inline-flex items-center gap-1.5">
                  <span className="font-headline-sm text-base sm:text-lg text-[#083F42] font-bold truncate">
                    Dr. Aayisha Quddus
                  </span>
                  <span
                    className="material-symbols-outlined text-[#0F5C5E] text-[18px] flex-shrink-0"
                    title="Verified PMDC Surgeon"
                  >
                    verified
                  </span>
                </div>
                <span className="font-label-ui text-xs text-[#647070] truncate">
                  BDS, MIHS, RDS (Pak), C-Ortho
                </span>
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-semibold mt-0.5 tracking-wider">
                  PMDC NO. 10807-D · REG # 60691
                </span>
              </div>
            </div>

            {/* Interactive Shift Switcher */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#647070] tracking-wider font-semibold">
                  TODAY&apos;S CLINICAL SCHEDULE
                </span>
                <span className="inline-flex items-center gap-1 font-label-caps text-[11px] text-[#0F5C5E] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse"></span>
                  <span>Live Operations</span>
                </span>
              </div>

              {/* Tab Buttons (min 44px touch height) */}
              <div className="grid grid-cols-2 p-1 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-xs">
                <button
                  type="button"
                  onClick={() => setActiveShift("morning")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold transition-all min-h-[44px] ${
                    activeShift === "morning"
                      ? "btn-primary shadow-sm text-white"
                      : "text-[#647070] hover:text-[#083F42]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    light_mode
                  </span>
                  <span>Morning</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShift("evening")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold transition-all min-h-[44px] ${
                    activeShift === "evening"
                      ? "btn-primary shadow-sm text-white"
                      : "text-[#647070] hover:text-[#083F42]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    dark_mode
                  </span>
                  <span>Evening</span>
                </button>
              </div>

              {/* Shift Details Box */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#F0F5F4] border border-[#DDE5E2] flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium text-[#083F42] gap-1.5">
                  <span className="flex items-center gap-1.5 min-w-0">
                    <span className="material-symbols-outlined text-[16px] text-[#0F5C5E] flex-shrink-0">
                      schedule
                    </span>
                    <span className="truncate font-semibold">
                      {activeShift === "morning"
                        ? "11:00 AM – 2:00 PM (Morning)"
                        : "3:00 PM – 9:30 PM (Evening Active)"}
                    </span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-label-caps font-bold whitespace-nowrap flex-shrink-0 ${
                      activeShift === "morning"
                        ? "bg-[#FFFFFF] text-[#647070] border border-[#DDE5E2]"
                        : "bg-[#0F5C5E] text-white shadow-xs"
                    }`}
                  >
                    {activeShift === "morning" ? "MON - SAT" : "OPEN NOW"}
                  </span>
                </div>
                <div className="flex items-center justify-between font-label-caps text-[10px] sm:text-[11px] text-[#647070]">
                  <span>Awami Plaza, Basement D</span>
                  <span className="text-[#0F5C5E] font-semibold">
                    {activeShift === "morning"
                      ? "Wait: ~5m"
                      : "Wait: ~8m"}
                  </span>
                </div>
              </div>
            </div>

            {/* Facility Amenities */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-1 text-center font-label-caps text-[9px] sm:text-[10px] md:text-[11px] text-[#647070]">
              <div className="p-2 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col items-center gap-1 min-w-0">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[18px]">
                  local_parking
                </span>
                <span className="truncate w-full font-medium">Plaza Parking</span>
              </div>
              <div className="p-2 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col items-center gap-1 min-w-0">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[18px]">
                  accessible
                </span>
                <span className="truncate w-full font-medium">Ramp &amp; Lift</span>
              </div>
              <div className="p-2 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col items-center gap-1 min-w-0">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[18px]">
                  lock_reset
                </span>
                <span className="truncate w-full font-medium">Sterile Operatory</span>
              </div>
            </div>

            {/* Quick Reserve Button (min 48px height) */}
            <Link
              className="btn-primary w-full py-3.5 rounded-xl font-label-ui text-sm font-semibold text-center flex items-center justify-center gap-2 text-white min-h-[48px] shadow-sm"
              href="#smart-booking"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_today
              </span>
              <span>Reserve Chairside Slot Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
