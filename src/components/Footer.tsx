import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FacebookIcon from "@/components/FacebookIcon";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-[#083F42] text-white pt-16 sm:pt-20 pb-12 border-t border-[#0F5C5E]/40">
      <div className="w-full px-4 sm:px-6 md:px-margin max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Identity */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Haya's Dental Care Logo"
                className="h-10 w-auto object-contain"
                src="/logo.png"
              />
              <span className="font-display text-lg sm:text-xl text-white font-bold tracking-tight">
                Haya&apos;s Dental Care
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#DDE5E2]/80 max-w-sm leading-relaxed">
              A premier boutique sanctuary for restorative aesthetics, precision oral surgery, and dental implantology under the expert clinical guidance of Dr. Aayisha Quddus.
            </p>
            <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[#0F5C5E]/30 border border-[#C9A96E]/40 shadow-sm w-fit">
              <span className="material-symbols-outlined text-[#C9A96E] text-[26px]">verified</span>
              <div>
                <div className="font-label-caps text-[10px] text-[#C9A96E] tracking-wider uppercase font-bold">
                  PMDC Verified Surgeon
                </div>
                <div className="text-xs font-semibold text-white">
                  PMDC # 10807-D · Reg # 60691
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="font-label-caps text-[10px] text-[#C9A96E] tracking-wider uppercase font-bold">
                Follow &amp; Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/p/Hayas-Dental-Care-HDC-100063940721569/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Haya's Dental Care on Facebook"
                  className="w-9 h-9 rounded-xl bg-[#0F5C5E]/40 border border-[#0F5C5E] hover:border-[#C9A96E] hover:bg-[#0F5C5E] text-[#DDE5E2] hover:text-white flex items-center justify-center transition-all shadow-sm"
                  title="Facebook: Haya's Dental Care"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/hayasdentalcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Haya's Dental Care on Instagram"
                  className="w-9 h-9 rounded-xl bg-[#0F5C5E]/40 border border-[#0F5C5E] hover:border-[#C9A96E] hover:bg-[#0F5C5E] text-[#DDE5E2] hover:text-white flex items-center justify-center transition-all shadow-sm"
                  title="Instagram: @hayasdentalcare"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Haya's Dental Care on WhatsApp"
                  className="w-9 h-9 rounded-xl bg-[#0F5C5E]/40 border border-[#0F5C5E] hover:border-[#C9A96E] hover:bg-[#0F5C5E] text-[#DDE5E2] hover:text-white flex items-center justify-center transition-all shadow-sm"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-display text-sm sm:text-base text-white font-bold">
              Clinical Navigation
            </h4>
            <nav className="flex flex-col gap-1.5">
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#services-grid">
                Cosmetic Smile Design
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#implants">
                Dental Implants &amp; Surgery
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#calculator-section">
                Interactive Treatment Estimator
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#smile-gallery">
                Clinical Before &amp; Afters
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#why-us">
                Sterilization Protocols
              </a>
              <a className="font-body-md text-xs sm:text-sm text-[#DDE5E2]/80 hover:text-[#C9A96E] transition-colors py-1 min-h-[36px] flex items-center" href="#reviews-section">
                Patient Testimonials
              </a>
            </nav>
          </div>

          {/* Column 3: Hours */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <h4 className="font-title-md text-sm sm:text-base text-white font-semibold">
              Operating Hours
            </h4>
            <div className="flex flex-col gap-2 font-body-md text-xs sm:text-sm text-[#DDE5E2]/80">
              <div>
                <span className="font-semibold text-white block">Mon – Sat:</span>
                <span>3:30 PM – 9:30 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Sunday:</span>
                <span className="text-[#DDE5E2]/60">Closed (Emergencies on call)</span>
              </div>
              <div className="pt-1">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#0F5C5E]/40 border border-[#C9A96E]/40 font-label-caps text-[10px] text-[#C9A96E]">
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
            <div className="p-4 rounded-2xl bg-[#0F5C5E]/30 border border-[#C9A96E]/40 shadow-sm flex flex-col gap-1.5">
              <span className="font-label-caps text-[10px] text-[#C9A96E] tracking-wider uppercase font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-[#C9A96E]">emergency</span> Urgent Toothache Hotline
              </span>
              <a className="font-headline-sm text-lg sm:text-xl font-bold text-white hover:text-[#C9A96E] transition-colors" href="tel:03035452839">
                0303-5452839
              </a>
              <span className="font-label-ui text-xs text-[#DDE5E2]/80">
                Direct priority triage via WhatsApp or Call
              </span>
              <a
                className="inline-flex items-center gap-1.5 text-xs text-[#C9A96E] hover:text-white transition-colors font-semibold pt-1"
                href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20have%20an%20urgent%20dental%20inquiry."
                rel="noopener"
                target="_blank"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
            <div className="font-body-md text-xs text-[#DDE5E2]/80 flex items-start gap-2 pt-1 leading-relaxed">
              <span className="material-symbols-outlined text-[18px] text-[#C9A96E] flex-shrink-0 mt-0.5">location_on</span>
              <span>Basement D, Awami Plaza, Main Adiyala Road, Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-label-ui text-xs text-[#DDE5E2]/70 border-t border-[#0F5C5E]/40 text-center sm:text-left">
          <p>© 2024 Haya&apos;s Dental Care. Directed by Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho).</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a className="hover:text-[#C9A96E] transition-colors py-1" href="#why-us">
              Sterilization &amp; Protocols
            </a>
            <a className="hover:text-[#C9A96E] transition-colors py-1" href="#about">
              Clinical Leadership
            </a>
            <a className="hover:text-[#C9A96E] transition-colors py-1" href="#location-hours">
              Find Clinic
            </a>
            <span className="text-[#DDE5E2]/30 hidden sm:inline">|</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/Hayas-Dental-Care-HDC-100063940721569/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#C9A96E] transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/hayasdentalcare/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#C9A96E] transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
