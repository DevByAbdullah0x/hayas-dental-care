"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

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
    <header className="w-full bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#DDE5E2] shadow-[0_2px_12px_rgba(8,63,66,0.04)] relative z-50">
      <div className="h-16 sm:h-20 w-full px-4 sm:px-6 xl:px-8 max-w-7xl mx-auto flex items-center justify-between gap-2 xl:gap-4">
        {/* Brand Identity */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 group min-w-0"
          onClick={handleLogoClick}
        >
          <img
            alt="Haya's Dental Care Logo"
            className="h-8 sm:h-9 xl:h-10 w-auto object-contain flex-shrink-0"
            src="/logo.png"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-headline-sm text-sm sm:text-base xl:text-lg text-[#083F42] font-semibold tracking-tight group-hover:text-[#0F5C5E] transition-colors leading-tight whitespace-nowrap">
              Haya&apos;s Dental Care
            </span>
            <span className="font-label-caps text-[9px] text-[#647070] tracking-wider hidden 2xl:block truncate">
              EST. 2019 · RAWALPINDI · DR. AAYISHA QUDDUS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation (>= 1024px / lg) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-[#1E2929] hover:text-[#0F5C5E] transition-colors text-[11px] xl:text-[13px] px-1.5 xl:px-2.5 py-1.5 rounded-full hover:bg-[#EEF6F5] whitespace-nowrap font-medium cursor-pointer"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Cluster */}
        <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
          {/* Call button */}
          <a
            className="inline-flex items-center justify-center gap-1.5 px-2.5 xl:px-3 py-2 rounded-full bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] text-xs hover:border-[#0F5C5E] hover:text-[#0F5C5E] transition-colors min-h-[38px] xl:min-h-[40px]"
            href="tel:03035452839"
            aria-label="Call clinic at 0303-5452839"
          >
            <span className="material-symbols-outlined text-[16px] text-[#0F5C5E]">call</span>
            <span className="hidden sm:inline lg:hidden xl:inline whitespace-nowrap text-xs font-semibold">0303-5452839</span>
          </a>

          {/* Book Appointment CTA */}
          <a
            className="hidden lg:inline-flex btn-primary items-center justify-center px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs font-semibold text-white min-h-[38px] xl:min-h-[40px] whitespace-nowrap flex-shrink-0 shadow-soft cursor-pointer"
            href="#smart-booking"
            onClick={(e) => handleNavClick(e, "#smart-booking")}
          >
            Book Appointment
          </a>

          {/* Hamburger Menu Button (visible on < 1024px / below lg) */}
          <button
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] flex items-center justify-center hover:border-[#0F5C5E] hover:text-[#0F5C5E] transition-all focus:outline-none focus:ring-2 focus:ring-[#0F5C5E] flex-shrink-0"
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
        <div className="lg:hidden w-full bg-[#FFFFFF]/98 border-b border-[#DDE5E2] shadow-xl backdrop-blur-2xl transition-all duration-300">
          <div className="px-4 py-5 flex flex-col gap-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            {/* Quick Actions Header */}
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#DDE5E2]">
              <a
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] text-xs font-semibold hover:border-[#0F5C5E] min-h-[44px]"
                href="tel:03035452839"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined text-[18px] text-[#0F5C5E]">call</span>
                <span>Call Clinic</span>
              </a>
              <a
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#F0F5F4] border border-[#0F5C5E]/30 text-[#0F5C5E] text-xs font-semibold hover:bg-[#E2ECE9] min-h-[44px]"
                href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                target="_blank"
                rel="noopener"
                onClick={closeMenu}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#0F5C5E]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="flex items-center justify-between p-3 rounded-xl text-[#1E2929] hover:text-[#0F5C5E] hover:bg-[#F0F5F4] transition-all text-sm font-medium min-h-[44px] cursor-pointer"
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#0F5C5E]/60">chevron_right</span>
                </a>
              ))}
            </nav>

            {/* Shift & Location Info Pill */}
            <div className="p-3 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-xs text-[#647070] flex flex-col gap-1">
              <div className="flex items-center gap-2 text-[#083F42] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse"></span>
                <span>Evening Clinic: 3:30 PM – 9:30 PM</span>
              </div>
              <span>Basement D, Awami Plaza, Adiyala Rd, Rawalpindi</span>
            </div>

            {/* Primary Action Button */}
            <a
              className="btn-primary w-full py-3.5 rounded-xl text-center text-sm font-bold text-white min-h-[48px] flex items-center justify-center gap-2 cursor-pointer"
              href="#smart-booking"
              onClick={(e) => handleNavClick(e, "#smart-booking")}
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
