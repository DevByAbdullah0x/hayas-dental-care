const starStyle = { fontVariationSettings: "'FILL' 1" };

const reviews = [
  {
    quote:
      "\u201CDr. Aayisha performed two root canals and a zirconia crown for me. It was absolutely painless. Her clinic in Awami Plaza is cleaner than top private hospitals in Islamabad.\u201D",
    initials: "TM",
    name: "Col. (R) Tariq Mahmood",
    location: "Gulshan-e-Abad, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-ui font-bold",
  },
  {
    quote:
      "\u201CI got ceramic aesthetic braces done here. She explained the entire 14-month alignment timeline with complete honesty. No unnecessary procedures were ever pushed.\u201D",
    initials: "FZ",
    name: "Dr. Fatima Zahra",
    location: "Bahria Town Phase 8",
    avatarClasses:
      "w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-ui font-bold",
  },
  {
    quote:
      "\u201CTook my mother for Valplast flexible dentures. Dr. Aayisha\u2019s patience with elderly patients is unmatched. Very gentle, respectful, and transparent with pricing.\u201D",
    initials: "MU",
    name: "Muhammad Usman",
    location: "Adiyala Road, Rawalpindi",
    avatarClasses:
      "w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center font-label-ui font-bold",
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
      className="w-full py-space-xl px-margin-mobile md:px-margin max-w-7xl mx-auto"
      id="reviews-section"
    >
      <div className="flex flex-col gap-space-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-label-caps text-label-caps font-bold">
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
            <h2 className="font-headline-lg text-headline-lg text-primary font-semibold tracking-tight">
              Patient Stories from Rawalpindi
            </h2>
          </div>
          <a
            className="inline-flex items-center gap-1.5 font-label-ui text-label-ui font-semibold text-secondary hover:text-primary transition-colors"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {reviews.map((review) => (
            <div
              key={review.initials}
              className="p-space-lg rounded-2xl bg-surface-container-lowest border border-secondary/10 shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-space-sm">
                <FiveStars />
                <p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                  {review.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-space-sm border-t border-surface-container">
                <div className={review.avatarClasses}>{review.initials}</div>
                <div className="flex flex-col">
                  <span className="font-label-ui text-label-ui font-bold text-primary">
                    {review.name}
                  </span>
                  <span className="font-label-caps text-[11px] text-on-surface-variant">
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
