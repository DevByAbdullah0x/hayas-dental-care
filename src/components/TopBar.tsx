export default function TopBar() {
  return (
    <aside className="w-full bg-[#121417] border-b border-[#1E6FFF]/20 text-[#A9B1BA] text-label-caps font-label-caps tracking-wider px-margin-mobile md:px-margin py-1.5 flex flex-wrap items-center justify-between gap-2">
      <div className="flex items-center gap-space-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1E6FFF] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1E6FFF]" />
        </span>
        <span className="text-[#8FCBF2] font-semibold">Open Now · Closes at 9:30 PM PKT</span>
        <span className="hidden sm:inline text-[#A9B1BA]/40">|</span>
        <span className="hidden sm:inline text-[#A9B1BA] truncate max-w-xs md:max-w-md">
          Basement D, Awami Plaza, Adiyala Rd, Rawalpindi
        </span>
      </div>
      <div className="flex items-center gap-space-md ml-auto">
        <a
          className="flex items-center gap-1 text-[#FFFFFF] hover:text-[#1E6FFF] transition-colors"
          href="tel:03035452839"
        >
          <span className="material-symbols-outlined text-[14px] text-[#1E6FFF]">call</span>
          <span>0303-5452839</span>
        </a>
        <a
          className="hidden md:flex items-center gap-1 text-[#8FCBF2] hover:text-white transition-colors"
          href="https://wa.me/923035452839"
          rel="noopener"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[14px] text-[#1E6FFF]">chat</span>
          <span>WhatsApp Doctor</span>
        </a>
      </div>
    </aside>
  );
}
