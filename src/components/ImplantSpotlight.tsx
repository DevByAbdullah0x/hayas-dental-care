export default function ImplantSpotlight() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-space-xl px-4 sm:px-6 md:px-margin max-w-7xl mx-auto" id="implants">
      <div className="rounded-3xl bg-[#121417] border border-[#1E6FFF]/30 text-white p-5 sm:p-8 md:p-10 lg:p-space-xl relative overflow-hidden shadow-[0_0_40px_rgba(30,111,255,0.15)]">
        <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#1E6FFF]/15 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-space-xl items-center relative z-10">
          {/* Left Visual: Anatomical Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <div className="w-full max-w-sm rounded-2xl bg-[#1B1F24] backdrop-blur-md p-5 sm:p-6 border border-[#1E6FFF]/25 flex flex-col items-center gap-5 text-center shadow-[0_0_20px_rgba(30,111,255,0.1)]">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-24 h-16 rounded-t-2xl bg-white text-[#0f172a] flex items-center justify-center font-label-caps text-[11px] font-bold shadow-md">
                  Zirconia Crown
                </div>
                <div className="text-[10px] font-label-caps text-[#8FCBF2] mt-1.5 font-semibold">
                  1. High Aesthetic Translucency
                </div>

                <div className="w-10 h-6 bg-[#8FCBF2] text-[#002b66] rounded-b-md my-1.5 flex items-center justify-center text-[9px] font-bold">
                  Abutment
                </div>
                <div className="text-[10px] font-label-caps text-[#1E6FFF] font-semibold">
                  2. Precision Medical Coupling
                </div>

                <div className="w-12 h-24 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-xl flex flex-col items-center justify-around py-1 text-[9px] text-white font-mono font-bold shadow-inner my-1.5">
                  <span className="w-10 h-0.5 bg-white/30"></span>
                  <span className="w-10 h-0.5 bg-white/30"></span>
                  <span className="w-10 h-0.5 bg-white/30"></span>
                  <span className="w-10 h-0.5 bg-white/30"></span>
                  <span>GRADE-4 Ti</span>
                </div>
                <div className="text-[10px] font-label-caps text-[#8FCBF2] mt-1 font-semibold">
                  3. Osseointegrated Root Post
                </div>
              </div>

              <div className="w-full p-3 rounded-xl bg-[#121417] border border-[#1E6FFF]/20 text-left text-xs font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0">
                  verified
                </span>
                <span className="text-slate-200">100% Biocompatible European Titanium Fixture</span>
              </div>
            </div>
          </div>

          {/* Right: Clinical Advantages */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E6FFF]/15 border border-[#1E6FFF]/30 text-[#8FCBF2] font-label-caps text-[10px] sm:text-[11px] w-fit font-semibold">
              PERMANENT SOLUTION FOR MISSING TEETH
            </div>

            <h3 className="font-display-hero text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
              Restore Chew Strength &amp; <span className="text-[#1E6FFF] text-neon-glow">Natural Jawline</span> Architecture.
            </h3>

            <p className="font-body-lg text-xs sm:text-sm md:text-base text-[#A9B1BA] leading-relaxed">
              Unlike bridges that require shaving down neighboring healthy teeth, or removable
              dentures that rock and cause bone resorption, modern dental implants replace the root
              itself.
            </p>

            {/* 4 Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm font-semibold text-white">
                    Stops Bone Resorption
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A9B1BA] mt-0.5">
                    Stimulates jawbone, preventing sunken facial appearance.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm font-semibold text-white">
                    Zero Healthy Tooth Damage
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A9B1BA] mt-0.5">
                    Adjacent teeth are never shaved down or crowned.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm font-semibold text-white">
                    98.4% Success Rate
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A9B1BA] mt-0.5">
                    Clinically documented permanent osseointegration.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-xs sm:text-sm font-semibold text-white">
                    Eat Pakistani Foods
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A9B1BA] mt-0.5">
                    Bite firm apples, roasted nuts, and seekh kababs naturally.
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#1E6FFF]/20">
              <div>
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#8FCBF2] uppercase tracking-wider block font-semibold">
                  Indicative Starting Fee
                </span>
                <span className="font-headline-sm text-lg sm:text-xl md:text-2xl font-bold text-white">
                  PKR 120,000{" "}
                  <span className="text-xs sm:text-[13px] font-normal text-[#A9B1BA]">
                    (Complete Fixture + Crown)
                  </span>
                </span>
              </div>
              <a
                className="btn-neon w-full sm:w-auto px-6 py-3.5 rounded-full font-label-ui text-xs sm:text-sm font-bold text-white shadow-lg text-center min-h-[44px] flex items-center justify-center"
                href="https://wa.me/923035452839?text=Hello%20Dr.%20Aayisha%2C%20I%20would%20like%20to%20consult%20regarding%20Dental%20Implants."
                rel="noopener"
                target="_blank"
              >
                Consult on Implants
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
