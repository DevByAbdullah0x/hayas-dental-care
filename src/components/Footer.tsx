import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xl pb-12 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl mb-12">
          {/* Column 1: Identity */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Haya's Dental Care Geometric Tooth Monogram"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1X2WDP0h04alXNRishn50onF6nhqCQ745bCvf29s5biThWN8AL9IGCNwmbB1K5QOCLnB8h772MfasKAKy6U-mEAAX_nXymahBDFGmbiyrPjPSXV7USWqhhj303ghiyyW3pfE0LGk0LHxXg7V5yptEMidhLJyRqNt3Q7MlXhUvqY0ycTKU0b3533JMGmEpy0uUgHOZmqBvmHS_Qvk2TXZxwTU-2R2mnN324I_2HhNrhn4iSA7whz_s5Mfg"
              />
              <span className="font-headline-sm text-headline-sm text-primary font-bold">Haya&apos;s Dental Care</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              A premier sanctuary for restorative aesthetics, precision oral surgery, and dental implantology under the expert clinical guidance of Dr. Aayisha Quddus.
            </p>
            <div className="inline-flex items-center gap-space-sm p-space-md rounded-2xl bg-surface-container">
              <span className="material-symbols-outlined text-secondary text-[28px]">verified</span>
              <div>
                <div className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">
                  PMDC Verified Surgeon
                </div>
                <div className="font-label-ui text-label-ui font-semibold text-primary">Registration # 64912-D</div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-primary">Clinical Navigation</h4>
            <nav className="flex flex-col gap-space-sm">
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#services-grid">
                Cosmetic Smile Design
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#implants">
                Dental Implants &amp; Surgery
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#calculator-section">
                Interactive Treatment Estimator
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#smile-gallery">
                Clinical Before &amp; Afters
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#why-us">
                Sterilization Protocols
              </a>
              <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#reviews-section">
                Patient Testimonials
              </a>
            </nav>
          </div>

          {/* Column 3: Hours */}
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-primary">Operating Hours</h4>
            <div className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <div>
                <span className="font-semibold text-on-surface block">Mon – Sat:</span>
                <span>3:30 PM – 9:30 PM</span>
              </div>
              <div className="pt-space-xs">
                <span className="font-semibold text-on-surface block">Sunday:</span>
                <span className="text-outline">Closed (Emergencies on call)</span>
              </div>
              <div className="pt-space-sm">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container font-label-caps text-label-caps text-secondary">
                  Evening Clinic Practice
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Emergency & Location */}
          <div className="lg:col-span-3 flex flex-col gap-space-md">
            <h4 className="font-title-md text-title-md text-primary">Emergency &amp; Location</h4>
            <div className="p-space-md rounded-2xl bg-surface-container-high flex flex-col gap-space-xs">
              <span className="font-label-caps text-label-caps text-error tracking-wider uppercase font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">emergency</span> Urgent Toothache Hotline
              </span>
              <a className="font-headline-sm text-headline-sm text-primary font-bold hover:text-secondary transition-colors" href="tel:03035452839">
                0303-5452839
              </a>
              <span className="font-label-ui text-label-ui text-on-surface-variant">
                Direct priority triage via WhatsApp or Call
              </span>
            </div>
            <div className="font-body-md text-body-md text-on-surface-variant flex items-start gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary flex-shrink-0 mt-0.5">location_on</span>
              <span>Basement D, Awami Plaza, Main Adiyala Road, Rawalpindi, Punjab, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-label-ui text-label-ui text-on-surface-variant border-t border-surface-container-high">
          <p>© 2024 Haya&apos;s Dental Care. All rights reserved. Directed by Dr. Aayisha Quddus (BDS, RDS).</p>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-primary transition-colors" href="#">
              Sterilization &amp; Privacy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Patient Guide
            </a>
            <a className="hover:text-primary transition-colors" href="#location-hours">
              Find Clinic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
