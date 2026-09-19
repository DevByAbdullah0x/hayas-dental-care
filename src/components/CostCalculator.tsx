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
    <section id="calculator-section" className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-md">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-display-sm md:text-display-md text-on-surface">
            Cost Calculator
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            Select the treatments you need, adjust quantities, and get an instant estimate — no surprises.
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
                  ? "px-3.5 py-1.5 rounded-full font-label-caps text-[11px] font-bold bg-primary text-on-primary transition-all"
                  : "px-3.5 py-1.5 rounded-full font-label-caps text-[11px] font-bold bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-all"
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
                  className="p-4 rounded-2xl bg-surface-container-lowest border border-secondary/10 flex items-center justify-between gap-4 transition-all"
                >
                  {/* Checkbox + Label */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <input
                      type="checkbox"
                      id={`calc-item-${item.id}`}
                      checked={isChecked}
                      onChange={() => handleCheckToggle(item)}
                      className="mt-1 h-4 w-4 rounded border-outline text-primary focus:ring-primary accent-primary shrink-0"
                    />
                    <label htmlFor={`calc-item-${item.id}`} className="flex flex-col gap-0.5 cursor-pointer min-w-0">
                      <span className="font-body text-body-md font-semibold text-on-surface leading-snug">
                        {item.name}
                      </span>
                      <span className="font-body text-body-sm text-on-surface-variant leading-snug">
                        {item.desc}
                      </span>
                    </label>
                  </div>

                  {/* Price + Qty Controls */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-body text-body-md font-bold text-primary whitespace-nowrap">
                      PKR {item.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleQtyChange(item.id, -1)}
                        disabled={qty <= 1}
                        className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-sm font-bold hover:bg-surface-container-high disabled:opacity-40 transition-all"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        −
                      </button>
                      <span className="font-body text-body-sm font-bold text-on-surface w-5 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => handleQtyChange(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center text-sm font-bold hover:bg-surface-container-high transition-all"
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
            <div className="rounded-3xl bg-surface-container-lowest border border-secondary/10 p-6 flex flex-col gap-5 shadow-sm">
              <h3 className="font-display text-title-lg text-on-surface">Your Estimate</h3>

              {selectedEntries.length === 0 ? (
                <p className="font-body text-body-md text-on-surface-variant py-4">
                  Select treatments on the left to build your personalized dental care quote.
                </p>
              ) : (
                <>
                  {/* Line Items */}
                  <div className="flex flex-col gap-3">
                    {selectedEntries.map(([id, item]) => (
                      <div key={id} className="flex items-center justify-between gap-2">
                        <span className="font-body text-body-sm text-on-surface truncate flex-1">
                          {item.name}
                          {item.qty > 1 && (
                            <span className="text-on-surface-variant"> × {item.qty}</span>
                          )}
                        </span>
                        <span className="font-body text-body-sm font-semibold text-on-surface whitespace-nowrap">
                          PKR {(item.price * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <hr className="border-secondary/10" />

                  {/* Grand Total */}
                  <div className="flex items-center justify-between">
                    <span className="font-body text-body-lg font-bold text-on-surface">Grand Total</span>
                    <span className="font-display text-title-lg font-bold text-primary">
                      PKR {grandTotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-surface-container">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                  info
                </span>
                <p className="font-body text-body-sm text-on-surface-variant leading-snug">
                  This is an approximate estimate. Final costs may vary after clinical examination. Consultation is free.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={sendQuoteToWhatsApp}
                  disabled={selectedEntries.length === 0}
                  className="w-full px-6 py-3 rounded-full bg-[#25D366] text-white font-label-caps text-[13px] font-bold flex items-center justify-center gap-2 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Estimate to WhatsApp
                </button>
                <Link
                  href="#smart-booking"
                  className="w-full px-6 py-3 rounded-full bg-primary text-on-primary font-label-caps text-[13px] font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
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
