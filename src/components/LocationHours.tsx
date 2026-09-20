import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function LocationHours() {
  return (
    <section
      className="w-full py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin bg-[#F8F6F1] border-b border-[#DDE5E2] scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      id="location-hours"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Weekly Timetable Card */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-xs text-[#0F5C5E] font-bold tracking-[0.2em] uppercase">
                Clinical Availability
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EEF6F5] text-[#0F5C5E] border border-[#0F5C5E]/20 font-label-caps text-[11px] font-bold">
                Open Today
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#083F42] mt-1">
              Weekly Operating Schedule
            </h3>
          </div>

          <div className="flex flex-col divide-y divide-[#DDE5E2] font-body-md text-[#1E2929]">
            <div className="py-3 flex items-center justify-between gap-2">
              <span className="font-semibold text-xs sm:text-sm text-[#083F42]">Monday – Thursday</span>
              <div className="text-right text-xs text-[#647070]">
                <div>11:00 AM – 2:00 PM (Morning)</div>
                <div>3:00 PM – 9:30 PM (Evening)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between gap-2">
              <div>
                <span className="font-semibold text-xs sm:text-sm text-[#083F42] block">Friday</span>
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold">
                  Jummah Break Observed
                </span>
              </div>
              <div className="text-right text-xs text-[#647070]">
                <div>3:00 PM – 9:30 PM (Evening Only)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between gap-2">
              <span className="font-semibold text-xs sm:text-sm text-[#083F42]">Saturday</span>
              <div className="text-right text-xs text-[#647070]">
                <div>11:00 AM – 2:00 PM (Morning)</div>
                <div>3:00 PM – 9:30 PM (Evening)</div>
              </div>
            </div>

            <div className="py-3 flex items-center justify-between gap-2">
              <div>
                <span className="font-semibold text-xs sm:text-sm text-[#083F42] block">Sunday</span>
                <span className="font-label-caps text-[10px] text-[#647070] font-semibold">
                  Prior Booking Required
                </span>
              </div>
              <div className="text-right text-xs text-[#0F5C5E] font-semibold">
                Dedicated Cases &amp; Emergencies
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#F0F5F4] flex items-center gap-2.5 text-xs text-[#083F42] border border-[#0F5C5E]/15">
            <span className="material-symbols-outlined text-[#0F5C5E] text-[20px] flex-shrink-0">
              notifications_active
            </span>
            <span>
              Evening appointments are high-demand. Chairside slots fill quickly after 5:00 PM.
            </span>
          </div>
        </div>

        {/* Location Card */}
        <div className="lg:col-span-6 p-5 sm:p-7 md:p-8 rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-[10px] sm:text-[11px] text-[#0F5C5E] font-bold tracking-wider uppercase">
              FIND US EASILY
            </span>
            <h3 className="font-headline-md text-xl sm:text-2xl font-semibold text-[#083F42] mt-1">
              Awami Plaza, Adiyala Road
            </h3>
          </div>

          {/*
            TODO: Create a Google Business Profile for "Haya's Dental Care" at
            Basement D, Awami Plaza, Adiyala Road, Rawalpindi 46000.
            Once created, replace the embed query below with the Place ID:
            https://www.google.com/maps/embed/v1/place?key=API_KEY&q=place_id:PLACE_ID
            A Business Profile is essential for accurate map linking, local SEO,
            Google Reviews aggregation, and Knowledge Panel visibility.
          */}
          <a
            href="https://www.google.com/maps/search/Haya's+Dental+Care+Awami+Plaza+Adiyala+Road+Rawalpindi/@33.5298,73.0509,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-40 sm:h-44 rounded-2xl relative overflow-hidden border border-[#DDE5E2] block group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            aria-label="Open Haya's Dental Care location in Google Maps"
          >
            <iframe
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=33.5298,73.0509+(Haya%27s+Dental+Care)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Haya's Dental Care location — Awami Plaza, Adiyala Road, Rawalpindi"
              tabIndex={-1}
            />
            <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[#0F5C5E] font-label-caps text-[10px] font-bold shadow-sm flex items-center gap-1 border border-[#DDE5E2] group-hover:bg-[#0F5C5E] group-hover:text-white transition-colors">
              <span>View on Maps</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:right-auto px-3 py-1.5 rounded-xl bg-[#083F42]/95 backdrop-blur-md text-white font-label-caps text-[10px] sm:text-[11px] font-bold shadow-sm flex items-center gap-1.5 border border-white/20">
              <span className="material-symbols-outlined text-[#C9A96E] text-[16px] flex-shrink-0">
                location_on
              </span>
              <span className="truncate">Opposite Shell Fuel Station, Near Sanam Chowk</span>
            </div>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#647070]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px] flex-shrink-0">
                local_parking
              </span>
              <span>Free Basement Plaza Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px] flex-shrink-0">
                accessible
              </span>
              <span>Wheelchair Ramp &amp; Lift Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px] flex-shrink-0">store</span>
              <span>Pharmacy inside plaza</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0F5C5E] text-[20px] flex-shrink-0">air</span>
              <span>Air-Conditioned Operatory</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-[#DDE5E2]">
            <a
              className="flex-1 py-3.5 px-4 rounded-xl btn-primary font-label-ui text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 text-white min-h-[48px] text-center shadow-sm"
              href="https://www.google.com/maps/search/Haya's+Dental+Care+Awami+Plaza+Adiyala+Road+Rawalpindi/@33.5298,73.0509,17z"
              rel="noopener"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Open in Google Maps</span>
            </a>
            <a
              className="flex-1 py-3.5 px-4 rounded-xl bg-[#F0F5F4] text-[#0F5C5E] hover:bg-[#E2ECE9] font-label-ui text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border border-[#0F5C5E]/25 transition-colors min-h-[48px] text-center"
              href="https://wa.me/923035452839?text=Please%20send%20the%20exact%20Google%20Map%20Location%20Pin%20for%20Haya's%20Dental%20Care."
              rel="noopener"
              target="_blank"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#0F5C5E]" />
              <span>Request WhatsApp Pin</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
