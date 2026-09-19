const starStyle = { fontVariationSettings: "'FILL' 1" };

const reviews = [
  {
    quote:
      "\u201CDr. Aayisha performed two root canals and a zirconia crown for me. It was absolutely painless. Her clinic in Awami Plaza is cleaner than top private hospitals in Islamabad.\u201D",
    initials: "TM",
    name: "Col. (R) Tariq Mahmood",
    location: "Gulshan-e-Abad, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#0F5C5E] text-white flex items-center justify-center font-label-ui font-bold shadow-xs flex-shrink-0",
  },
  {
    quote:
      "\u201CI got ceramic aesthetic braces done here. She explained the entire 14-month alignment timeline with complete honesty. No unnecessary procedures were ever pushed.\u201D",
    initials: "FZ",
    name: "Dr. Fatima Zahra",
    location: "Bahria Town Phase 8",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#F0F5F4] text-[#0F5C5E] border border-[#0F5C5E]/30 flex items-center justify-center font-label-ui font-bold shadow-xs flex-shrink-0",
  },
  {
    quote:
      "\u201CTook my mother for Valplast flexible dentures. Dr. Aayisha\u2019s patience with elderly patients is unmatched. Very gentle, respectful, and transparent with pricing.\u201D",
    initials: "MU",
    name: "Muhammad Usman",
    location: "Adiyala Road, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#083F42] text-[#C9A96E] border border-[#C9A96E]/30 flex items-center justify-center font-label-ui font-bold shadow-xs flex-shrink-0",
  },
];

function FiveStars() {
  return (
    <div className="flex text-[#C9A96E] text-[16px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px] text-[#C9A96E] fill-current"
          style={starStyle}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      className="w-full py-14 sm:py-18 md:py-20 px-4 sm:px-6 md:px-margin bg-[#FFFFFF] border-b border-[#DDE5E2]"
      id="reviews-section"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 text-[#C9A96E] font-label-caps text-[10px] sm:text-[11px] font-bold flex-wrap">
              <span
                className="material-symbols-outlined text-[18px] text-[#C9A96E] fill-current"
                style={starStyle}
              >
                star
              </span>
              <span className="text-[#083F42]">
                4.9 OUT OF 5.0 ON GOOGLE MAPS · 184 VERIFIED REVIEWS
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#083F42] font-semibold tracking-tight mt-1">
              Patient Stories from Rawalpindi
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1.5 font-label-ui text-xs sm:text-sm font-semibold text-[#0F5C5E] hover:text-[#083F42] transition-colors py-2 min-h-[44px]"
            href="https://maps.google.com"
            rel="noopener"
            target="_blank"
          >
            <span>Read all Google Reviews</span>
            <span className="material-symbols-outlined text-[18px]">
              open_in_new
            </span>
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#DDE5E2] shadow-soft flex flex-col justify-between gap-4 hover:shadow-soft-lg hover:border-[#0F5C5E]/35 transition-all"
            >
              <div className="flex flex-col gap-3">
                <FiveStars />
                <p className="font-body-md text-xs sm:text-sm text-[#1E2929] leading-relaxed italic">
                  {review.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#DDE5E2]">
                <div className={review.avatarClasses}>{review.initials}</div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-ui text-xs sm:text-sm font-bold text-[#083F42] truncate">
                    {review.name}
                  </span>
                  <span className="font-label-caps text-[10px] text-[#647070] truncate">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
