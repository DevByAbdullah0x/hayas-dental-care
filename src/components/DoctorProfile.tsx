export default function DoctorProfile() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-margin border-b border-[#DDE5E2]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left / Main: Editorial Quote & Doctor Signature Panel */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-[#F8F6F1] via-[#EEF6F5]/40 to-[#F8F6F1] border border-[#DDE5E2] relative overflow-hidden shadow-soft">
            {/* Subtle decorative background watermark quote */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-4 text-[140px] sm:text-[180px] font-serif text-[#0F5C5E]/[0.06] select-none pointer-events-none leading-none"
            >
              &ldquo;
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 text-[#0F5C5E] font-label-caps text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#0F5C5E] animate-pulse"></span>
                Direct Clinical Ownership
              </div>

              {/* Editorial Quote */}
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-[#083F42] font-semibold tracking-tight leading-snug">
                &ldquo;No patient should ever sit in a dental chair feeling anxious, uninformed, or rushed.&rdquo;
              </blockquote>

              {/* Bio Narrative */}
              <p className="text-sm sm:text-base text-[#647070] leading-relaxed">
                At Haya&apos;s Dental Care, every clinical examination and surgical procedure is
                conducted directly by Dr. Aayisha Quddus. With over 8 years of clinical mastery
                and certified orthodontic training from Dentoscope International, we practice
                respectful, conservative dentistry where natural tooth structure is preserved at all costs.
              </p>

              {/* Practice Philosophy Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0F5C5E] text-[18px] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span className="text-xs sm:text-sm text-[#1E2929] font-medium">
                    100% Doctor-performed treatments
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#0F5C5E] text-[18px] mt-0.5 flex-shrink-0">
                    check_circle
                  </span>
                  <span className="text-xs sm:text-sm text-[#1E2929] font-medium">
                    Conservative tooth preservation
                  </span>
                </div>
              </div>
            </div>

            {/* Signature & Attribution Block (Circular Headshot max 80px) */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#DDE5E2] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Small circular headshot - max 80px (64px) with subtle brand tint */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-[#0F5C5E]/25 ring-offset-2 ring-offset-[#F8F6F1] flex-shrink-0 bg-[#EEF6F5] shadow-sm">
                  <img
                    alt="Dr. Aayisha Quddus signature headshot"
                    className="w-full h-full object-cover object-top"
                    src="/dr-aayisha-quddus.jpg"
                  />
                  {/* Subtle brand tint overlay to differentiate from hero */}
                  <div className="absolute inset-0 bg-[#0F5C5E]/10 mix-blend-multiply pointer-events-none" />
                </div>

                <div>
                  <div className="font-display text-base sm:text-lg font-bold text-[#083F42] leading-tight">
                    Dr. Aayisha Quddus
                  </div>
                  <div className="text-xs text-[#647070] font-medium mt-0.5">
                    Principal Surgeon &amp; Clinical Lead
                  </div>
                  <div className="text-[11px] text-[#0F5C5E] font-semibold mt-0.5 font-label-caps">
                    PMDC Verified Licensure
                  </div>
                </div>
              </div>

              {/* Clinical Verification Seal */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DDE5E2] text-[11px] font-semibold text-[#083F42] shadow-sm">
                <span className="material-symbols-outlined text-[15px] text-[#0F5C5E]">verified</span>
                <span>Reg # 60691</span>
              </div>
            </div>
          </div>

          {/* Right: Credential Badges & Clinical Standing Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3.5">
              {/* Credential Badge 1: Education */}
              <div className="p-5 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] hover:border-[#0F5C5E]/30 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                    Academic Degree
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#0F5C5E]">school</span>
                </div>
                <div className="font-display text-base font-bold text-[#083F42]">
                  B.D.S — MIHS
                </div>
                <div className="text-xs text-[#647070] mt-1 leading-relaxed">
                  Margalla Institute of Health Sciences · Bachelor of Dental Surgery
                </div>
              </div>

              {/* Credential Badge 2: Registration */}
              <div className="p-5 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] hover:border-[#0F5C5E]/30 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                    Medical Licensing
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#0F5C5E]">verified_user</span>
                </div>
                <div className="font-display text-base font-bold text-[#083F42]">
                  PMDC # 10807-D
                </div>
                <div className="text-xs text-[#647070] mt-1 leading-relaxed">
                  Pakistan Medical &amp; Dental Council · Official Registration # 60691
                </div>
              </div>

              {/* Credential Badge 3: Specialization */}
              <div className="p-5 rounded-2xl bg-[#F8F6F1] border border-[#DDE5E2] hover:border-[#0F5C5E]/30 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase">
                    Orthodontic Certification
                  </span>
                  <span className="material-symbols-outlined text-[20px] text-[#0F5C5E]">workspace_premium</span>
                </div>
                <div className="font-display text-base font-bold text-[#083F42]">
                  C-Ortho Certified
                </div>
                <div className="text-xs text-[#647070] mt-1 leading-relaxed">
                  Dentoscope Orthodontics · Advanced Fixed Appliance &amp; Clear Alignment
                </div>
              </div>
            </div>

            {/* Practice Experience Summary Pill */}
            <div className="p-4 rounded-2xl bg-[#083F42] text-white flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#DDE5E2]">Clinical Experience</div>
                <div className="font-display text-sm sm:text-base font-bold text-white">8+ Years Private Practice</div>
              </div>
              <a
                href="#smart-booking"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0F5C5E] hover:bg-[#0F5C5E]/80 text-white text-xs font-semibold transition-colors flex-shrink-0"
              >
                <span>Book with Doctor</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
