export default function TopBar() {
  return (
    <aside className="w-full bg-primary text-on-primary text-label-caps font-label-caps tracking-wider px-margin-mobile md:px-margin py-1.5 flex flex-wrap items-center justify-between gap-2 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-space-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed" />
        </span>
        <span className="text-primary-fixed">Open Now · Closes at 9:30 PM PKT</span>
        <span className="hidden sm:inline text-on-primary-container opacity-50">|</span>
        <span className="hidden sm:inline text-on-primary-container truncate max-w-xs md:max-w-md">
          Basement D, Awami Plaza, Adiyala Rd, Rawalpindi
        </span>
      </div>
      <div className="flex items-center gap-space-md ml-auto">
        <a
          className="flex items-center gap-1 hover:text-secondary-fixed transition-colors text-on-primary"
          href="tel:03035452839"
        >
          <span className="material-symbols-outlined text-[14px]">call</span>
          <span>0303-5452839</span>
        </a>
        <a
          className="hidden md:flex items-center gap-1 text-secondary-fixed hover:text-on-primary transition-colors"
          href="https://wa.me/923035452839"
          rel="noopener"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[14px]">chat</span>
          <span>WhatsApp Doctor</span>
        </a>
      </div>
    </aside>
  );
}
