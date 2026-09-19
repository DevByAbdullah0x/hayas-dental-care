"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [activeShift, setActiveShift] = useState<"morning" | "evening">(
    "evening"
  );

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface px-margin-mobile md:px-margin pt-6 pb-space-xl">
      <div className="absolute -top-40 -left-20 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-surface-tint/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-lg">
          {/* Trust Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container shadow-sm border border-outline-variant/30 backdrop-blur-md">
            <div className="flex items-center text-tertiary-fixed-dim text-[14px]">
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-[16px] text-amber-500 fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface font-semibold tracking-wider">
              4.9/5.0 RATING · 180+ GOOGLE REVIEWS · ADIYALA RD, RAWALPINDI
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-tight">
            Gentle, precise dental care for{" "}
            <span className="font-editorial-italic text-editorial-italic italic text-secondary underline decoration-secondary-fixed-dim decoration-wavy decoration-2">
              every smile
            </span>{" "}
            in your family.
          </h1>

          {/* Lede */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Led by{" "}
            <strong className="text-primary font-semibold">
              Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)
            </strong>
            , we blend painless anesthesia protocols, Swiss clinical standards,
            and hospital-grade sterilization into a warm, serene boutique
            practice right here on Adiyala Road.
          </p>

          {/* CTA Cluster */}
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
            <Link
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-on-primary font-label-ui text-label-ui shadow-lg hover:shadow-secondary-container/40 hover:bg-primary-container transition-all"
              href="#smart-booking"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_add_on
              </span>
              <span>Book an Appointment</span>
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-surface-container-high text-primary font-label-ui text-label-ui hover:bg-surface-container-highest transition-colors"
              href="tel:03035452839"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              <span>Call 0303-5452839</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-label-ui text-label-ui hover:bg-secondary-fixed transition-colors shadow-sm"
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
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-space-md border-t border-surface-container-highest/60 w-full">
            <div className="flex -space-x-3 items-center">
              <img
                className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo8lBfaTX1eTwFX2ICLlgqKv9JkiKOKF8sOOZFFkQWauLCbtihsxGy-YQ_cbAhf8wb-vFOXD7VdPqQt423JO6p_CXGeRBIOt7fAl4IKH4dJYzOKSWlPgTRJ1Gc27YWdIA2StxU9PNLqvfRagSVFaVwQ1jzmLrqbr-Xqt_mvMJESA8wIFKpfgxJiY6WzctxHRcNtSfQ2btqbT23KrQinRZef6RZfcnrxXPHLwMjXnHyhqCPxl9txr31"
                alt="Patient 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEcuG3xHhqruxz3ApZrX0hYClrEV8sD-MKcCysTNmrinqV2XOyNv_MxKlbBduyHSZMOrGnVjadJ8kpKOsVNZd5EpgNYjVhEW2G2vlhyRwC8Rrk0qwbBHfSveT7GU71-O5oFGj2LwvMv2OxiV9BpbK7kHfidm1O7eJYwILlg6AT7npOcj8fQ_jLA4jV62xcYXMB3yCJ3y3r5_j-OEduFIJEi1O-A7_YdJ6ovhPslhto5tAt7rvGongo"
                alt="Patient 2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ZtA4hPK9QbrVLhUbyhjryUlExSrL_QLeQLbflyCXImxS5UN5ZBv5Fx1CJrQhPwcOuxga8EtHiyCKT0UIdfZ1koUy_VcJaEfVjvKaSsCP-8clGq76McDVGxYaP7aMXK4gKXFtepEkLwR-jIVJ4M-rNe-LqTwVwOfjNKujryYHEcKN5t8XwRf26ufNqxe3xLYH1mo60FgBI8BkfEMa-ie9YcUJOMJ_2Vh5JUsWAu1Pp77XZ2FgOTIA"
                alt="Patient 3"
              />
              <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-caps text-[10px] font-bold shadow-sm">
                2.5K+
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-label-ui text-label-ui font-semibold text-primary">
                2,500+ Happy Smiles Restored
              </span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                Across Rawalpindi, Askari &amp; Bahria Town
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-2 ml-auto">
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-secondary font-semibold bg-secondary-container/40 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[13px]">
                  shield
                </span>{" "}
                Zero Needle Shock
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-label-caps text-secondary font-semibold bg-secondary-container/40 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-[13px]">
                  sanitizer
                </span>{" "}
                Class-B Autoclave
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Doctor Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl p-space-lg bg-surface-container-lowest/80 backdrop-blur-xl shadow-xl border border-secondary/15 flex flex-col gap-space-md relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-secondary-fixed/30 blur-2xl"></div>

            {/* Doctor Card Header */}
            <div className="flex items-center gap-space-md pb-space-sm border-b border-surface-container-high">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-primary">
                <img
                  alt="Dr. Aayisha Quddus BDS MIHS RDS C-Ortho"
                  className="w-full h-full object-cover"
                  src="/dr-aayisha-quddus.jpg"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-secondary-fixed border-2 border-surface"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="inline-flex items-center gap-1.5">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold truncate">
                    Dr. Aayisha Quddus
                  </span>
                  <span
                    className="material-symbols-outlined text-secondary text-[18px]"
                    title="Verified PMDC Surgeon"
                  >
                    verified
                  </span>
                </div>
                <span className="font-label-ui text-label-ui text-on-surface-variant">
                  BDS, MIHS, RDS (Pak), C-Ortho
                </span>
                <span className="font-label-caps text-label-caps text-secondary font-semibold mt-0.5 tracking-wider">
                  PMDC NO. 10807-D · REG # 60691
                </span>
              </div>
            </div>

            {/* Interactive Shift Switcher */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">
                  TODAY&apos;S CLINICAL SCHEDULE
                </span>
                <span className="inline-flex items-center gap-1 font-label-caps text-[11px] text-secondary font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <span>Live Ops</span>
                </span>
              </div>

              {/* Tab Buttons */}
              <div className="grid grid-cols-2 p-1 rounded-xl bg-surface-container-high text-label-ui">
                <button
                  type="button"
                  onClick={() => setActiveShift("morning")}
                  className={`flex items-center justify-center gap-1.5 py-2 rounded-lg font-semibold transition-all ${
                    activeShift === "morning"
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-on-surface-variant"
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
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    dark_mode
                  </span>
                  <span>Evening</span>
                </button>
              </div>

              {/* Shift Details Box */}
              <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-body-md font-medium text-primary">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      schedule
                    </span>
                    {activeShift === "morning"
                      ? "11:00 AM – 2:00 PM (Morning)"
                      : "3:00 PM – 9:30 PM (Evening Active)"}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-label-caps font-bold ${
                      activeShift === "morning"
                        ? "bg-surface-container-highest text-on-surface-variant"
                        : "bg-secondary-container text-on-secondary-container"
                    }`}
                  >
                    {activeShift === "morning" ? "MON - SAT" : "OPEN NOW"}
                  </span>
                </div>
                <div className="flex items-center justify-between font-label-caps text-[11px] text-on-surface-variant">
                  <span>Awami Plaza, Basement D</span>
                  <span className="text-secondary font-semibold">
                    {activeShift === "morning"
                      ? "Estimated wait: ~5 mins"
                      : "Current wait: ~8 mins"}
                  </span>
                </div>
              </div>
            </div>

            {/* Facility Amenities */}
            <div className="grid grid-cols-3 gap-2 py-1 text-center font-label-caps text-[11px] text-on-surface-variant">
              <div className="p-2 rounded-xl bg-surface-container flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  local_parking
                </span>
                <span>Awami Plaza Parking</span>
              </div>
              <div className="p-2 rounded-xl bg-surface-container flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  accessible
                </span>
                <span>Ramp &amp; Elevator</span>
              </div>
              <div className="p-2 rounded-xl bg-surface-container flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  lock_reset
                </span>
                <span>Sealed Operatory</span>
              </div>
            </div>

            {/* Quick Reserve Button */}
            <Link
              className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-label-ui text-label-ui font-semibold text-center flex items-center justify-center gap-2 hover:bg-surface-tint shadow-md transition-all"
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
