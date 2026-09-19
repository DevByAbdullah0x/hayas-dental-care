export default function TopBar() {
  return (
    <aside className="w-full bg-[#121417] border-b border-[#1E6FFF]/20 text-[#A9B1BA] text-label-caps font-label-caps tracking-wider px-3 sm:px-6 md:px-margin py-1.5 flex items-center justify-between gap-2 text-xs overflow-hidden">
      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E6FFF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E6FFF]" />
        </span>
        <span className="text-[#8FCBF2] font-semibold text-[10px] sm:text-xs truncate">
          Open Today · Closes 9:30 PM
        </span>
        <span className="hidden md:inline text-[#A9B1BA]/40">|</span>
        <span className="hidden md:inline text-[#A9B1BA] text-[11px] truncate">
          Awami Plaza, Adiyala Rd, Rawalpindi
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
        <a
          className="flex items-center gap-1 text-white hover:text-[#1E6FFF] transition-colors py-1 min-h-[32px] text-[10px] sm:text-xs whitespace-nowrap"
          href="tel:03035452839"
          aria-label="Call clinic at 0303-5452839"
        >
          <span className="material-symbols-outlined text-[13px] sm:text-[14px] text-[#1E6FFF]">call</span>
          <span>0303-5452839</span>
        </a>
        <a
          className="hidden sm:flex items-center gap-1 text-[#8FCBF2] hover:text-white transition-colors py-1 min-h-[32px] text-[11px] sm:text-xs whitespace-nowrap"
          href="https://wa.me/923035452839"
          rel="noopener"
          target="_blank"
          aria-label="Chat with Dr. Aayisha on WhatsApp"
        >
          <span className="material-symbols-outlined text-[14px] text-[#1E6FFF]">chat</span>
          <span>WhatsApp Doctor</span>
        </a>
      </div>
    </aside>
  );
}
