import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ImplantSpotlight() {
  return (
    <section className="w-full bg-[#FFFFFF] py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin border-b border-[#DDE5E2] scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32" id="implants">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#083F42] text-white p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden shadow-soft-lg border border-[#0F5C5E]/40">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0F5C5E]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#C9A96E]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left Visual: Anatomical Structural Architecture */}
            <div className="lg:col-span-5 flex flex-col items-center w-full">
              <div className="w-full max-w-sm rounded-3xl bg-[#FFFFFF] p-6 sm:p-8 border border-[#DDE5E2] flex flex-col items-center text-center shadow-soft-lg">
                <div className="relative w-full flex flex-col items-center">
                  {/* Zirconia Crown */}
                  <div className="w-32 h-16 rounded-t-2xl bg-[#F8F6F1] border border-[#DDE5E2] text-[#083F42] flex items-center justify-center font-display text-xs font-bold shadow-xs">
                    Zirconia Crown
                  </div>
                  <div className="text-[10px] font-label-caps text-[#0F5C5E] mt-1.5 font-bold tracking-wider uppercase">
                    1. High Translucency Aesthetic Cap
                  </div>

                  {/* Abutment */}
                  <div className="w-14 h-6 bg-[#C9A96E]/20 text-[#856124] border border-[#C9A96E]/40 rounded-b-md my-1.5 flex items-center justify-center text-[10px] font-bold">
                    Abutment
                  </div>
                  <div className="text-[10px] font-label-caps text-[#856124] font-bold tracking-wider uppercase">
                    2. Precision Medical Coupling
                  </div>

                  {/* Titanium Post */}
                  <div className="w-14 h-24 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-b-xl flex flex-col items-center justify-around py-1 text-[9px] text-white font-mono font-bold shadow-inner my-1.5">
                    <span className="w-10 h-0.5 bg-white/40"></span>
                    <span className="w-10 h-0.5 bg-white/40"></span>
                    <span className="w-10 h-0.5 bg-white/40"></span>
                    <span className="w-10 h-0.5 bg-white/40"></span>
                    <span>GRADE-4 Ti</span>
                  </div>
                  <div className="text-[10px] font-label-caps text-[#0F5C5E] mt-1 font-bold tracking-wider uppercase">
                    3. Osseointegrated Root Post
                  </div>
                </div>

                <div className="w-full mt-4 p-3 rounded-xl bg-[#EEF6F5] border border-[#0F5C5E]/20 text-left text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0F5C5E] text-[18px] flex-shrink-0">
                    verified
                  </span>
                  <span className="text-[#083F42] font-semibold text-[11px]">
                    100% Biocompatible European Titanium
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative, Benefits Checklist, Pricing & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-xs sm:text-[13px] text-[#C9A96E] font-bold tracking-[0.2em] uppercase">
                  Smile Restoration
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                  Replace the tooth. <br />
                  <span className="text-[#C9A96E] italic font-normal">
                    Not your confidence.
                  </span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#DDE5E2]/80 leading-relaxed max-w-xl">
                Unlike removable dentures that rock or bridges requiring adjacent healthy teeth
                to be shaved down, modern dental implants replace the root itself—stimulating
                bone regeneration and restoring 100% natural chewing capacity.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DDE5E2]">
                  <span className="text-[#C9A96E] font-bold text-base leading-none">✓</span>
                  <span>European grade-4 titanium fixture</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DDE5E2]">
                  <span className="text-[#C9A96E] font-bold text-base leading-none">✓</span>
                  <span>Monolithic zirconia crown (5-year lab guarantee)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DDE5E2]">
                  <span className="text-[#C9A96E] font-bold text-base leading-none">✓</span>
                  <span>Stops jawbone resorption &amp; sunken facial look</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#DDE5E2]">
                  <span className="text-[#C9A96E] font-bold text-base leading-none">✓</span>
                  <span>Natural chewing force restored completely</span>
                </div>
              </div>

              {/* Price & Primary CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-[#0F5C5E]/50">
                <div>
                  <span className="font-label-caps text-[10px] sm:text-[11px] text-[#C9A96E] uppercase tracking-wider block font-semibold">
                    Indicative Starting Fee
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-bold text-white">
                    PKR 120,000{" "}
                    <span className="text-xs sm:text-sm font-normal text-[#DDE5E2]/70 font-sans">
                      (Complete Fixture + Crown)
                    </span>
                  </span>
                </div>

                <a
                  className="btn-primary w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm text-white shadow-soft text-center min-h-[48px] flex items-center justify-center gap-2.5"
                  href="https://wa.me/923035452839?text=Hello%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20consult%20regarding%20Dental%20Implants."
                  rel="noopener"
                  target="_blank"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Discuss Your Implant →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
