export default function ImplantSpotlight() {
  return (
    <section className="w-full py-space-xl px-margin-mobile md:px-margin max-w-7xl mx-auto" id="implants">
      <div className="rounded-3xl bg-[#121417] border border-[#1E6FFF]/30 text-white p-space-lg md:p-space-xl relative overflow-hidden shadow-[0_0_40px_rgba(30,111,255,0.15)]">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1E6FFF]/15 blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          {/* Left Visual: Anatomical Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-[#1B1F24] backdrop-blur-md p-6 border border-[#1E6FFF]/25 flex flex-col items-center gap-6 text-center shadow-[0_0_20px_rgba(30,111,255,0.1)]">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-24 h-16 rounded-t-2xl bg-white text-[#0f172a] flex items-center justify-center font-label-caps text-[11px] font-bold shadow-md">
                  Zirconia Crown
                </div>
                <div className="text-[10px] font-label-caps text-[#8FCBF2] mt-1 font-semibold">
                  1. High Aesthetic Translucency
                </div>
                <div className="w-10 h-6 bg-[#8FCBF2] text-[#002b66] rounded-b-md my-1 flex items-center justify-center text-[9px] font-bold">
                  Abutment
                </div>
                <div className="text-[10px] font-label-caps text-[#1E6FFF] font-semibold">
                  2. Precision Medical Coupling
                </div>
                <div className="w-12 h-24 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-xl flex flex-col items-center justify-around py-1 text-[9px] text-white font-mono font-bold shadow-inner">
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
              <div className="w-full p-3 rounded-xl bg-[#121417] border border-[#1E6FFF]/20 text-left text-[12px] font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0">
                  verified
                </span>
                <span className="text-slate-200">100% Biocompatible European Titanium Fixture</span>
              </div>
            </div>
          </div>

          {/* Right: Clinical Advantages */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E6FFF]/15 border border-[#1E6FFF]/30 text-[#8FCBF2] font-label-caps text-label-caps w-fit font-semibold">
              PERMANENT SOLUTION FOR MISSING TEETH
            </div>
            <h3 className="font-display-hero text-headline-lg font-bold leading-tight text-white">
              Restore Chew Strength &amp; <span className="text-[#1E6FFF] text-neon-glow">Natural Jawline</span> Architecture.
            </h3>
            <p className="font-body-lg text-body-lg text-[#A9B1BA] leading-relaxed">
              Unlike bridges that require shaving down neighboring healthy teeth, or removable
              dentures that rock and cause bone resorption, modern dental implants replace the root
              itself.
            </p>

            {/* 4 Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Stops Bone Resorption
                  </span>
                  <span className="text-[12px] text-[#A9B1BA]">
                    Stimulates jawbone, preventing sunken facial appearance.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Zero Healthy Tooth Damage
                  </span>
                  <span className="text-[12px] text-[#A9B1BA]">
                    Adjacent teeth are never shaved down or crowned.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    98.4% Success Rate
                  </span>
                  <span className="text-[12px] text-[#A9B1BA]">
                    Clinically documented permanent osseointegration.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1B1F24] border border-[#1E6FFF]/20 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1E6FFF] text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Eat Pakistani Foods
                  </span>
                  <span className="text-[12px] text-[#A9B1BA]">
                    Bite firm apples, roasted nuts, and seekh kababs naturally.
                  </span>
                </div>
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border-t border-[#1E6FFF]/20">
              <div>
                <span className="font-label-caps text-label-caps text-[#8FCBF2] uppercase tracking-wider block font-semibold">
                  Indicative Starting Fee
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-white">
                  PKR 120,000{" "}
                  <span className="text-[13px] font-normal text-[#A9B1BA]">
                    (Complete Fixture + Crown)
                  </span>
                </span>
              </div>
              <a
                className="btn-neon px-6 py-3 rounded-full font-label-ui text-label-ui font-bold shadow-lg"
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
