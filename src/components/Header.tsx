"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services-grid", label: "Services" },
    { href: "#implants", label: "Implants" },
    { href: "#calculator-section", label: "Calculator" },
    { href: "#smile-gallery", label: "Gallery" },
    { href: "#why-us", label: "Why Us" },
    { href: "#reviews-section", label: "Reviews" },
    { href: "#location-hours", label: "Location" },
  ];

  return (
    <header className="w-full bg-[#121417]/95 backdrop-blur-xl border-b border-[#1E6FFF]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)] relative z-50">
      <div className="h-16 sm:h-20 w-full px-4 sm:px-6 max-w-7xl mx-auto flex items-center justify-between gap-2 lg:gap-3 xl:gap-4">
        {/* Brand Identity */}
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group min-w-0"
          onClick={closeMenu}
        >
          <img
            alt="Haya's Dental Care Logo"
            className="h-8 sm:h-9 lg:h-9 xl:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(30,111,255,0.5)] flex-shrink-0"
            src="/logo.png"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-sm sm:text-base lg:text-base xl:text-lg text-white font-semibold tracking-tight group-hover:text-[#8FCBF2] transition-colors leading-tight whitespace-nowrap">
              Haya&apos;s Dental Care
            </span>
            <span className="font-label-caps text-[9px] text-[#A9B1BA] tracking-wider hidden xl:block truncate">
              EST. 2019 · RAWALPINDI · DR. AAYISHA QUDDUS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (>= 1024px / lg) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-[11px] xl:text-xs px-1.5 xl:px-2 py-1.5 rounded-lg hover:bg-white/5 whitespace-nowrap"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-2.5 flex-shrink-0">
          {/* Shift status badge: only on ultra-wide >= 1440px to never crowd buttons */}
          <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-[#8FCBF2] font-label-caps text-[10px] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FFF] animate-pulse"></span>
            <span>Evening Shift Active</span>
          </div>

          {/* Call button: icon-only on mobile < 640px, full pill on >= 640px */}
          <a
            className="inline-flex items-center justify-center gap-1.5 px-2.5 xl:px-3 py-1.5 sm:py-2 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-white font-label-ui text-xs hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-colors min-h-[40px] min-w-[40px]"
            href="tel:03035452839"
            aria-label="Call clinic at 0303-5452839"
          >
            <span className="material-symbols-outlined text-[16px] text-[#1E6FFF]">call</span>
            <span className="hidden md:inline whitespace-nowrap text-[11px] xl:text-xs">0303-5452839</span>
          </a>

          {/* Book Appointment CTA: visible on desktop >= 1024px */}
          <a
            className="hidden lg:inline-flex btn-neon items-center justify-center px-3.5 xl:px-4.5 py-2 sm:py-2.5 rounded-full font-label-ui text-xs font-semibold text-white min-h-[40px] whitespace-nowrap flex-shrink-0 shadow-[0_0_15px_rgba(30,111,255,0.4)]"
            href="#smart-booking"
            onClick={closeMenu}
          >
            Book Appointment
          </a>

          {/* Hamburger Menu Button (visible on < 1024px / below lg) */}
          <button
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/30 text-white flex items-center justify-center hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-all focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] flex-shrink-0"
            onClick={toggleMenu}
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#121417]/98 border-b border-[#1E6FFF]/30 shadow-2xl backdrop-blur-2xl transition-all duration-300">
          <div className="px-4 py-5 flex flex-col gap-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            {/* Quick Actions Header */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              <a
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/30 text-white text-xs font-semibold hover:border-[#1E6FFF] min-h-[44px]"
                href="tel:03035452839"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">call</span>
                <span>Call Clinic</span>
              </a>
              <a
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#1E6FFF]/15 border border-[#1E6FFF]/30 text-[#8FCBF2] text-xs font-semibold hover:bg-[#1E6FFF]/25 min-h-[44px]"
                href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="flex items-center justify-between p-3 rounded-xl text-white/90 hover:text-[#1E6FFF] hover:bg-white/5 transition-all text-sm font-medium min-h-[44px]"
                  href={link.href}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]/60">chevron_right</span>
                </a>
              ))}
            </nav>

            {/* Shift & Location Info Pill */}
            <div className="p-3 rounded-xl bg-[#1B1F24] border border-white/5 text-xs text-[#A9B1BA] flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#1E6FFF] animate-pulse"></span>
                <span>Evening Clinic: 3:30 PM – 9:30 PM</span>
              </div>
              <span>Basement D, Awami Plaza, Adiyala Rd, Rawalpindi</span>
            </div>

            {/* Primary Action Button */}
            <a
              className="btn-neon w-full py-3.5 rounded-xl text-center text-sm font-bold text-white min-h-[48px] flex items-center justify-center gap-2"
              href="#smart-booking"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Reserve Consultation Online</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
