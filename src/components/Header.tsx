"use client";

export default function Header() {
  return (
    <header className="w-full bg-[#121417]/95 backdrop-blur-xl border-b border-[#1E6FFF]/20 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md flex-shrink-0">
          <img
            alt="Haya's Dental Care Logo"
            className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(30,111,255,0.5)]"
            src="/logo.png"
          />
          <div className="flex flex-col">
            <a
              className="font-headline-sm text-headline-sm text-white font-semibold tracking-tight hover:text-[#8FCBF2] transition-colors"
              href="#"
            >
              Haya&apos;s Dental Care
            </a>
            <span className="font-label-caps text-label-caps text-[#A9B1BA] tracking-wider">
              EST. 2019 · RAWALPINDI · DR. AAYISHA QUDDUS
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-md">
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#about">About</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#services-grid">Services</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#implants">Implants</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#calculator-section">Cost Calculator</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#smile-gallery">Smile Gallery</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#why-us">Why Us</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#reviews-section">Reviews</a>
          <a className="text-[#A9B1BA] hover:text-[#1E6FFF] transition-colors font-label-ui text-label-ui px-2 py-1" href="#location-hours">Hours &amp; Location</a>
        </nav>

        <div className="flex items-center gap-space-sm flex-shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-[#8FCBF2] font-label-caps text-label-caps">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E6FFF] animate-pulse"></span>
            <span>Evening Shift active</span>
          </div>
          <a
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B1F24] border border-[#1E6FFF]/30 text-white font-label-ui text-label-ui hover:border-[#1E6FFF] hover:text-[#8FCBF2] transition-colors"
            href="tel:03035452839"
          >
            <span className="material-symbols-outlined text-[16px] text-[#1E6FFF]">call</span>
            <span>0303-5452839</span>
          </a>
          <a
            className="btn-neon inline-flex items-center justify-center px-space-lg py-2.5 rounded-full font-label-ui text-label-ui font-semibold"
            href="#smart-booking"
          >
            Book Appointment
          </a>
          <button
            aria-label="Toggle aesthetic theme"
            className="p-2 rounded-full text-[#A9B1BA] hover:bg-[#1B1F24] hover:text-[#1E6FFF] transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">light_mode</span>
          </button>
          <img
            alt="Dr. Aayisha Quddus"
            className="w-8 h-8 rounded-full object-cover ml-1 border-2 border-[#1E6FFF]/60 shadow-[0_0_8px_rgba(30,111,255,0.4)]"
            src="/dr-aayisha-quddus.jpg"
          />
        </div>
      </div>
    </header>
  );
}
