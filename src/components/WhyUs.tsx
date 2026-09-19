export default function WhyUs() {
  return (
    <section className="w-full py-14 sm:py-18 md:py-20 px-4 sm:px-6 md:px-margin bg-[#F0F5F4] border-b border-[#DDE5E2]" id="why-us">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-space-xl">
        {/* 4 Core Pillars - Responsive 1 -> 2 -> 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft hover:border-[#0F5C5E]/50 hover:shadow-soft-lg transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[30px]">balance</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-[#083F42]">Honest Clinical Guidance</h4>
            <p className="font-body-md text-xs sm:text-sm text-[#647070] leading-relaxed">
              We never recommend costly crowns or fillings where simple remineralization suffices.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft hover:border-[#0F5C5E]/50 hover:shadow-soft-lg transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[30px]">volunteer_activism</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-[#083F42]">Painless &amp; Gentle Touch</h4>
            <p className="font-body-md text-xs sm:text-sm text-[#647070] leading-relaxed">
              Calm operatory pacing with continuous communication throughout your visit.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft hover:border-[#0F5C5E]/50 hover:shadow-soft-lg transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[30px]">devices</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-[#083F42]">Modern High-Tech Operatory</h4>
            <p className="font-body-md text-xs sm:text-sm text-[#647070] leading-relaxed">
              Digital apex locators, intraoral high-def cameras, and rotary instrumentation.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft hover:border-[#0F5C5E]/50 hover:shadow-soft-lg transition-all flex flex-col gap-2.5">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[30px]">person_check</span>
            <h4 className="font-title-md text-base sm:text-lg font-bold text-[#083F42]">100% Doctor Continuity</h4>
            <p className="font-body-md text-xs sm:text-sm text-[#647070] leading-relaxed">
              Every visit is conducted by Dr. Aayisha herself—never an inexperienced assistant.
            </p>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="flex flex-col gap-4 sm:gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-[10px] sm:text-[11px] text-[#0F5C5E] font-bold tracking-wider uppercase">
              Setting the Gold Standard
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-[#083F42] font-semibold">
              How Haya&#39;s Dental Care Compares
            </h3>
            <span className="text-[11px] text-[#647070] sm:hidden flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">swipe</span>
              Scroll horizontally to compare columns
            </span>
          </div>

          {/* Dedicated isolated horizontal scroll container */}
          <div className="overflow-x-auto w-full pb-2">
            <div className="min-w-[620px] rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft">
              <div className="grid grid-cols-12 bg-[#083F42] p-4 font-label-caps text-[11px] sm:text-[12px] font-bold text-white tracking-wider border-b border-[#0F5C5E]/30">
                <div className="col-span-4 text-[#DDE5E2]">CLINICAL STANDARD</div>
                <div className="col-span-4 text-[#C9A96E] font-extrabold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#C9A96E]">verified</span> HAYA&#39;S DENTAL CARE
                </div>
                <div className="col-span-4 text-[#DDE5E2]/80">TYPICAL HURRIED CLINIC</div>
              </div>

              {/* 5 comparison rows */}
              <div className="grid grid-cols-12 p-4 items-center border-b border-[#DDE5E2] text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-[#083F42]">Anesthesia Delivery</div>
                <div className="col-span-4 text-[#0F5C5E] font-semibold pr-2">Vibration-assisted, warm-buffered numbing with zero sting</div>
                <div className="col-span-4 text-[#647070]">Cold, rushed injection causing needle pain</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-[#DDE5E2] text-xs sm:text-sm bg-[#F8F6F1]/50">
                <div className="col-span-4 font-semibold text-[#083F42]">Sterilization Protocol</div>
                <div className="col-span-4 text-[#0F5C5E] font-semibold pr-2">Class-B vacuum autoclave; pouches opened chairside</div>
                <div className="col-span-4 text-[#647070]">Basic hot-water boiling or open UV box</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-[#DDE5E2] text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-[#083F42]">Pricing Transparency</div>
                <div className="col-span-4 text-[#0F5C5E] font-semibold pr-2">Itemized written plan before treatment commences</div>
                <div className="col-span-4 text-[#647070]">Surprise fee add-ons while in the chair</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-[#DDE5E2] text-xs sm:text-sm bg-[#F8F6F1]/50">
                <div className="col-span-4 font-semibold text-[#083F42]">Treating Surgeon</div>
                <div className="col-span-4 text-[#0F5C5E] font-semibold pr-2">Always Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)</div>
                <div className="col-span-4 text-[#647070]">Rotating junior trainee or dental assistant</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center text-xs sm:text-sm">
                <div className="col-span-4 font-semibold text-[#083F42]">Emergency Toothache Triage</div>
                <div className="col-span-4 text-[#0F5C5E] font-semibold pr-2">Direct WhatsApp helpline with on-call doctor advice</div>
                <div className="col-span-4 text-[#647070]">No phone response after closing hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
