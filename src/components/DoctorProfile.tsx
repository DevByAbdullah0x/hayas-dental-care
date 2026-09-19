export default function DoctorProfile() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-space-xl px-4 sm:px-6 md:px-margin max-w-7xl mx-auto flex flex-col gap-10 sm:gap-space-xl" id="about">
      {/* Top Row: Doctor Bio & Clinical Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-space-xl items-center">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 relative w-full">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-[#1E6FFF]/20 aspect-square max-w-sm sm:max-w-md mx-auto">
            <img
              alt="Dr. Aayisha Quddus Principal Surgeon"
              className="w-full h-full object-cover"
              src="/dr-aayisha-quddus.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-[#121417]/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
              <div>
                <div className="font-headline-sm text-base sm:text-lg font-bold">Dr. Aayisha Quddus</div>
                <div className="font-label-ui text-xs sm:text-sm text-[#8FCBF2]">BDS (MIHS), RDS (PMDC), C-Ortho</div>
              </div>
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#1E6FFF] text-white font-headline-sm font-bold flex items-center justify-center shadow-[0_0_15px_rgba(30,111,255,0.5)] text-sm sm:text-base flex-shrink-0">
                AQ
              </div>
            </div>
          </div>
        </div>

        {/* Right: Credentials & Bio */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-space-md">
          <div className="inline-flex items-center gap-2 text-[#1E6FFF] font-label-caps text-[11px] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#1E6FFF] animate-pulse"></span>
            Direct Clinical Ownership
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#0f172a] font-semibold tracking-tight leading-tight">
            &ldquo;No patient should ever sit in a dental chair feeling anxious, uninformed, or rushed.&rdquo;
          </h2>
          <p className="font-body-lg text-sm sm:text-base text-slate-600 leading-relaxed">
            At Haya&apos;s Dental Care, every examination and surgical procedure is conducted directly by Dr. Aayisha
            Quddus. With over 8 years of surgical mastery and certified orthodontic expertise from Dentoscope
            International, we practice respectful, conservative dentistry where your natural tooth structure is preserved
            at all costs.
          </p>

          {/* Credentials Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-[#1E6FFF] font-bold">EDUCATION</span>
              <span className="font-title-md text-sm sm:text-[15px] font-semibold text-[#0f172a]">B.D.S — MIHS</span>
              <span className="font-label-caps text-[10px] sm:text-[11px] text-slate-500">
                Margalla Institute of Health Sciences
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-[#1E6FFF] font-bold">REGISTRATION</span>
              <span className="font-title-md text-sm sm:text-[15px] font-semibold text-[#0f172a]">PMDC # 10807-D</span>
              <span className="font-label-caps text-[10px] sm:text-[11px] text-slate-500">
                PMDC Reg · Clinic Reg # 60691
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-[10px] text-[#1E6FFF] font-bold">SPECIALIZATION</span>
              <span className="font-title-md text-sm sm:text-[15px] font-semibold text-[#0f172a]">C-Ortho Certified</span>
              <span className="font-label-caps text-[10px] sm:text-[11px] text-slate-500">
                Orthodontics &amp; Clear Aligner Therapy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Clinical Guarantees */}
      <div className="flex flex-col gap-4 sm:gap-space-md pt-2 sm:pt-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-label-caps text-[10px] sm:text-[11px] text-[#1E6FFF] font-bold tracking-wider uppercase">
            Uncompromising Principles
          </span>
          <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-[#1E6FFF] font-semibold">
            The 4 Haya&apos;s Clinical Guarantees
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-3 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">humidity_mid</span>
            </div>
            <h4 className="font-title-md text-base font-semibold text-[#0f172a]">1. Unrushed Anesthesia</h4>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              Patient-paced topical compound gel followed by ultra-slow micro-vibration delivery. Zero needle shock, zero
              sting.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-3 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">verified_user</span>
            </div>
            <h4 className="font-title-md text-base font-semibold text-[#0f172a]">2. Class-B Autoclave</h4>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hospital-grade vacuum sterilization. Sealed sterile instrument pouches are opened chairside in front of
              your eyes.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-3 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">radiology</span>
            </div>
            <h4 className="font-title-md text-base font-semibold text-[#0f172a]">3. Ultra Low-Dose X-Ray</h4>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              Next-generation digital sensors delivering up to 80% reduced radiation exposure with instant
              high-definition screen review.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-3 hover:shadow-md transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">receipt_long</span>
            </div>
            <h4 className="font-title-md text-base font-semibold text-[#0f172a]">4. Upfront Written Quotes</h4>
            <p className="font-body-md text-xs sm:text-sm text-slate-600 leading-relaxed">
              You receive a printed, itemized breakdown before any tool touches your teeth. Guaranteed no mid-procedure
              hidden add-ons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
