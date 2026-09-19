export default function MobileBottomBar() {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121417]/98 backdrop-blur-xl border-t border-[#1E6FFF]/25 px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]"
      aria-label="Quick mobile contact actions"
    >
      <a
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/30 text-white font-label-caps text-[10px] active:bg-[#1E6FFF]/20 transition-all min-h-[48px]"
        href="tel:03035452839"
        aria-label="Call Haya's Dental Care"
      >
        <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">call</span>
        <span className="mt-0.5">Call</span>
      </a>

      <a
        className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#1E6FFF]/15 border border-[#1E6FFF]/40 text-[#8FCBF2] font-label-caps text-[10px] active:bg-[#1E6FFF]/30 transition-all min-h-[48px]"
        href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        rel="noopener"
        target="_blank"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">chat</span>
        <span className="mt-0.5">WhatsApp</span>
      </a>

      <a
        className="flex-[1.5] btn-neon flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-label-ui text-xs font-bold shadow-lg text-white min-h-[48px]"
        href="#smart-booking"
        aria-label="Book appointment slot"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        <span>Book Slot</span>
      </a>
    </aside>
  );
}
