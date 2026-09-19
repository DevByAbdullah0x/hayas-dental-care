import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function MobileBottomBar() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-xl border-t border-[#DDE5E2] px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(15,92,94,0.08)]"
      aria-label="Quick mobile contact actions"
    >
      <a
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] font-label-caps text-[10px] active:bg-[#F0F5F4] transition-all min-h-[48px]"
        href="tel:03035452839"
        aria-label="Call Haya's Dental Care"
      >
        <span className="material-symbols-outlined text-[18px] text-[#0F5C5E]">call</span>
        <span className="mt-0.5 font-semibold">Call</span>
      </a>

      <a
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#F0F5F4] border border-[#0F5C5E]/30 text-[#0F5C5E] font-label-caps text-[10px] font-bold active:bg-[#0F5C5E]/10 transition-all min-h-[48px]"
        href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        rel="noopener"
        target="_blank"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-4.5 h-4.5 text-[#0F5C5E]" />
        <span className="mt-0.5">WhatsApp</span>
      </a>

      <a
        className="flex-[1.5] btn-primary flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-label-ui text-xs font-bold shadow-soft text-white min-h-[48px]"
        href="#smart-booking"
        aria-label="Book appointment slot"
      >
        <span className="material-symbols-outlined text-[18px] text-[#C9A96E]">calendar_month</span>
        <span>Book Slot</span>
      </a>
    </aside>
  );
}
