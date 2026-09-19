"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const calcItems = [
  { id: 1, category: "preventive", name: "Ultrasonic Scaling & Polishing", desc: "Full mouth tartar debridement + air-jet shine", price: 4000 },
  { id: 2, category: "preventive", name: "Cold Laser Teeth Whitening", desc: "Chairside 45-min cold light laser, single session", price: 18000 },
  { id: 3, category: "preventive", name: "Tooth-Colored Composite Filling", desc: "Nano-hybrid shade matching restorative filling (per tooth)", price: 3500 },
  { id: 4, category: "advanced", name: "Rotary Root Canal Therapy (RCT)", desc: "Single-sitting motorized shaping with rubber dam", price: 10000 },
  { id: 5, category: "advanced", name: "Monolithic Zirconia Crown", desc: "High-strength aesthetic cap (5-year laboratory guarantee)", price: 16000 },
  { id: 6, category: "specialized", name: "Titanium Dental Implant System", desc: "Grade 4 titanium fixture + custom abutment + zirconia crown", price: 120000 },
  { id: 7, category: "specialized", name: "Ceramic Aesthetic Braces (Initial Bonding)", desc: "First-phase bracket placement (balance spread over monthly visits)", price: 35000 },
];

const filters = [
  { key: "all", label: "All Treatments" },
  { key: "preventive", label: "Cleanings & Fillings" },
  { key: "advanced", label: "RCT & Crowns" },
  { key: "specialized", label: "Implants & Braces" },
];

export default function CostCalculator() {
  const [selectedItems, setSelectedItems] = useState<Record<number, { price: number; name: string; qty: number }>>({});
  const [activeFilter, setActiveFilter] = useState("all");
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const getQty = (id: number) => quantities[id] ?? 1;

  const handleCheckToggle = (item: (typeof calcItems)[number]) => {
    setSelectedItems((prev) => {
      const next = { ...prev };
      if (next[item.id]) {
        delete next[item.id];
      } else {
        next[item.id] = { price: item.price, name: item.name, qty: getQty(item.id) };
      }
      return next;
    });
  };

  const handleQtyChange = (id: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
    setSelectedItems((prev) => {
      if (!prev[id]) return prev;
      const current = quantities[id] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: { ...prev[id], qty: next } };
    });
  };

  const selectedEntries = Object.entries(selectedItems);
  const grandTotal = selectedEntries.reduce((sum, [, item]) => sum + item.price * item.qty, 0);

  const filteredItems = activeFilter === "all" ? calcItems : calcItems.filter((item) => item.category === activeFilter);

  const sendQuoteToWhatsApp = () => {
    let message = "🦷 *Haya's Dental Care — Treatment Estimate*\n\n";
    selectedEntries.forEach(([, item]) => {
      message += `• ${item.name} × ${item.qty} — PKR ${(item.price * item.qty).toLocaleString()}\n`;
    });
    message += `\n💰 *Grand Total: PKR ${grandTotal.toLocaleString()}*`;
    message += "\n\nI would like to discuss this estimate and schedule an appointment.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923035452839?text=${encoded}`, "_blank");
  };

  return (
    <section id="calculator-section" className="w-full py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin bg-[#F8F6F1] border-b border-[#DDE5E2] scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-label-caps text-xs sm:text-[13px] text-[#0F5C5E] font-bold tracking-[0.2em] uppercase">
            Transparent Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#083F42] font-semibold tracking-tight">
            Your treatment, clearly priced.
          </h2>
          <p className="text-sm sm:text-base text-[#647070] leading-relaxed mt-1">
            Build your personalized clinical treatment plan below. Adjust quantities per
            tooth or arch, and receive an instant, itemized estimate with zero hidden consumables fees.
          </p>
        </div>

        {/* 3-Step Indicator Strip */}
        <div className="grid grid-cols-3 gap-3 p-2 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-xs text-center text-xs">
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#EEF6F5] text-[#0F5C5E] font-semibold flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span className="font-display font-bold">01</span>
            <span className="text-[11px] sm:text-xs">Choose Treatment</span>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8F6F1] text-[#647070] font-semibold flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span className="font-display font-bold">02</span>
            <span className="text-[11px] sm:text-xs">Choose Quantity</span>
          </div>
          <div className="p-2 sm:p-2.5 rounded-xl bg-[#F8F6F1] text-[#647070] font-semibold flex flex-col sm:flex-row items-center justify-center gap-1.5">
            <span className="font-display font-bold">03</span>
            <span className="text-[11px] sm:text-xs">Review Estimate</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:flex-wrap no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full font-label-caps text-[11px] font-bold transition-all whitespace-nowrap min-h-[40px] flex items-center justify-center ${
                activeFilter === f.key
                  ? "btn-primary shadow-sm text-white"
                  : "bg-[#FFFFFF] text-[#647070] hover:text-[#083F42] border border-[#DDE5E2]"
              }`}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Two-Column Tool Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column — Selectable Treatment Items */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {filteredItems.map((item) => {
              const isChecked = !!selectedItems[item.id];
              const qty = getQty(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => handleCheckToggle(item)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                    isChecked
                      ? "bg-[#EEF6F5] border-[#0F5C5E] shadow-sm ring-1 ring-[#0F5C5E]/20"
                      : "bg-[#FFFFFF] border-[#DDE5E2] hover:border-[#0F5C5E]/40"
                  }`}
                >
                  {/* Selectable Check + Title & Description */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <div
                      className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isChecked
                          ? "bg-[#0F5C5E] border-[#0F5C5E] text-white"
                          : "border-[#DDE5E2] bg-white"
                      }`}
                    >
                      {isChecked && (
                        <span className="text-white text-xs font-bold leading-none">✓</span>
                      )}
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="font-display text-sm sm:text-base font-bold text-[#083F42] leading-snug">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#647070] leading-snug">
                        {item.desc}
                      </span>
                    </div>
                  </div>

                  {/* Price + Quantity Stepper */}
                  <div
                    className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DDE5E2]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0F5C5E] whitespace-nowrap font-sans">
                      PKR {item.price.toLocaleString()}
                    </span>

                    {/* Stepper */}
                    <div className="flex items-center gap-1 bg-[#F8F6F1] p-1 rounded-full border border-[#DDE5E2]">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        disabled={qty <= 1}
                        className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#083F42] flex items-center justify-center text-sm font-bold hover:bg-[#EEF6F5] disabled:opacity-30 transition-all"
                        aria-label={`Decrease quantity for ${item.name}`}
                        type="button"
                      >
                        −
                      </button>
                      <span className="text-xs sm:text-sm font-bold text-[#083F42] w-6 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#083F42] flex items-center justify-center text-sm font-bold hover:bg-[#EEF6F5] transition-all"
                        aria-label={`Increase quantity for ${item.name}`}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column — Sticky Estimate Receipt */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 w-full">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] p-6 sm:p-7 flex flex-col gap-5 shadow-soft-lg">
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#C9A96E] font-bold tracking-wider uppercase">
                  Step 03 · Review Estimate
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#083F42]">
                  Your Clinical Estimate
                </h3>
              </div>

              {selectedEntries.length === 0 ? (
                <p className="text-xs sm:text-sm text-[#647070] py-4 leading-relaxed border-t border-b border-[#DDE5E2]">
                  Select one or more treatments on the left to generate your instant itemized estimate.
                </p>
              ) : (
                <>
                  {/* Selected Line Items */}
                  <div className="flex flex-col gap-2.5 max-h-60 overflow-y-auto pr-1 border-t border-b border-[#DDE5E2] py-3">
                    {selectedEntries.map(([id, item]) => (
                      <div key={id} className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                        <span className="text-[#1E2929] truncate flex-1">
                          {item.name}
                          {item.qty > 1 && (
                            <span className="text-[#647070] font-semibold"> × {item.qty}</span>
                          )}
                        </span>
                        <span className="font-semibold text-[#083F42] whitespace-nowrap font-sans">
                          PKR {(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Prominent Final Total */}
                  <div className="flex items-baseline justify-between pt-1">
                    <span className="font-label-caps text-xs text-[#647070] font-bold tracking-wider uppercase">
                      Total Estimate
                    </span>
                    <span className="font-display text-2xl sm:text-3xl font-bold text-[#0F5C5E]">
                      PKR {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

              {/* Clinical Assurance Note */}
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] text-xs">
                <span className="material-symbols-outlined text-[#0F5C5E] text-[18px] mt-0.5 flex-shrink-0">
                  verified
                </span>
                <p className="text-[11px] sm:text-xs text-[#647070] leading-snug">
                  This approximate estimate is finalized chairside by Dr. Aayisha Quddus
                  before any procedure begins. Zero surprise fees.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5 pt-1">
                <button
                  onClick={sendQuoteToWhatsApp}
                  disabled={selectedEntries.length === 0}
                  className="w-full px-5 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm min-h-[48px]"
                  type="button"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <Link
                  href="#smart-booking"
                  className="btn-primary w-full px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 text-white min-h-[48px]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  <span>Book Consultation for This Estimate</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
