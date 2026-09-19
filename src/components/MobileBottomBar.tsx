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
          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <span className="material-symbols-outlined text-[18px] leading-none w-[18px] h-[18px] flex items-center justify-center text-[#0F5C5E]">
              call
            </span>
          </span>
          <span className="leading-none">Call</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          className="flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl bg-[#F0F5F4] border border-[#0F5C5E]/30 text-[#0F5C5E] text-xs font-semibold hover:bg-[#E2ECE9] active:bg-[#0F5C5E]/10 transition-all whitespace-nowrap"
          href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
          rel="noopener"
          target="_blank"
          aria-label="Chat on WhatsApp"
        >
          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <WhatsAppIcon className="w-[18px] h-[18px] text-[#0F5C5E]" />
          </span>
          <span className="leading-none">WhatsApp</span>
        </a>

        {/* 3. Book Slot Button */}
        <a
          className="flex items-center justify-center gap-1.5 h-11 px-2 rounded-xl bg-[#0F5C5E] hover:bg-[#083F42] active:bg-[#083F42] text-white border border-transparent text-xs font-semibold shadow-soft transition-all whitespace-nowrap"
          href="#smart-booking"
          aria-label="Book appointment slot"
        >
          <span className="w-5 h-5 flex items-center justify-center flex-shrink-0" aria-hidden="true">
            <span className="material-symbols-outlined text-[18px] leading-none w-[18px] h-[18px] flex items-center justify-center text-[#C9A96E]">
              calendar_month
            </span>
          </span>
          <span className="leading-none">Book Slot</span>
        </a>
      </div>
    </aside>
  );
}
