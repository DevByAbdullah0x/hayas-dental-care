export default function WhyUs() {
  return (
    <section
      className="w-full py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin bg-[#F8F6F1] border-b border-[#DDE5E2]"
      id="why-us"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14 sm:gap-18">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start gap-3 max-w-2xl">
          <span className="font-label-caps text-xs sm:text-[13px] text-[#0F5C5E] font-bold tracking-[0.2em] uppercase">
            Clinical Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#083F42] font-semibold tracking-tight leading-tight">
            Dentistry without the anxiety.
          </h2>
          <p className="text-sm sm:text-base text-[#647070] leading-relaxed mt-1">
            We practice respectful, conservative dentistry under strict Swiss clinical
            standards—preserving natural tooth structure and eliminating fear through
            gentle technique and transparent care.
          </p>
        </div>

        {/* 4 Elegant Numbered Feature Blocks with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-b border-[#DDE5E2] py-10 sm:py-12">
          {/* 01 Gentle Anesthesia */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl sm:text-4xl font-normal text-[#C9A96E] tracking-tight">
              01
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px]">
                volunteer_activism
              </span>
              <h3 className="font-display text-lg font-bold text-[#083F42]">
                Gentle Anesthesia
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#647070] leading-relaxed">
              Vibration-assisted, warm-buffered numbing designed to eliminate sudden
              needle shock and make every procedure calm and comfortable.
            </p>
          </div>

          {/* 02 Class-B Sterilization */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl sm:text-4xl font-normal text-[#C9A96E] tracking-tight">
              02
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px]">
                sanitizer
              </span>
              <h3 className="font-display text-lg font-bold text-[#083F42]">
                Class-B Sterilization
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#647070] leading-relaxed">
              European hospital-grade vacuum autoclave cycle. Every instrument is
              hermetically sealed and unsealed chairside in front of you.
            </p>
          </div>

          {/* 03 Digital Diagnostics */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl sm:text-4xl font-normal text-[#C9A96E] tracking-tight">
              03
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px]">
                devices
              </span>
              <h3 className="font-display text-lg font-bold text-[#083F42]">
                Digital Diagnostics
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#647070] leading-relaxed">
              Ultra-low radiation imaging and electronic apex locators for pinpoint
              surgical accuracy while safeguarding delicate tissues.
            </p>
          </div>

          {/* 04 Transparent Pricing */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-3xl sm:text-4xl font-normal text-[#C9A96E] tracking-tight">
              04
            </span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px]">
                receipt_long
              </span>
              <h3 className="font-display text-lg font-bold text-[#083F42]">
                Transparent Pricing
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#647070] leading-relaxed">
              Full itemized cost breakdown explained before starting any procedure.
              Zero hidden consumables fees or surprise bills.
            </p>
          </div>
        </div>

        {/* Comparative Table */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-[11px] text-[#0F5C5E] font-bold tracking-[0.15em] uppercase">
              Setting The Standard
            </span>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-[#083F42] font-semibold">
              How Haya&apos;s Dental Care Compares
            </h3>
            <span className="text-[11px] text-[#647070] sm:hidden flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">swipe</span>
              Scroll horizontally to compare standards
            </span>
          </div>

          {/* Dedicated isolated horizontal scroll container */}
          <div className="overflow-x-auto w-full pb-2">
            <div className="min-w-[620px] rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft">
              <div className="grid grid-cols-12 bg-[#083F42] p-4 font-label-caps text-[11px] sm:text-[12px] font-bold text-white tracking-wider border-b border-[#0F5C5E]/30">
                <div className="col-span-4 text-[#DDE5E2]">CLINICAL STANDARD</div>
                <div className="col-span-4 text-[#C9A96E] font-extrabold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#C9A96E]">verified</span> HAYA&apos;S DENTAL CARE
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
