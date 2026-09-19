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
            <svg
              viewBox="1.5 1.5 21 21"
              fill="none"
              stroke="#0F5C5E"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
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
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px]"
            >
              <path d="M8 2v3" />
              <path d="M16 2v3" />
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </span>
          <span className="leading-none">Book Slot</span>
        </a>
      </div>
    </aside>
  );
}
