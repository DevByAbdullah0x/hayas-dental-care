"use client";

export default function Header() {
  return (
    <header className="w-full bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-md flex-shrink-0">
          <img
            alt="Haya's Dental Care Geometric Tooth Monogram"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X2WDP0h04alXNRishn50onF6nhqCQ745bCvf29s5biThWN8AL9IGCNwmbB1K5QOCLnB8h772MfasKAKy6U-mEAAX_nXymahBDFGmbiyrPjPSXV7USWqhhj303ghiyyW3pfE0LGk0LHxXg7V5yptEMidhLJyRqNt3Q7MlXhUvqY0ycTKU0b3533JMGmEpy0uUgHOZmqBvmHS_Qvk2TXZxwTU-2R2mnN324I_2HhNrhn4iSA7whz_s5Mfg"
          />
          <div className="flex flex-col">
            <a
              className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight hover:opacity-90 transition-opacity"
              href="#"
            >
              Haya&apos;s Dental Care
            </a>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider">
              EST. 2019 · RAWALPINDI · DR. AAYISHA QUDDUS
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-md">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#about">About</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#services-grid">Services</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#implants">Implants</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#calculator-section">Cost Calculator</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#smile-gallery">Smile Gallery</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#why-us">Why Us</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#reviews-section">Reviews</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-ui text-label-ui px-2 py-1" href="#location-hours">Hours &amp; Location</a>
        </nav>

        <div className="flex items-center gap-space-sm flex-shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Evening Shift active</span>
          </div>
          <a
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container-low text-primary font-label-ui text-label-ui hover:bg-surface-container-high transition-colors"
            href="tel:03035452839"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>0303-5452839</span>
          </a>
          <a
            className="inline-flex items-center justify-center px-space-lg py-2.5 rounded-full bg-primary-container text-on-primary font-label-ui text-label-ui hover:bg-primary transition-all shadow-[0_8px_20px_-4px_rgba(20,184,166,0.35)]"
            href="#smart-booking"
          >
            Book Appointment
          </a>
          <button
            aria-label="Toggle aesthetic theme"
            className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">light_mode</span>
          </button>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ml-1"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1UzSaZd0uIDbn7yQcH-fAPz3-x1l0nYy43EG4bomdyMQhrLjZ3bPR0Ncu9bbl0Cb5GxNhXnw8TJct5Jmn93cU8ro5TgjyTrf-_YZk-OD0g8KdZs0t-SQcWifEKQOefIQpVmFqlkSwpcWd75NCJ2zETKJi-Z_ROH444cdWJYurPp31jRkQRwQxA1yoNIPRitN0a5WeX3BLBLal_2ULYkJmYCyLOPDT4pM4gUnK9HNN_Pq52dPON1hR"
          />
        </div>
      </div>
    </header>
  );
}
