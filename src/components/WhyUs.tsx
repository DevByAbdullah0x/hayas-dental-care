export default function WhyUs() {
  return (
    <section className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface-container-low" id="why-us">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
          <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-secondary/10 flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-[32px]">balance</span>
            <h4 className="font-title-md text-title-md font-bold text-primary">Honest Clinical Guidance</h4>
            <p className="font-body-md text-[13px] text-on-surface-variant">We never recommend costly crowns or fillings where simple remineralization suffices.</p>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-secondary/10 flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-[32px]">volunteer_activism</span>
            <h4 className="font-title-md text-title-md font-bold text-primary">Painless &amp; Gentle Touch</h4>
            <p className="font-body-md text-[13px] text-on-surface-variant">Calm operatory pacing with continuous communication throughout your visit.</p>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-secondary/10 flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-[32px]">devices</span>
            <h4 className="font-title-md text-title-md font-bold text-primary">Modern High-Tech Operatory</h4>
            <p className="font-body-md text-[13px] text-on-surface-variant">Digital apex locators, intraoral high-def cameras, and rotary instrumentation.</p>
          </div>
          <div className="p-space-md rounded-2xl bg-surface-container-lowest border border-secondary/10 flex flex-col gap-2">
            <span className="material-symbols-outlined text-secondary text-[32px]">person_check</span>
            <h4 className="font-title-md text-title-md font-bold text-primary">100% Doctor Continuity</h4>
            <p className="font-body-md text-[13px] text-on-surface-variant">Every visit is conducted by Dr. Aayisha herself—never an inexperienced assistant.</p>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-label-caps text-secondary font-bold tracking-wider uppercase">Setting the Gold Standard</span>
            <h3 className="font-headline-md text-headline-md text-primary font-semibold">How Haya&#39;s Dental Care Compares</h3>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[640px] rounded-2xl overflow-hidden bg-surface-container-lowest border border-secondary/15 shadow-sm">
              <div className="grid grid-cols-12 bg-surface-container-high p-4 font-label-caps text-[12px] font-bold text-primary tracking-wider border-b border-outline-variant/30">
                <div className="col-span-4">CLINICAL STANDARD</div>
                <div className="col-span-4 text-secondary font-extrabold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span> HAYA&#39;S DENTAL CARE (ADIYALA RD)
                </div>
                <div className="col-span-4 text-on-surface-variant">TYPICAL HURRIED CLINIC</div>
              </div>

              {/* 5 comparison rows */}
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-body-md">
                <div className="col-span-4 font-semibold text-primary">Anesthesia Delivery</div>
                <div className="col-span-4 text-secondary font-medium">Vibration-assisted, warm-buffered numbing with zero sting</div>
                <div className="col-span-4 text-on-surface-variant">Cold, rushed injection causing needle pain</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-body-md bg-surface-container-low/30">
                <div className="col-span-4 font-semibold text-primary">Sterilization Protocol</div>
                <div className="col-span-4 text-secondary font-medium">Class-B vacuum autoclave; pouches opened chairside</div>
                <div className="col-span-4 text-on-surface-variant">Basic hot-water boiling or open UV box</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-body-md">
                <div className="col-span-4 font-semibold text-primary">Pricing Transparency</div>
                <div className="col-span-4 text-secondary font-medium">Itemized written plan before treatment commences</div>
                <div className="col-span-4 text-on-surface-variant">Surprise fee add-ons while in the chair</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center border-b border-surface-container text-body-md bg-surface-container-low/30">
                <div className="col-span-4 font-semibold text-primary">Treating Surgeon</div>
                <div className="col-span-4 text-secondary font-medium">Always Dr. Aayisha Quddus (BDS, MIHS, RDS, C-Ortho)</div>
                <div className="col-span-4 text-on-surface-variant">Rotating junior trainee or dental assistant</div>
              </div>
              <div className="grid grid-cols-12 p-4 items-center text-body-md">
                <div className="col-span-4 font-semibold text-primary">Emergency Toothache Triage</div>
                <div className="col-span-4 text-secondary font-medium">Direct WhatsApp helpline with on-call doctor advice</div>
                <div className="col-span-4 text-on-surface-variant">No phone response after closing hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
