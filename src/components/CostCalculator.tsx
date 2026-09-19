"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section id="calculator-section" className="w-full py-space-xl px-margin-mobile md:px-margin bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold tracking-wider uppercase">
            Upfront Transparency
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#1E6FFF] font-semibold tracking-tight">
            Interactive Treatment Cost Estimator
          </h2>
          <p className="font-body-lg text-slate-600 max-w-2xl">
            Select the treatments you need, adjust quantities, and get an instant estimate — itemized with zero hidden fees.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={
                activeFilter === f.key
                  ? "btn-neon px-4 py-2 rounded-full font-label-caps text-[11px] font-bold transition-all shadow-sm"
                  : "px-4 py-2 rounded-full font-label-caps text-[11px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all"
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* Left — Item List */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {filteredItems.map((item) => {
              const isChecked = !!selectedItems[item.id];
              const qty = getQty(item.id);
              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isChecked
                      ? "bg-blue-50/40 border-[#1E6FFF] shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Checkbox + Label */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      id={`calc-item-${item.id}`}
                      checked={isChecked}
                      onChange={() => handleCheckToggle(item)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1E6FFF] focus:ring-[#1E6FFF] accent-[#1E6FFF] shrink-0 cursor-pointer"
                    />
                    <label htmlFor={`calc-item-${item.id}`} className="flex flex-col gap-0.5 cursor-pointer min-w-0">
                      <span className="font-body-md text-[15px] font-semibold text-[#0f172a] leading-snug">
                        {item.name}
                      </span>
                      <span className="font-body-sm text-[13px] text-slate-500 leading-snug">
                        {item.desc}
                      </span>
                    </label>
                  </div>

                  {/* Price + Qty Controls */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-body-md text-[14px] font-bold text-[#1E6FFF] whitespace-nowrap">
                      PKR {item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        disabled={qty <= 1}
                        className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold hover:bg-slate-100 disabled:opacity-40 transition-all shadow-xs"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        −
                      </button>
                      <span className="font-body-sm text-sm font-bold text-[#0f172a] w-5 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center text-sm font-bold hover:bg-slate-100 transition-all shadow-xs"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Receipt Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 flex flex-col gap-5 shadow-md">
              <h3 className="font-headline-sm text-headline-sm font-bold text-[#0f172a]">
                Your Itemized Estimate
              </h3>

              {selectedEntries.length === 0 ? (
                <p className="font-body-md text-slate-500 py-4">
                  Select treatments on the left to build your personalized chairside quote.
                </p>
              ) : (
                <>
                  {/* Line Items */}
                  <div className="flex flex-col gap-2.5">
                    {selectedEntries.map(([id, item]) => (
                      <div key={id} className="flex items-center justify-between gap-2">
                        <span className="font-body-md text-[14px] text-slate-700 truncate flex-1">
                          {item.name}
                          {item.qty > 1 && (
                            <span className="text-slate-400 font-semibold"> × {item.qty}</span>
                          )}
                        </span>
                        <span className="font-body-md text-[14px] font-semibold text-[#0f172a] whitespace-nowrap">
                          PKR {(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <hr className="border-slate-200" />

                  {/* Grand Total */}
                  <div className="flex items-center justify-between">
                    <span className="font-title-md font-bold text-[#0f172a]">Grand Total</span>
                    <span className="font-headline-sm font-bold text-[#1E6FFF]">
                      PKR {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-slate-200/80">
                <span className="material-symbols-outlined text-[18px] text-[#1E6FFF] mt-0.5">
                  info
                </span>
                <p className="font-body-sm text-[12px] text-slate-600 leading-snug">
                  This is an approximate estimate. Final quote is confirmed chairside by Dr. Aayisha before any procedure starts.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={sendQuoteToWhatsApp}
                  disabled={selectedEntries.length === 0}
                  className="w-full px-6 py-3.5 rounded-full bg-[#25D366] text-white font-label-ui text-label-ui font-bold flex items-center justify-center gap-2 hover:brightness-105 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Estimate to WhatsApp
                </button>
                <Link
                  href="#smart-booking"
                  className="btn-neon w-full px-6 py-3.5 rounded-full font-label-ui text-label-ui font-bold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  Proceed to Book Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
