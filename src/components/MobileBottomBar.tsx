export default function MobileBottomBar() {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121417]/95 backdrop-blur-lg border-t border-[#1E6FFF]/25 px-margin-mobile py-2.5 flex items-center justify-between gap-space-sm shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <a
        className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/30 text-white font-label-caps text-label-caps"
        href="tel:03035452839"
      >
        <span className="material-symbols-outlined text-[20px] text-[#1E6FFF]">call</span>
        <span>Call Clinic</span>
      </a>
      <a
        className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-xl bg-[#1E6FFF]/20 border border-[#1E6FFF]/40 text-[#8FCBF2] font-label-caps text-label-caps"
        href="https://wa.me/923035452839"
        rel="noopener"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[20px] text-[#1E6FFF]">chat</span>
        <span>WhatsApp</span>
      </a>
      <a
        className="flex-[1.4] btn-neon flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl font-label-ui text-label-ui shadow-sm"
        href="#smart-booking"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        <span>Book Slot</span>
      </a>
    </aside>
  );
}
