"use client";

import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F6F1] text-[#1E2929] px-4 sm:px-6 md:px-margin pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-20 md:pb-24 border-b border-[#DDE5E2]">
      {/* Subtle Warm Luxury Ambient Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#0F5C5E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#C9A96E]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10">
        {/* Left Column: Editorial Headline, Supporting Copy, CTAs, Trust Row */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[#0F5C5E] font-label-caps text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
            <span>Gentle</span>
            <span className="text-[#C9A96E]">•</span>
            <span>Precise</span>
            <span className="text-[#C9A96E]">•</span>
            <span>Personal</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] text-[#083F42] tracking-tight leading-[1.12]">
            Gentle, precise dental care for{" "}
            <span className="italic font-normal text-[#0F5C5E]">
              every smile
            </span>{" "}
            in your family.
          </h1>

          {/* Short Supporting Description */}
          <p className="text-sm sm:text-base md:text-lg text-[#647070] max-w-xl leading-relaxed">
            Led by{" "}
            <strong className="text-[#083F42] font-semibold">
              Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)
            </strong>
            , we blend painless anesthesia protocols, Swiss clinical standards,
            and hospital-grade sterilization into a warm, serene boutique
            practice on Adiyala Road, Rawalpindi.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <Link
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm text-white shadow-soft min-h-[48px] text-center"
              href="#smart-booking"
            >
              <span className="material-symbols-outlined text-[18px]">
                calendar_today
              </span>
              <span>Book an Appointment</span>
            </Link>

            <a
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-[#FFFFFF] hover:bg-[#EEF6F5] text-[#0F5C5E] border border-[#DDE5E2] hover:border-[#0F5C5E]/40 transition-all font-semibold text-xs sm:text-sm min-h-[48px] text-center shadow-xs"
              href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
              rel="noopener"
              target="_blank"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#0F5C5E]" />
              <span>WhatsApp Doctor</span>
            </a>
          </div>

          {/* Compact Trust Row using existing verified facts */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-[#647070] border-t border-[#DDE5E2] w-full max-w-xl">
            <div className="inline-flex items-center gap-1.5 font-medium text-[#083F42]">
              <span className="text-[#C9A96E] text-base leading-none">★</span>
              <span>
                <strong className="font-bold">4.9</strong> Google (180+ Reviews)
              </span>
            </div>

            <span className="text-[#DDE5E2] hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 font-medium text-[#083F42]">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[17px]">
                sentiment_satisfied
              </span>
              <span>
                <strong className="font-bold">2,500+</strong> Smiles Restored
              </span>
            </div>

            <span className="text-[#DDE5E2] hidden sm:inline">•</span>

            <div className="inline-flex items-center gap-1.5 font-medium text-[#083F42]">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[17px]">
                verified
              </span>
              <span>
                <strong className="font-bold">PMDC</strong> Verified # 10807-D
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Doctor Imagery with Soft Backdrop & Floating Trust Card */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full pt-4 lg:pt-0">
          {/* Organic / Soft Backdrop Accent */}
          <div className="absolute -inset-2 sm:-inset-4 bg-[#EEF6F5] rounded-[2.5rem] transform rotate-1 scale-95 sm:scale-100 pointer-events-none border border-[#DDE5E2]/80" />

          {/* Main Doctor Image Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden shadow-soft-lg border border-[#DDE5E2] bg-[#FFFFFF]">
            <img
              alt="Dr. Aayisha Quddus - Lead Dental Surgeon at Haya's Dental Care"
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
              src="/dr-aayisha-quddus.jpg"
            />

            {/* Floating Trust Card over Image */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#DDE5E2] shadow-soft flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF6F5] border border-[#0F5C5E]/20 flex items-center justify-center text-[#0F5C5E] flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  verified
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-bold text-[#0F5C5E] tracking-wider uppercase font-label-caps flex items-center gap-1">
                  <span>✓ PMDC Verified Surgeon</span>
                </div>
                <div className="font-headline-sm text-sm sm:text-base font-bold text-[#083F42] truncate leading-tight">
                  Dr. Aayisha Quddus
                </div>
                <div className="text-[11px] text-[#647070] font-medium leading-tight mt-0.5 truncate">
                  BDS · MIHS · RDS · C-Ortho
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
