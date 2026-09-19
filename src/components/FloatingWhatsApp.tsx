import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <aside
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center"
      aria-label="Direct WhatsApp Consultation"
    >
      <a
        href="https://wa.me/923035452839?text=Assalam-o-Alaikum%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
        target="_blank"
        rel="noopener"
        aria-label="Direct WhatsApp Doctor Consultation"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all duration-200 font-label-ui text-xs font-bold"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </div>
        <span>WhatsApp Doctor</span>
      </a>
    </aside>
  );
}

