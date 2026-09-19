export default function DoctorProfile() {
  return (
    <section className="w-full py-space-xl px-margin-mobile md:px-margin max-w-7xl mx-auto flex flex-col gap-space-xl" id="about">
      {/* Top Row: Doctor Bio & Clinical Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Left: Portrait */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 shadow-xl border border-[#1E6FFF]/20 aspect-square max-w-md mx-auto">
            <img
              alt="Dr. Aayisha Quddus Principal Surgeon"
              className="w-full h-full object-cover"
              src="/dr-aayisha-quddus.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417]/90 via-[#121417]/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
              <div>
                <div className="font-headline-sm text-headline-sm font-bold">Dr. Aayisha Quddus</div>
                <div className="font-label-ui text-label-ui text-[#8FCBF2]">BDS (MIHS), RDS (PMDC), C-Ortho</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#1E6FFF] text-white font-headline-sm font-bold flex items-center justify-center shadow-[0_0_15px_rgba(30,111,255,0.5)]">
                AQ
              </div>
            </div>
          </div>
        </div>

        {/* Right: Credentials */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="inline-flex items-center gap-2 text-[#1E6FFF] font-label-caps text-label-caps font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#1E6FFF] animate-pulse"></span>
            Direct Clinical Ownership
          </div>
          <h2 className="font-headline-lg text-headline-lg text-[#0f172a] font-semibold tracking-tight">
            &ldquo;No patient should ever sit in a dental chair feeling anxious, uninformed, or rushed.&rdquo;
          </h2>
          <p className="font-body-lg text-body-lg text-slate-600 leading-relaxed">
            At Haya&apos;s Dental Care, every examination and surgical procedure is conducted directly by Dr. Aayisha
            Quddus. With over 8 years of surgical mastery and certified orthodontic expertise from Dentoscope
            International, we practice respectful, conservative dentistry where your natural tooth structure is preserved
            at all costs.
          </p>

          {/* Credentials Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold">EDUCATION</span>
              <span className="font-title-md text-[15px] font-semibold text-[#0f172a]">B.D.S — MIHS</span>
              <span className="font-label-caps text-[11px] text-slate-500">
                Margalla Institute of Health Sciences
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold">REGISTRATION</span>
              <span className="font-title-md text-[15px] font-semibold text-[#0f172a]">PMDC # 10807-D</span>
              <span className="font-label-caps text-[11px] text-slate-500">
                PMDC Reg · Clinic Reg # 60691
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold">SPECIALIZATION</span>
              <span className="font-title-md text-[15px] font-semibold text-[#0f172a]">C-Ortho Certified</span>
              <span className="font-label-caps text-[11px] text-slate-500">
                Orthodontics &amp; Clear Aligner Therapy
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Clinical Guarantees */}
      <div className="flex flex-col gap-space-md pt-4">
        <div className="flex flex-col items-start gap-1">
          <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold tracking-wider uppercase">
            Uncompromising Principles
          </span>
          <h3 className="font-headline-md text-headline-md text-[#1E6FFF] font-semibold">
            The 4 Haya&apos;s Clinical Guarantees
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div className="p-space-lg rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-space-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">humidity_mid</span>
            </div>
            <h4 className="font-title-md text-title-md text-[#0f172a] font-semibold">1. Unrushed Anesthesia</h4>
            <p className="font-body-md text-body-md text-slate-600">
              Patient-paced topical compound gel followed by ultra-slow micro-vibration delivery. Zero needle shock, zero
              sting.
            </p>
          </div>

          <div className="p-space-lg rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-space-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">verified_user</span>
            </div>
            <h4 className="font-title-md text-title-md text-[#0f172a] font-semibold">2. Class-B Autoclave</h4>
            <p className="font-body-md text-body-md text-slate-600">
              Hospital-grade vacuum sterilization. Sealed sterile instrument pouches are opened chairside in front of
              your eyes.
            </p>
          </div>

          <div className="p-space-lg rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-space-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">radiology</span>
            </div>
            <h4 className="font-title-md text-title-md text-[#0f172a] font-semibold">3. Ultra Low-Dose X-Ray</h4>
            <p className="font-body-md text-body-md text-slate-600">
              Next-generation digital sensors delivering up to 80% reduced radiation exposure with instant
              high-definition screen review.
            </p>
          </div>

          <div className="p-space-lg rounded-2xl bg-white shadow-sm border border-slate-200/80 hover:border-[#1E6FFF]/40 flex flex-col gap-space-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#1E6FFF]/10 text-[#1E6FFF] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">receipt_long</span>
            </div>
            <h4 className="font-title-md text-title-md text-[#0f172a] font-semibold">4. Upfront Written Quotes</h4>
            <p className="font-body-md text-body-md text-slate-600">
              You receive a printed, itemized breakdown before any tool touches your teeth. Guaranteed no mid-procedure
              hidden add-ons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
