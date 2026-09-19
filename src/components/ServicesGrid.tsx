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
    desc: "Comprehensive alignment for teens and adults using ceramic aesthetic brackets, high-tensile metal, and custom clear aligners.",
    priceLabel: "STARTING FROM",
    price: "PKR 70,000",
    steps: [
      "1. Digital cephalometric & photographic analysis",
      "2. Gentle bracket bonding session (60 mins)",
      "3. Monthly adjustment & torque reviews",
    ],
  },
  {
    id: "implant",
    icon: "medical_services",
    title: "Permanent Dental Implants",
    duration: "2 Key Visits",
    desc: "Swiss and German titanium fixtures surgically integrated into the jawbone, topped with bespoke monolithic zirconia crowns.",
    priceLabel: "STARTING FROM",
    price: "PKR 120,000",
    steps: [
      "1. 3D CBCT Bone density evaluation",
      "2. Flapless titanium fixture placement",
      "3. Osseointegration check & Zirconia crown seating",
    ],
  },
  {
    id: "whitening",
    icon: "auto_awesome",
    title: "Cold-Laser Whitening",
    duration: "45 Minutes",
    desc: "Safe chairside enamel lightening. Removes tea, tobacco, and aged discoloration by up to 6 shades without thinning tooth enamel.",
    priceLabel: "PACKAGE RANGE",
    price: "PKR 15K – 25K",
    steps: [
      "1. Gingival dam application (gum barrier defense)",
      "2. Medical peroxide gel + LED activation",
      "3. Remineralizing desensitizing gloss",
    ],
  },
  {
    id: "rct",
    icon: "health_and_safety",
    title: "Painless Root Canal (RCT)",
    duration: "Single / Dual Visit",
    desc: "Save severely infected or painful teeth. High-speed motorized rotary shaping under rubber dam isolation with warm obturation.",
    priceLabel: "PER CANAL RANGE",
    price: "PKR 8K – 15K",
    steps: [
      "1. Numbness confirmation test",
      "2. Digital apex locator length verification",
      "3. Biocompatible gutta-percha hermetic sealing",
    ],
  },
  {
    id: "denture",
    icon: "sentiment_satisfied",
    title: "Flexible Dentures & Arches",
    duration: "3 – 4 Sittings",
    desc: "Lightweight Valplast flexible dentures and precision cast cobalt-chromium partial dentures for elder mastication comfort.",
    priceLabel: "PER JAW ARCH",
    price: "PKR 25K – 60K",
    steps: [
      "1. High-accuracy primary & secondary impressions",
      "2. Jaw relation recording & wax try-in",
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
      "2. Gentle polishing paste to seal microscopic pits",
      "3. Chairside oral hygiene prescription",
    ],
  },
];

export default function ServicesGrid() {
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const toggleDetail = (id: string) => {
    setOpenDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="services-grid"
      className="w-full py-space-xl px-margin-mobile md:px-margin bg-slate-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold tracking-wider uppercase">
              Clinical Offerings
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#1E6FFF] font-semibold tracking-tight">
              Specialized Dental Procedures
            </h2>
            <p className="font-body-lg text-slate-600 mt-1">
              Evidence-based treatments delivered with modern equipment and
              compassionate care.
            </p>
          </div>
          <Link
            href="#calculator-section"
            className="inline-flex items-center gap-1 font-label-ui text-label-ui font-semibold text-[#1E6FFF] hover:text-[#0F4FCC] transition-colors whitespace-nowrap"
          >
            Calculate custom treatment estimate
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-space-lg rounded-2xl bg-white border border-slate-200 hover:border-[#1E6FFF]/50 flex flex-col justify-between gap-space-md hover:shadow-lg transition-all"
            >
              {/* Top section */}
              <div className="flex flex-col gap-space-md">
                {/* Icon & Duration Row */}
                <div className="flex items-center justify-between">
                  <span
                    className="material-symbols-outlined text-[28px] p-2.5 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {service.icon}
                  </span>
                  <span className="px-2.5 py-1 rounded-full font-label-caps text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                    {service.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-title-md text-title-md font-bold text-[#0f172a]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body-md text-body-md text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* Detail Toggle Button */}
                <button
                  onClick={() => toggleDetail(service.id)}
                  className="self-start inline-flex items-center gap-1 font-label-ui text-[13px] font-semibold text-[#1E6FFF] hover:text-[#0F4FCC] transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {openDetails[service.id] ? "expand_less" : "expand_more"}
                  </span>
                  Inspect Steps
                </button>

                {/* Expandable Steps */}
                {openDetails[service.id] && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[12px] font-body-md text-slate-700 flex flex-col gap-1.5">
                    {service.steps.map((step) => (
                      <span key={step}>{step}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Section */}
              <div className="pt-space-sm border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-[10px] text-slate-400 tracking-wider block">
                    {service.priceLabel}
                  </span>
                  <p className="font-title-md text-title-md font-bold text-[#0f172a]">
                    {service.price}
                  </p>
                </div>
                <Link
                  href="#smart-booking"
                  className="px-3 py-1.5 rounded-lg bg-[#1E6FFF]/10 text-[#1E6FFF] hover:bg-[#1E6FFF] hover:text-white transition-all font-label-ui text-[12px] font-semibold"
                >
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
