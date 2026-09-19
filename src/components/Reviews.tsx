const starStyle = { fontVariationSettings: "'FILL' 1" };

const reviews = [
  {
    quote:
      "\u201CDr. Aayisha performed two root canals and a zirconia crown for me. It was absolutely painless. Her clinic in Awami Plaza is cleaner than top private hospitals in Islamabad.\u201D",
    initials: "TM",
    name: "Col. (R) Tariq Mahmood",
    location: "Gulshan-e-Abad, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#1E6FFF] text-white flex items-center justify-center font-label-ui font-bold shadow-sm flex-shrink-0",
  },
  {
    quote:
      "\u201CI got ceramic aesthetic braces done here. She explained the entire 14-month alignment timeline with complete honesty. No unnecessary procedures were ever pushed.\u201D",
    initials: "FZ",
    name: "Dr. Fatima Zahra",
    location: "Bahria Town Phase 8",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#8FCBF2] text-[#002b66] flex items-center justify-center font-label-ui font-bold shadow-sm flex-shrink-0",
  },
  {
    quote:
      "\u201CTook my mother for Valplast flexible dentures. Dr. Aayisha\u2019s patience with elderly patients is unmatched. Very gentle, respectful, and transparent with pricing.\u201D",
    initials: "MU",
    name: "Muhammad Usman",
    location: "Adiyala Road, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-[#121417] text-[#8FCBF2] border border-[#1E6FFF]/30 flex items-center justify-center font-label-ui font-bold shadow-sm flex-shrink-0",
  },
];

function FiveStars() {
  return (
    <div className="flex text-amber-500 text-[16px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px] fill-current"
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
      className="w-full py-12 sm:py-16 md:py-space-xl px-4 sm:px-6 md:px-margin max-w-7xl mx-auto"
      id="reviews-section"
    >
      <div className="flex flex-col gap-6 sm:gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-label-caps text-[10px] sm:text-[11px] font-bold flex-wrap">
              <span
                className="material-symbols-outlined text-[18px] fill-current"
                style={starStyle}
              >
                star
              </span>
              <span className="text-on-surface">
                4.9 OUT OF 5.0 ON GOOGLE MAPS · 184 VERIFIED REVIEWS
              </span>
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold tracking-tight mt-1">
              Patient Stories from Rawalpindi
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1.5 font-label-ui text-xs sm:text-sm font-semibold text-[#1E6FFF] hover:text-[#0F4FCC] transition-colors py-2 min-h-[44px]"
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

        {/* Review Cards - 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="p-5 sm:p-6 rounded-2xl bg-surface-container-lowest border border-[#1E6FFF]/15 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md hover:border-[#1E6FFF]/35 transition-all"
            >
              <div className="flex flex-col gap-3">
                <FiveStars />
                <p className="font-body-md text-xs sm:text-sm text-on-surface leading-relaxed italic">
                  {review.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-surface-container">
                <div className={review.avatarClasses}>{review.initials}</div>
                <div className="flex flex-col min-w-0">
                  <span className="font-label-ui text-xs sm:text-sm font-bold text-primary truncate">
                    {review.name}
                  </span>
                  <span className="font-label-caps text-[10px] text-on-surface-variant truncate">
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
