import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function TopBar() {
  return (
    <aside className="w-full bg-[#083F42] border-b border-[#0F5C5E]/40 text-[#DDE5E2] font-label-caps tracking-wider text-xs overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 truncate">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A96E] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A96E]" />
          </span>
          <span className="text-[#C9A96E] font-semibold text-[10px] sm:text-xs truncate">
            Open Today · Closes 9:30 PM
          </span>
          <span className="hidden md:inline text-white/25">|</span>
          <span className="hidden md:inline text-[#DDE5E2]/80 text-[11px] truncate">
            Awami Plaza, Adiyala Rd, Rawalpindi
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          <a
            className="flex items-center gap-1.5 text-white hover:text-[#C9A96E] transition-colors py-1 min-h-[32px] text-[10px] sm:text-xs whitespace-nowrap"
            href="tel:03035452839"
            aria-label="Call clinic at 0303-5452839"
          >
            <span className="material-symbols-outlined text-[14px] text-[#C9A96E]">call</span>
            <span>0303-5452839</span>
          </a>
          <a
            className="hidden sm:flex items-center gap-1.5 text-[#C9A96E] hover:text-white transition-colors py-1 min-h-[32px] text-[11px] sm:text-xs whitespace-nowrap font-medium"
            href="https://wa.me/923035452839"
            rel="noopener"
            target="_blank"
            aria-label="Chat with Dr. Aayisha on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span>WhatsApp Doctor</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
