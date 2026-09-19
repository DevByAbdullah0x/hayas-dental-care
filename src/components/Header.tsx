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
      <div className="h-16 sm:h-20 w-full px-3 sm:px-6 md:px-margin max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Identity */}
        <Link
          href="#"
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group min-w-0"
          onClick={closeMenu}
        >
          <img
            alt="Haya's Dental Care Logo"
            className="h-8 sm:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(30,111,255,0.5)] flex-shrink-0"
            src="/logo.png"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-base sm:text-lg lg:text-xl text-white font-semibold tracking-tight group-hover:text-[#8FCBF2] transition-colors leading-tight truncate">
              Haya&apos;s Dental Care
            </span>
            <span className="font-label-caps text-[9px] sm:text-[10px] text-[#A9B1BA] tracking-wider hidden sm:block truncate">
              EST. 2019 · RAWALPINDI · DR. AAYISHA QUDDUS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (>= 1280px / xl) to prevent collision with buttons */}
        <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 flex-shrink">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-xs xl:text-[13px] px-2 py-1.5 rounded-lg hover:bg-white/5 whitespace-nowrap"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Shift status badge: only on ultra-wide >= 1440px to never crowd buttons */}
          <div className="hidden 2xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-[#8FCBF2] font-label-caps text-[10px] whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FFF] animate-pulse"></span>
            <span>Evening Shift Active</span>
          </div>

          {/* Call button: icon-only on mobile < 640px, full pill on >= 640px */}
          <a
            className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-white font-label-ui text-xs hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-colors min-h-[44px] min-w-[44px]"
            href="tel:03035452839"
            aria-label="Call clinic at 0303-5452839"
          >
            <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">call</span>
            <span className="hidden md:inline whitespace-nowrap">0303-5452839</span>
          </a>

          {/* Book Appointment CTA: visible on >= 640px screens; below 640px, accessible in hamburger & mobile bottom bar */}
          <a
            className="hidden sm:inline-flex btn-neon items-center justify-center px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-label-ui text-xs sm:text-[13px] font-semibold text-white min-h-[44px] whitespace-nowrap"
            href="#smart-booking"
            onClick={closeMenu}
          >
            Book Appointment
          </a>

          {/* Hamburger Menu Button (visible on < 1280px / below xl) */}
          <button
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="xl:hidden w-11 h-11 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/30 text-white flex items-center justify-center hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-all focus:outline-none focus:ring-2 focus:ring-[#1E6FFF] flex-shrink-0"
            onClick={toggleMenu}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (< 1280px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-[#121417]/98 border-b border-[#1E6FFF]/30 shadow-2xl backdrop-blur-2xl transition-all duration-300">
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
