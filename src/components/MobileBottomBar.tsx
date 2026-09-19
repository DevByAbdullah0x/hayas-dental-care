export default function MobileBottomBar() {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg px-margin-mobile py-2.5 flex items-center justify-between gap-space-sm shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <a
        className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-xl bg-surface-container text-primary font-label-caps text-label-caps"
        href="tel:03035452839"
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
        <span>Call Clinic</span>
      </a>
      <a
        className="flex-1 flex flex-col items-center justify-center py-1.5 rounded-xl bg-secondary-container text-on-secondary-container font-label-caps text-label-caps"
        href="https://wa.me/923035452839"
        rel="noopener"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span>WhatsApp</span>
      </a>
      <a
        className="flex-[1.4] flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-primary-container text-on-primary font-label-ui text-label-ui shadow-sm"
        href="#smart-booking"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
        <span>Book Slot</span>
      </a>
    </aside>
  );
}
