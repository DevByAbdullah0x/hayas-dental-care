export default function DoctorProfile() {
  return (
    <section className="w-full bg-[#FFFFFF] py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin border-b border-[#DDE5E2]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Refined Doctor Portrait */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-[#F8F6F1] shadow-soft-lg border border-[#DDE5E2] aspect-[4/5] max-w-sm sm:max-w-md w-full">
              <img
                alt="Dr. Aayisha Quddus - Principal Surgeon"
                className="w-full h-full object-cover object-top"
                src="/dr-aayisha-quddus.jpg"
              />
              {/* Subtle Bottom Attribution Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#083F42]/90 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-display text-sm sm:text-base font-bold text-white">
                    Dr. Aayisha Quddus
                  </div>
                  <div className="text-[11px] text-[#DDE5E2]">
                    BDS (MIHS) · RDS (PMDC) · C-Ortho
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0F5C5E] text-[#C9A96E] font-display font-bold flex items-center justify-center text-xs border border-[#C9A96E]/40 flex-shrink-0">
                  AQ
                </div>
              </div>
            </div>
          </div>

          {/* Right: Credentials & Bio Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-[#0F5C5E] font-label-caps text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#0F5C5E] animate-pulse"></span>
              Direct Clinical Ownership
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#083F42] font-semibold tracking-tight leading-snug">
              &ldquo;No patient should ever sit in a dental chair feeling anxious, uninformed, or rushed.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-[#647070] leading-relaxed">
              At Haya&apos;s Dental Care, every clinical examination and surgical procedure is
              conducted directly by Dr. Aayisha Quddus. With over 8 years of clinical mastery
              and certified orthodontic training from Dentoscope International, we practice
              respectful, conservative dentistry where natural tooth structure is preserved at all costs.
            </p>

            {/* Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                  Education
                </span>
                <span className="font-display text-sm sm:text-[15px] font-bold text-[#083F42]">
                  B.D.S — MIHS
                </span>
                <span className="text-[11px] text-[#647070] leading-tight">
                  Margalla Institute of Health Sciences
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                  Registration
                </span>
                <span className="font-display text-sm sm:text-[15px] font-bold text-[#083F42]">
                  PMDC # 10807-D
                </span>
                <span className="text-[11px] text-[#647070] leading-tight">
                  PMDC Verified · Reg # 60691
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col gap-1">
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                  Specialization
                </span>
                <span className="font-display text-sm sm:text-[15px] font-bold text-[#083F42]">
                  C-Ortho Certified
                </span>
                <span className="text-[11px] text-[#647070] leading-tight">
                  Dentoscope Orthodontics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
