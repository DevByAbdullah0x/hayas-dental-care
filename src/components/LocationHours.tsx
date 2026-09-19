export default function LocationHours() {
  return (
    <section
      className="w-full py-space-xl px-margin-mobile md:px-margin bg-surface-container-low"
      id="location-hours"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-stretch">
        {/* Weekly Timetable Card */}
        <div className="lg:col-span-6 p-space-lg rounded-3xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-md flex flex-col justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold tracking-wider uppercase">
                CLINICAL AVAILABILITY
              </span>
              <span className="px-3 py-1 rounded-full bg-[#1E6FFF]/10 text-[#1E6FFF] border border-[#1E6FFF]/20 font-label-caps text-[11px] font-bold">
                OPEN TODAY
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-semibold">
              Weekly Operating Schedule
            </h3>
          </div>

          <div className="flex flex-col divide-y divide-surface-container-high font-body-md text-on-surface">
            <div className="py-3 flex items-center justify-between">
              <span className="font-semibold text-primary">Monday – Thursday</span>
              <div className="text-right text-[13px] text-on-surface-variant">
                <div>11:00 AM – 2:00 PM (Morning)</div>
                <div>3:00 PM – 9:30 PM (Evening)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-primary block">Friday</span>
                <span className="font-label-caps text-[10px] text-[#1E6FFF] font-bold">
                  Jummah Break Observed
                </span>
              </div>
              <div className="text-right text-[13px] text-on-surface-variant">
                <div>3:00 PM – 9:30 PM (Evening Only)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between">
              <span className="font-semibold text-primary">Saturday</span>
              <div className="text-right text-[13px] text-on-surface-variant">
                <div>11:00 AM – 2:00 PM (Morning)</div>
                <div>3:00 PM – 9:30 PM (Evening)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-primary block">Sunday</span>
                <span className="font-label-caps text-[10px] text-outline font-semibold">
                  Prior Booking Required
                </span>
              </div>
              <div className="text-right text-[13px] text-[#1E6FFF] font-medium">
                Dedicated Surgical Cases &amp; Emergencies
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-surface-container flex items-center gap-2.5 text-label-ui text-primary border border-secondary/10">
            <span className="material-symbols-outlined text-[#1E6FFF] text-[20px]">
              notifications_active
            </span>
            <span>
              Evening appointments are high-demand. Chairside slots fill quickly after 5:00 PM.
            </span>
          </div>
        </div>

        {/* Location Card */}
        <div className="lg:col-span-6 p-space-lg rounded-3xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-md flex flex-col justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-label-caps text-[#1E6FFF] font-bold tracking-wider uppercase">
              FIND US EASILY
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-semibold">
              Awami Plaza, Adiyala Road
            </h3>
          </div>

          <div
            className="w-full h-44 rounded-2xl bg-cover bg-center shadow-inner relative overflow-hidden flex items-end p-3"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdXCkwbhLMj37pST2x8tUibYDTCFQUdKrfi4pIeDKM6fL1unBUy3KM_vrIRAJHT5zq0V6Q5mPZmElRCjb8k4tj_tB-3SeVK5duQPWleuu4HMC3wI9Uh7MDW36xVmTAAwytsnIkuiGgd6BHTBrwkK8Jjd8RFWXOXRb84Z0tIhQgphzf_xeYD6eYplfSx-kn_pRxTRubI_EHTLKB3Hp-EP31OnzoHhf22y8hlLj2L1Lfh60OqoX79isD')`,
            }}
          >
            <div className="px-3 py-1.5 rounded-xl bg-[#121417]/85 backdrop-blur-md text-white font-label-caps text-[11px] font-bold shadow-sm flex items-center gap-1.5 border border-[#1E6FFF]/30">
              <span className="material-symbols-outlined text-[#8FCBF2] text-[16px]">
                location_on
              </span>
              <span>Opposite Shell Fuel Station, Near Sanam Chowk</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-body-md text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E6FFF] text-[20px]">
                local_parking
              </span>
              <span>Free Basement Plaza Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E6FFF] text-[20px]">
                accessible
              </span>
              <span>Wheelchair Ramp &amp; Lift Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E6FFF] text-[20px]">store</span>
              <span>Pharmacy located inside plaza</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#1E6FFF] text-[20px]">air</span>
              <span>Fully Air-Conditioned Operatory</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-container-high">
            <a
              className="flex-1 min-w-[160px] py-3 rounded-xl btn-neon font-label-ui text-label-ui font-semibold flex items-center justify-center gap-1.5 text-white"
              href="https://maps.google.com/?q=Awami+Plaza+Adiyala+Road+Rawalpindi"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Open in Google Maps</span>
            </a>
            <a
              className="flex-1 min-w-[160px] py-3 rounded-xl bg-[#8FCBF2]/15 text-[#0F4FCC] hover:bg-[#8FCBF2]/25 font-label-ui text-label-ui font-semibold flex items-center justify-center gap-1.5 border border-[#1E6FFF]/20 transition-colors"
              href="https://wa.me/923035452839?text=Please%20send%20the%20exact%20Google%20Map%20Location%20Pin%20for%20Haya's%20Dental%20Care."
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px] text-[#1E6FFF]">near_me</span>
              <span>Request WhatsApp Pin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
