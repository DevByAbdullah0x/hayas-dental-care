"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceData {
  id: string;
  icon: string;
  title: string;
  duration: string;
  desc: string;
  priceLabel: string;
  price: string;
  steps: string[];
}

const services: ServiceData[] = [
  {
    id: "braces",
    icon: "dentistry",
    title: "Braces & Orthodontics",
    duration: "12 – 18 Months",
    desc: "Comprehensive smile alignment for teens and adults using aesthetic ceramic brackets, precision metal, and custom clear aligners.",
    priceLabel: "STARTING FROM",
    price: "PKR 70,000",
    steps: [
      "1. Digital cephalometric & photographic analysis",
      "2. Gentle bracket bonding session (60 mins)",
      "3. Monthly adjustment & alignment reviews",
    ],
  },
  {
    id: "implant",
    icon: "medical_services",
    title: "Permanent Dental Implants",
    duration: "2 Key Visits",
    desc: "European grade-4 titanium fixtures surgically integrated into the jawbone, topped with bespoke monolithic zirconia crowns.",
    priceLabel: "STARTING FROM",
    price: "PKR 120,000",
    steps: [
      "1. 3D CBCT bone density evaluation",
      "2. Flapless titanium fixture placement",
      "3. Osseointegration check & custom crown seating",
    ],
  },
  {
    id: "whitening",
    icon: "auto_awesome",
    title: "Cold-Laser Teeth Whitening",
    duration: "45 Minutes",
    desc: "Safe chairside enamel lightening. Lifts tea, tobacco, and coffee discoloration by up to 6 shades without enamel degradation.",
    priceLabel: "PACKAGE RANGE",
    price: "PKR 15K – 25K",
    steps: [
      "1. Gingival dam application (protective gum barrier)",
      "2. Medical whitening gel + cold-LED activation",
      "3. Remineralizing desensitizing protective finish",
    ],
  },
  {
    id: "rct",
    icon: "health_and_safety",
    title: "Painless Root Canal (RCT)",
    duration: "Single / Dual Visit",
    desc: "Save infected or deeply aching teeth with high-speed motorized rotary shaping under rubber dam isolation and warm hermetic sealing.",
    priceLabel: "PER CANAL RANGE",
    price: "PKR 8K – 15K",
    steps: [
      "1. Localized numbness confirmation test",
      "2. Digital apex locator length verification",
      "3. Biocompatible gutta-percha hermetic sealing",
    ],
  },
  {
    id: "denture",
    icon: "sentiment_satisfied",
    title: "Flexible Dentures & Arches",
    duration: "3 – 4 Sittings",
    desc: "Lightweight Valplast flexible dentures and precision cobalt-chromium partial dentures engineered for elder mastication comfort.",
    priceLabel: "PER JAW ARCH",
    price: "PKR 25K – 60K",
    steps: [
      "1. High-precision anatomical impressions",
      "2. Jaw relation recording & wax bite try-in",
      "3. Final seating with occlusion bite balance",
    ],
  },
  {
    id: "general",
    icon: "clean_hands",
    title: "Ultrasonic Scaling & Fillings",
    duration: "30 Minutes",
    desc: "Painless tartar removal, air-flow stain buffing, and nano-hybrid tooth-colored composite restorations with exact shade matching.",
    priceLabel: "STARTING FROM",
    price: "PKR 3K – 6K",
    steps: [
      "1. Supragingival & subgingival ultrasonic wash",
      "2. Gentle polishing paste sealing microscopic pits",
      "3. Chairside oral hygiene prescription",
    ],
  },
];

export default function ServicesGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services-grid"
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-margin bg-[#EEF6F5] border-b border-[#DDE5E2]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-1.5 max-w-2xl">
            <span className="font-label-caps text-[11px] text-[#0F5C5E] font-bold tracking-[0.2em] uppercase">
              Clinical Offerings
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#083F42] font-semibold tracking-tight">
              Specialized Dental Procedures
            </h2>
            <p className="text-sm sm:text-base text-[#647070] leading-relaxed">
              Carefully curated treatments delivered with Swiss-level precision,
              modern equipment, and compassionate chairside care.
            </p>
          </div>

          <Link
            href="#calculator-section"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F5C5E] hover:text-[#083F42] transition-colors py-2 group"
          >
            <span>Calculate custom estimate</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] hover:border-[#0F5C5E]/40 flex flex-col justify-between shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Icon & Duration Pill */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#EEF6F5] text-[#0F5C5E] flex items-center justify-center border border-[#0F5C5E]/15">
                      <span className="material-symbols-outlined text-[22px]">
                        {service.icon}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full font-label-caps text-[10px] sm:text-[11px] font-semibold bg-[#F8F6F1] text-[#647070] border border-[#DDE5E2]">
                      {service.duration}
                    </span>
                  </div>

                  {/* Treatment Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#083F42] tracking-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#647070] leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Progressive Disclosure Toggle */}
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="self-start inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#0F5C5E] hover:text-[#083F42] transition-colors py-1 group"
                    type="button"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Collapse protocol" : "Explore treatment"}</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                      {isExpanded ? "expand_less" : "arrow_forward"}
                    </span>
                  </button>

                  {/* Expanded Treatment Steps */}
                  {isExpanded && (
                    <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] text-xs text-[#1E2929] flex flex-col gap-2 animate-fadeIn">
                      <div className="font-label-caps text-[10px] font-bold text-[#0F5C5E] tracking-wider uppercase">
                        Clinical Protocol
                      </div>
                      {service.steps.map((step) => (
                        <div key={step} className="flex items-start gap-2 leading-relaxed text-[#647070]">
                          <span className="text-[#0F5C5E] font-bold">•</span>
                          <span>{step}</span>
                        </div>
                      ))}
                      <Link
                        href="#smart-booking"
                        className="mt-2 text-center py-2.5 px-3 rounded-xl btn-primary text-xs font-semibold text-white"
                      >
                        Reserve Slot for {service.title}
                      </Link>
                    </div>
                  )}
                </div>

                {/* Pricing Footer */}
                <div className="pt-4 mt-6 border-t border-[#DDE5E2] flex items-center justify-between gap-3">
                  <div>
                    <span className="font-label-caps text-[9px] sm:text-[10px] text-[#647070] tracking-wider block">
                      {service.priceLabel}
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#083F42]">
                      {service.price}
                    </p>
                  </div>

                  <Link
                    href="#smart-booking"
                    className="px-4 py-2 rounded-xl bg-[#EEF6F5] text-[#0F5C5E] border border-[#0F5C5E]/20 hover:bg-[#0F5C5E] hover:text-white transition-all text-xs font-semibold min-h-[38px] flex items-center justify-center"
                  >
                    Book Slot
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
