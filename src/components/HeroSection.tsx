"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [activeShift, setActiveShift] = useState<"morning" | "evening">("evening");

  return (
    <section className="relative w-full overflow-hidden bg-[#121417] text-white px-margin-mobile md:px-margin pt-8 pb-space-xl">
      {/* Neon Electric Blue Ambient Glows */}
      <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-[#1E6FFF]/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-[#1E6FFF]/15 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        {/* Left Column: Trust & Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
          {/* Trust Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1F24] shadow-[0_0_12px_rgba(30,111,255,0.2)] border border-[#1E6FFF]/30 backdrop-blur-md">
            <div className="flex items-center text-amber-400 text-[14px]">
              <span
                className="material-symbols-outlined text-[16px] text-amber-400 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-400 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-400 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-400 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-400 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <span className="font-label-caps text-label-caps text-[#FFFFFF] font-semibold tracking-wider">
              4.9/5.0 RATING · 180+ GOOGLE REVIEWS · ADIYALA RD, RAWALPINDI
            </span>
          </div>

          {/* Hero Headline with Neon Glow */}
          <h1 className="font-display-hero text-display-hero text-white tracking-tight leading-tight">
            Gentle, precise dental care for{" "}
            <span className="font-editorial-italic text-editorial-italic italic text-[#1E6FFF] text-neon-glow underline decoration-[#8FCBF2] decoration-wavy decoration-2">
              every smile
            </span>{" "}
            in your family.
          </h1>

          {/* Lede */}
          <p className="font-body-lg text-body-lg text-[#A9B1BA] max-w-2xl leading-relaxed">
            Led by{" "}
            <strong className="text-white font-semibold">
              Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)
            </strong>
            , we blend painless anesthesia protocols, Swiss clinical standards,
            and hospital-grade sterilization into a warm, serene boutique
            practice right here on Adiyala Road.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
            <Link
              className="btn-neon inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-label-ui text-label-ui font-semibold"
              href="#smart-booking"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_add_on
              </span>
              <span>Book an Appointment</span>
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#1B1F24] text-white border border-[#1E6FFF]/30 hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-colors font-label-ui text-label-ui"
              href="tel:03035452839"
            >
              <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">
                call
              </span>
              <span>Call 0303-5452839</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#1E6FFF]/15 text-[#8FCBF2] border border-[#1E6FFF]/40 hover:bg-[#1E6FFF] hover:text-white transition-all shadow-[0_0_15px_rgba(30,111,255,0.2)] font-label-ui text-label-ui"
              href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">
                chat
              </span>
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          {/* Social Proof Stack */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-space-md border-t border-[#1B1F24] w-full">
            <div className="flex -space-x-3 items-center">
              <img
                className="w-10 h-10 rounded-full border-2 border-[#121417] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8lBfaTX1eTwFX2ICLlgqKv9JkiKOKF8sOOZFFkQWauLCbtihsxGy-YQ_cbAhf8wb-vFOXD7VdPqQt423JO6p_CXGeRBIOt7fAl4IKH4dJYzOKSWlPgTRJ1Gc27YWdIA2StxU9PNLqvfRagSVFaVwQ1jzmLrqbr-Xqt_mvMJESA8wIFKpfgxJiY6WzctxHRcNtSfQ2btqbT23KrQinRZef6RZfcnrxXPHLwMjXnHyhqCPxl9txr31"
                alt="Satisfied Patient"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#121417] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcuG3xHhqruxz3ApZrX0hYClrEV8sD-MKcCysTNmrinqV2XOyNv_MxKlbBduyHSZMOrGnVjadJ8kpKOsVNZd5EpgNYjVhEW2G2vlhyRwC8Rrk0qwbBHfSveT7GU71-O5oFGj2LwvMv2OxiV9BpbK7kHfidm1O7eJYwILlg6AT7npOcj8fQ_jLA4jV62xcYXMB3yCJ3y3r5_j-OEduFIJEi1O-A7_YdJ6ovhPslhto5tAt7rvGongo"
                alt="Orthodontic Patient"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#121417] object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZtA4hPK9QbrVLhUbyhjryUlExSrL_QLeQLbflyCXImxS5UN5ZBv5Fx1CJrQhPwcOuxga8EtHiyCKT0UIdfZ1koUy_VcJaEfVjvKaSsCP-8clGq76McDVGxYaP7aMXK4gKXFtepEkLwR-jIVJ4M-rNe-LqTwVwOfjNKujryYHEcKN5t8XwRf26ufNqxe3xLYH1mo60FgBI8BkfEMa-ie9YcUJOMJ_2Vh5JUsWAu1Pp77XZ2FgOTIA"
                alt="Restorative Patient"
              />
              <div className="w-10 h-10 rounded-full bg-[#1E6FFF] text-white flex items-center justify-center font-label-caps text-[10px] font-bold shadow-[0_0_10px_rgba(30,111,255,0.5)]">
                2.5K+
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-ui text-label-ui font-semibold text-white">
                2,500+ Happy Smiles Restored
              </span>
              <span className="font-label-caps text-label-caps text-[#A9B1BA]">
                Across Rawalpindi, Askari &amp; Bahria Town
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-2 ml-auto">
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-[#8FCBF2] font-semibold bg-[#1B1F24] border border-[#1E6FFF]/30 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[13px] text-[#1E6FFF]">
                  shield
                </span>{" "}
                Zero Needle Shock
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-[#8FCBF2] font-semibold bg-[#1B1F24] border border-[#1E6FFF]/30 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[13px] text-[#1E6FFF]">
                  sanitizer
                </span>{" "}
                Class-B Autoclave
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Doctor Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl p-space-lg bg-[#1B1F24] backdrop-blur-xl shadow-[0_0_35px_rgba(30,111,255,0.2)] border border-[#1E6FFF]/30 flex flex-col gap-space-md relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#1E6FFF]/20 blur-2xl"></div>

            {/* Doctor Card Header */}
            <div className="flex items-center gap-space-md pb-space-sm border-b border-[#1E6FFF]/20">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(30,111,255,0.3)] flex-shrink-0 border-2 border-[#1E6FFF]/40">
                <img
                  alt="Dr. Aayisha Quddus BDS MIHS RDS C-Ortho"
                  className="w-full h-full object-cover"
                  src="/dr-aayisha-quddus.jpg"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-[#1E6FFF] border-2 border-[#1B1F24]"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="inline-flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-white font-bold truncate text-neon-glow">
                    Dr. Aayisha Quddus
                  </span>
                  <span
                    className="material-symbols-outlined text-[#1E6FFF] text-[18px]"
                    title="Verified PMDC Surgeon"
                  >
                    verified
                  </span>
                </div>
                <span className="font-label-ui text-label-ui text-[#A9B1BA]">
                  BDS, MIHS, RDS (Pak), C-Ortho
                </span>
                <span className="font-label-caps text-label-caps text-[#8FCBF2] font-semibold mt-0.5 tracking-wider">
                  PMDC NO. 10807-D · REG # 60691
                </span>
              </div>
            </div>

            {/* Interactive Shift Switcher */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-[#A9B1BA] tracking-wider">
                  TODAY&apos;S CLINICAL SCHEDULE
                </span>
                <span className="inline-flex items-center gap-1 font-label-caps text-[11px] text-[#1E6FFF] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FFF] animate-pulse"></span>
                  <span>Live Ops</span>
                </span>
              </div>

              {/* Tab Buttons */}
              <div className="grid grid-cols-2 p-1 rounded-xl bg-[#121417] border border-[#1E6FFF]/20 text-label-ui">
                <button
                  type="button"
                  onClick={() => setActiveShift("morning")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg font-semibold transition-all ${
                    activeShift === "morning"
                      ? "btn-neon shadow-sm text-white"
                      : "text-[#A9B1BA] hover:text-white"
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
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg font-semibold transition-all ${
                    activeShift === "evening"
                      ? "btn-neon shadow-sm text-white"
                      : "text-[#A9B1BA] hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    dark_mode
                  </span>
                  <span>Evening</span>
                </button>
              </div>

              {/* Shift Details Box */}
              <div className="p-3.5 rounded-xl bg-[#121417] border border-[#1E6FFF]/25 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-body-md font-medium text-white">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#1E6FFF]">
                      schedule
                    </span>
                    {activeShift === "morning"
                      ? "11:00 AM – 2:00 PM (Morning)"
                      : "3:00 PM – 9:30 PM (Evening Active)"}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-label-caps font-bold ${
                      activeShift === "morning"
                        ? "bg-[#1B1F24] text-[#A9B1BA] border border-[#1E6FFF]/20"
                        : "bg-[#1E6FFF]/20 text-[#8FCBF2] border border-[#1E6FFF]/40 shadow-[0_0_8px_rgba(30,111,255,0.3)]"
                    }`}
                  >
                    {activeShift === "morning" ? "MON - SAT" : "OPEN NOW"}
                  </span>
                </div>
                <div className="flex items-center justify-between font-label-caps text-[11px] text-[#A9B1BA]">
                  <span>Awami Plaza, Basement D</span>
                  <span className="text-[#8FCBF2] font-semibold">
                    {activeShift === "morning"
                      ? "Estimated wait: ~5 mins"
                      : "Current wait: ~8 mins"}
                  </span>
                </div>
              </div>
            </div>

            {/* Facility Amenities */}
            <div className="grid grid-cols-3 gap-2 py-1 text-center font-label-caps text-[11px] text-[#A9B1BA]">
              <div className="p-2 rounded-xl bg-[#121417] border border-[#1E6FFF]/15 flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[18px]">
                  local_parking
                </span>
                <span>Awami Plaza Parking</span>
              </div>
              <div className="p-2 rounded-xl bg-[#121417] border border-[#1E6FFF]/15 flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[18px]">
                  accessible
                </span>
                <span>Ramp &amp; Elevator</span>
              </div>
              <div className="p-2 rounded-xl bg-[#121417] border border-[#1E6FFF]/15 flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[18px]">
                  lock_reset
                </span>
                <span>Sealed Operatory</span>
              </div>
            </div>

            {/* Quick Reserve Button */}
            <Link
              className="btn-neon w-full py-3.5 rounded-xl font-label-ui text-label-ui font-semibold text-center flex items-center justify-center gap-2"
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
