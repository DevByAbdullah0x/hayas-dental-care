import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function MobileBottomBar() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-xl border-t border-[#DDE5E2] px-3 py-2.5 shadow-[0_-4px_20px_rgba(15,92,94,0.08)]"
      aria-label="Quick mobile contact actions"
    >
      <div className="grid grid-cols-3 gap-2 w-full max-w-lg mx-auto">
        {/* 1. Call Button */}
        <a
          className="flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] text-xs font-semibold hover:border-[#0F5C5E] active:bg-[#EEF6F5] transition-all whitespace-nowrap"
          href="tel:03035452839"
          aria-label="Call Haya's Dental Care"
        >
          <span className="material-symbols-outlined text-[18px] text-[#0F5C5E] flex-shrink-0">call</span>
          <span>Call</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          className="flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl bg-[#F0F5F4] border border-[#0F5C5E]/30 text-[#0F5C5E] text-xs font-semibold hover:bg-[#E2ECE9] active:bg-[#0F5C5E]/10 transition-all whitespace-nowrap"
          href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
          rel="noopener"
          target="_blank"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-4.5 h-4.5 text-[#0F5C5E] flex-shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* 3. Book Slot Button */}
        <a
          className="flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl bg-[#0F5C5E] hover:bg-[#083F42] active:bg-[#083F42] text-white border border-transparent text-xs font-semibold shadow-soft transition-all whitespace-nowrap"
          href="#smart-booking"
          aria-label="Book appointment slot"
        >
          <span className="material-symbols-outlined text-[18px] text-[#C9A96E] flex-shrink-0">calendar_month</span>
          <span>Book Slot</span>
        </a>
      </div>
    </aside>
  );
}
