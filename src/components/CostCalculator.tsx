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
  { key: "all", label: "ALL" },
  { key: "preventive", label: "CLEANINGS & RESTORATION" },
  { key: "advanced", label: "RCT & PROSTHETICS" },
  { key: "specialized", label: "BRACES & IMPLANTS" },
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
    message += "\n\nI'd like to confirm this estimate and book an appointment.";
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/923035452839?text=${encoded}`, "_blank");
  };

  return (
    <section id="calculator-section" className="w-full py-14 sm:py-18 md:py-20 px-4 sm:px-6 md:px-margin bg-[#F8F6F1] border-b border-[#DDE5E2]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-1">
          <span className="font-label-caps text-[10px] sm:text-[11px] text-[#0F5C5E] font-bold tracking-wider uppercase">
            Upfront Transparency
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#083F42] font-semibold tracking-tight">
            Interactive Treatment Cost Estimator
          </h2>
          <p className="font-body-lg text-xs sm:text-sm md:text-base text-[#647070] max-w-2xl mt-1 leading-relaxed">
            Select the treatments you need, adjust quantities, and get an instant estimate — itemized with zero hidden fees.
          </p>
        </div>

        {/* Filter Buttons - Horizontally scrollable on mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 w-full sm:flex-wrap no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 sm:px-4 py-2 rounded-full font-label-caps text-[10px] sm:text-[11px] font-bold transition-all whitespace-nowrap min-h-[40px] flex items-center justify-center ${
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

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left — Item List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {filteredItems.map((item) => {
              const isChecked = !!selectedItems[item.id];
              const qty = getQty(item.id);
              return (
                <div
                  key={item.id}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                    isChecked
                      ? "bg-[#F0F5F4] border-[#0F5C5E] shadow-sm"
                      : "bg-[#FFFFFF] border-[#DDE5E2] hover:border-[#0F5C5E]/30"
                  }`}
                >
                  {/* Checkbox + Label (touch-friendly container) */}
                  <div
                    className="flex items-start gap-3 flex-1 min-w-0 cursor-pointer"
                    onClick={() => handleCheckToggle(item)}
                  >
                    <input
                      type="checkbox"
                      id={`calc-item-${item.id}`}
                      checked={isChecked}
                      onChange={() => handleCheckToggle(item)}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-1 h-5 w-5 rounded border-[#DDE5E2] text-[#0F5C5E] focus:ring-[#0F5C5E] accent-[#0F5C5E] shrink-0 cursor-pointer"
                    />
                    <label
                      htmlFor={`calc-item-${item.id}`}
                      className="flex flex-col gap-0.5 cursor-pointer min-w-0"
                    >
                      <span className="font-body-md text-sm sm:text-[15px] font-semibold text-[#083F42] leading-snug">
                        {item.name}
                      </span>
                      <span className="font-body-sm text-xs sm:text-[13px] text-[#647070] leading-snug">
                        {item.desc}
                      </span>
                    </label>
                  </div>

                  {/* Price + Quantity Stepper */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DDE5E2]">
                    <span className="font-body-md text-xs sm:text-sm font-bold text-[#0F5C5E] whitespace-nowrap">
                      PKR {item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1 bg-[#F8F6F1] p-1 rounded-full border border-[#DDE5E2]">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        disabled={qty <= 1}
                        className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#083F42] flex items-center justify-center text-base font-bold hover:bg-[#E2ECE9] disabled:opacity-30 transition-all min-h-[36px] min-w-[36px]"
                        aria-label={`Decrease quantity for ${item.name}`}
                        type="button"
                      >
                        −
                      </button>
                      <span className="font-body-sm text-xs sm:text-sm font-bold text-[#083F42] w-6 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#083F42] flex items-center justify-center text-base font-bold hover:bg-[#E2ECE9] transition-all min-h-[36px] min-w-[36px]"
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

          {/* Right — Receipt Card (sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 w-full">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 shadow-soft">
              <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-[#083F42]">
                Your Itemized Estimate
              </h3>

              {selectedEntries.length === 0 ? (
                <p className="font-body-md text-xs sm:text-sm text-[#647070] py-3 leading-relaxed">
                  Select treatments on the left to build your personalized chairside quote.
                </p>
              ) : (
                <>
                  {/* Line Items */}
                  <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
                    {selectedEntries.map(([id, item]) => (
                      <div key={id} className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                        <span className="font-body-md text-[#1E2929] truncate flex-1">
                          {item.name}
                          {item.qty > 1 && (
                            <span className="text-[#647070] font-semibold"> × {item.qty}</span>
                          )}
                        </span>
                        <span className="font-body-md font-semibold text-[#083F42] whitespace-nowrap">
                          PKR {(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="border-[#DDE5E2]" />

                  {/* Grand Total */}
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-sm sm:text-base font-bold text-[#083F42]">Grand Total</span>
                    <span className="font-headline-sm text-lg sm:text-xl font-bold text-[#0F5C5E]">
                      PKR {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#0F5C5E] mt-0.5 flex-shrink-0">
                  info
                </span>
                <p className="font-body-sm text-[11px] sm:text-xs text-[#647070] leading-snug">
                  This is an approximate estimate. Final quote is confirmed chairside by Dr. Aayisha before any procedure starts.
                </p>
              </div>

              {/* CTA Buttons (min 48px height) */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={sendQuoteToWhatsApp}
                  disabled={selectedEntries.length === 0}
                  className="w-full px-5 py-3.5 rounded-full bg-[#25D366] text-white font-label-ui text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm min-h-[48px]"
                  type="button"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                <Link
                  href="#smart-booking"
                  className="btn-primary w-full px-5 py-3.5 rounded-full font-label-ui text-xs sm:text-sm font-bold flex items-center justify-center gap-2 text-white min-h-[48px]"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  <span>Proceed to Book Slot</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
