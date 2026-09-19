export default function ImplantSpotlight() {
  return (
    <section className="w-full py-space-xl px-margin-mobile md:px-margin max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary p-space-lg md:p-space-xl relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary/30 blur-3xl pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center relative z-10">
          {/* Left Visual: Anatomical Diagram */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest/10 backdrop-blur-md p-6 border border-on-primary/10 flex flex-col items-center gap-6 text-center">
              <div className="relative w-full flex flex-col items-center">
                <div className="w-24 h-16 rounded-t-2xl bg-surface-container-lowest text-primary flex items-center justify-center font-label-caps text-[11px] font-bold shadow-md">
                  Zirconia Crown
                </div>
                <div className="text-[10px] font-label-caps text-secondary-fixed mt-1">
                  1. High Aesthetic Translucency
                </div>
                <div className="w-10 h-6 bg-secondary-fixed-dim/90 rounded-b-md my-1 flex items-center justify-center text-[9px] text-on-secondary-fixed font-bold">
                  Abutment
                </div>
                <div className="text-[10px] font-label-caps text-primary-fixed">
                  2. Precision Medical Coupling
                </div>
                <div className="w-12 h-24 bg-gradient-to-b from-outline-variant to-outline rounded-b-xl flex flex-col items-center justify-around py-1 text-[9px] text-on-background font-mono font-bold shadow-inner">
                  <span className="w-10 h-0.5 bg-primary/20"></span>
                  <span className="w-10 h-0.5 bg-primary/20"></span>
                  <span className="w-10 h-0.5 bg-primary/20"></span>
                  <span className="w-10 h-0.5 bg-primary/20"></span>
                  <span>GRADE-4 Ti</span>
                </div>
                <div className="text-[10px] font-label-caps text-secondary-fixed mt-1">
                  3. Osseointegrated Root Post
                </div>
              </div>
              <div className="w-full p-3 rounded-xl bg-surface-container-lowest/15 text-left text-[12px] font-body-md flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px] flex-shrink-0">
                  verified
                </span>
                <span>100% Biocompatible European Titanium Fixture</span>
              </div>
            </div>
          </div>
          {/* Right: Clinical Advantages */}
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/20 text-secondary-fixed font-label-caps text-label-caps w-fit">
              PERMANENT SOLUTION FOR MISSING TEETH
            </div>
            <h3 className="font-display-hero text-headline-lg font-bold leading-tight">
              Restore Chew Strength &amp; Natural Jawline Architecture.
            </h3>
            <p className="font-body-lg text-body-lg opacity-90 leading-relaxed">
              Unlike bridges that require shaving down neighboring healthy teeth, or removable
              dentures that rock and cause bone resorption, modern dental implants replace the root
              itself.
            </p>
            {/* 4 Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-2">
              <div className="p-3.5 rounded-xl bg-surface-container-lowest/10 border border-on-primary/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Stops Bone Resorption
                  </span>
                  <span className="text-[12px] opacity-80">
                    Stimulates jawbone, preventing sunken facial appearance.
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest/10 border border-on-primary/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Zero Healthy Tooth Damage
                  </span>
                  <span className="text-[12px] opacity-80">
                    Adjacent teeth are never shaved down or crowned.
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest/10 border border-on-primary/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    98.4% Success Rate
                  </span>
                  <span className="text-[12px] opacity-80">
                    Clinically documented permanent osseointegration.
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-lowest/10 border border-on-primary/10 flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-fixed text-[20px] flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-semibold text-white">
                    Eat Pakistani Foods
                  </span>
                  <span className="text-[12px] opacity-80">
                    Bite firm apples, roasted nuts, and seekh kababs naturally.
                  </span>
                </div>
              </div>
            </div>
            {/* Price & CTA */}
            <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border-t border-on-primary/15">
              <div>
                <span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider block">
                  Indicative Starting Fee
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-white">
                  PKR 120,000{" "}
                  <span className="text-[13px] font-normal opacity-80">
                    (Complete Fixture + Crown)
                  </span>
                </span>
              </div>
              <a
                className="px-6 py-3 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-ui text-label-ui font-bold hover:bg-secondary-fixed-dim transition-all shadow-lg"
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
