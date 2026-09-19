export default function WhyUs() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-space-xl px-4 sm:px-6 md:px-margin bg-surface-container-low" id="why-us">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-space-xl">
        {/* 4 Core Pillars - Responsive 1 -> 2 -> 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-sm hover:border-[#1E6FFF]/40 transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[30px]">balance</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-primary">Honest Clinical Guidance</h4>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We never recommend costly crowns or fillings where simple remineralization suffices.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-sm hover:border-[#1E6FFF]/40 transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[30px]">volunteer_activism</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-primary">Painless &amp; Gentle Touch</h4>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Calm operatory pacing with continuous communication throughout your visit.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-sm hover:border-[#1E6FFF]/40 transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[30px]">devices</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-primary">Modern High-Tech Operatory</h4>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Digital apex locators, intraoral high-def cameras, and rotary instrumentation.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-sm hover:border-[#1E6FFF]/40 transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[30px]">person_check</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-primary">100% Doctor Continuity</h4>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Every visit is conducted by Dr. Aayisha herself—never an inexperienced assistant.
            </p>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="flex flex-col gap-4 sm:gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-[10px] sm:text-[11px] text-[#1E6FFF] font-bold tracking-wider uppercase">
              Setting the Gold Standard
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-primary font-semibold">
              How Haya&#39;s Dental Care Compares
            </h3>
            <span className="text-[11px] text-slate-500 sm:hidden flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">swipe</span>
              Scroll horizontally to compare columns
            </span>
          </div>

          {/* Dedicated isolated horizontal scroll container so page viewport NEVER scrolls sideways */}
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
            <div className="min-w-[620px] rounded-2xl overflow-hidden bg-surface-container-lowest border border-[#1E6FFF]/20 shadow-sm">
              <div className="grid grid-cols-12 bg-[#121417] p-4 font-label-caps text-[11px] sm:text-[12px] font-bold text-white tracking-wider border-b border-[#1E6FFF]/30">
                <div className="col-span-4 text-[#A9B1BA]">CLINICAL STANDARD</div>
                <div className="col-span-4 text-[#1E6FFF] text-neon-glow font-extrabold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#1E6FFF]">verified</span> HAYA&#39;S DENTAL CARE (ADIYALA RD)
                </div>
                <div className="col-span-4 text-[#A9B1BA]">TYPICAL HURRIED CLINIC</div>
              </div>

              {/* 5 comparison rows */}
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-primary">Anesthesia Delivery</div>
                <div className="col-span-4 text-[#1E6FFF] font-semibold pr-2">Vibration-assisted, warm-buffered numbing with zero sting</div>
                <div className="col-span-4 text-on-surface-variant">Cold, rushed injection causing needle pain</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-xs sm:text-sm bg-surface-container-low/50">
                <div className="col-span-4 font-semibold text-primary">Sterilization Protocol</div>
                <div className="col-span-4 text-[#1E6FFF] font-semibold pr-2">Class-B vacuum autoclave; pouches opened chairside</div>
                <div className="col-span-4 text-on-surface-variant">Basic hot-water boiling or open UV box</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-primary">Pricing Transparency</div>
                <div className="col-span-4 text-[#1E6FFF] font-semibold pr-2">Itemized written plan before treatment commences</div>
                <div className="col-span-4 text-on-surface-variant">Surprise fee add-ons while in the chair</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-xs sm:text-sm bg-surface-container-low/50">
                <div className="col-span-4 font-semibold text-primary">Treating Surgeon</div>
                <div className="col-span-4 text-[#1E6FFF] font-semibold pr-2">Always Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)</div>
                <div className="col-span-4 text-on-surface-variant">Rotating junior trainee or dental assistant</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-primary">Emergency Toothache Triage</div>
                <div className="col-span-4 text-[#1E6FFF] font-semibold pr-2">Direct WhatsApp helpline with on-call doctor advice</div>
                <div className="col-span-4 text-on-surface-variant">No phone response after closing hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
