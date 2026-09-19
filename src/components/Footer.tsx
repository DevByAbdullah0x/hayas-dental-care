import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#121417] text-white pt-12 sm:pt-16 pb-12 border-t border-[#1E6FFF]/20">
      <div className="w-full px-4 sm:px-6 md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-space-xl mb-10 sm:mb-12">
          {/* Column 1: Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Haya's Dental Care Logo"
                className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(30,111,255,0.4)]"
                src="/logo.png"
              />
              <span className="font-headline-sm text-lg sm:text-xl text-white font-bold">
                Haya&apos;s Dental Care
              </span>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-[#A9B1BA] max-w-sm leading-relaxed">
              A premier sanctuary for restorative aesthetics, precision oral surgery, and dental implantology under the expert clinical guidance of Dr. Aayisha Quddus.
            </p>
            <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[#1B1F24] border border-[#1E6FFF]/30 shadow-[0_0_15px_rgba(30,111,255,0.1)] w-fit">
              <span className="material-symbols-outlined text-[#1E6FFF] text-[26px]">verified</span>
              <div>
                <div className="font-label-caps text-[10px] text-[#8FCBF2] tracking-wider uppercase font-semibold">
                  PMDC Verified Surgeon
                </div>
                <div className="font-label-ui text-xs font-semibold text-white">
                  PMDC # 10807-D · Reg # 60691
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-title-md text-sm sm:text-base text-white font-semibold">
              Clinical Navigation
            </h4>
            <nav className="flex flex-col gap-1.5">
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#services-grid">
                Cosmetic Smile Design
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#implants">
                Dental Implants &amp; Surgery
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#calculator-section">
                Interactive Treatment Estimator
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#smile-gallery">
                Clinical Before &amp; Afters
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#why-us">
                Sterilization Protocols
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors py-1 min-h-[36px] flex items-center" href="#reviews-section">
                Patient Testimonials
              </a>
            </nav>
          </div>

          {/* Column 3: Hours */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-title-md text-sm sm:text-base text-white font-semibold">
              Operating Hours
            </h4>
            <div className="flex flex-col gap-2 font-body-md text-xs sm:text-sm text-[#A9B1BA]">
              <div>
                <span className="font-semibold text-white block">Mon – Sat:</span>
                <span>3:30 PM – 9:30 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Sunday:</span>
                <span className="text-[#A9B1BA]/70">Closed (Emergencies on call)</span>
              </div>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 font-label-caps text-[10px] text-[#8FCBF2]">
                  Evening Clinic Practice
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Emergency & Location */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-title-md text-sm sm:text-base text-white font-semibold">
              Emergency &amp; Location
            </h4>
            <div className="p-4 rounded-2xl bg-[#1B1F24] border border-[#1E6FFF]/30 shadow-[0_0_20px_rgba(30,111,255,0.15)] flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-[#8FCBF2] tracking-wider uppercase font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#1E6FFF]">emergency</span> Urgent Toothache Hotline
              </span>
              <a className="font-headline-sm text-lg sm:text-xl font-bold text-white hover:text-[#1E6FFF] transition-colors text-neon-glow" href="tel:03035452839">
                0303-5452839
              </a>
              <span className="font-label-ui text-xs text-[#A9B1BA]">
                Direct priority triage via WhatsApp or Call
              </span>
            </div>
            <div className="font-body-md text-xs text-[#A9B1BA] flex items-start gap-2 pt-1 leading-relaxed">
              <span className="material-symbols-outlined text-[18px] text-[#1E6FFF] flex-shrink-0 mt-0.5">location_on</span>
              <span>Basement D, Awami Plaza, Main Adiyala Road, Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-ui text-xs text-[#A9B1BA] border-t border-[#1B1F24] text-center sm:text-left">
          <p>© 2024 Haya&apos;s Dental Care. Directed by Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho).</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a className="hover:text-[#1E6FFF] transition-colors py-1" href="#">
              Sterilization &amp; Privacy
            </a>
            <a className="hover:text-[#1E6FFF] transition-colors py-1" href="#">
              Patient Guide
            </a>
            <a className="hover:text-[#1E6FFF] transition-colors py-1" href="#location-hours">
              Find Clinic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
