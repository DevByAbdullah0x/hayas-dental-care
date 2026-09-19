const starStyle = { fontVariationSettings: "'FILL' 1" };

const featuredReview = {
  quote:
    "Dr. Aayisha performed two root canals and a zirconia crown for me. It was absolutely painless. Her clinic in Awami Plaza is cleaner than top private hospitals in Islamabad.",
  name: "Col. (R) Tariq Mahmood",
  location: "Gulshan-e-Abad, Rawalpindi",
  treatment: "Root Canals & Zirconia Crown",
};

const supportingReviews = [
  {
    quote:
      "I got ceramic aesthetic braces done here. She explained the entire 14-month alignment timeline with complete honesty. No unnecessary procedures were ever pushed.",
    name: "Dr. Fatima Zahra",
    location: "Bahria Town Phase 8",
    treatment: "Ceramic Aesthetic Braces",
  },
  {
    quote:
      "Took my mother for Valplast flexible dentures. Dr. Aayisha’s patience with elderly patients is unmatched. Very gentle, respectful, and transparent with pricing.",
    name: "Muhammad Usman",
    location: "Adiyala Road, Rawalpindi",
    treatment: "Valplast Flexible Dentures",
  },
];

function FiveStars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex text-[#C9A96E]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined fill-current"
          style={{ ...starStyle, fontSize: `${size}px` }}
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
      className="w-full py-18 sm:py-24 md:py-28 px-4 sm:px-6 md:px-margin bg-[#FFFFFF] border-b border-[#DDE5E2] scroll-mt-24 sm:scroll-mt-28 lg:scroll-mt-32"
      id="reviews-section"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#DDE5E2]">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#C9A96E] font-label-caps text-xs sm:text-[13px] font-bold tracking-wider">
              <FiveStars size={16} />
              <span className="text-[#083F42]">4.9 / 5.0 RATING · 180+ VERIFIED GOOGLE REVIEWS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#083F42] font-semibold tracking-tight">
              Patient Experiences
            </h2>
          </div>

          <a
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F5C5E] hover:text-[#083F42] transition-colors py-2 group"
            href="https://maps.google.com"
            rel="noopener"
            target="_blank"
          >
            <span>Read all Google Reviews</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              open_in_new
            </span>
          </a>
        </div>

        {/* Asymmetrical Editorial Testimonials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Featured Large Testimonial (Left — 7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 rounded-3xl bg-[#F8F6F1] border border-[#DDE5E2] flex flex-col justify-between gap-8 shadow-soft relative overflow-hidden">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <FiveStars size={20} />
                <span className="font-label-caps text-[10px] text-[#0F5C5E] font-bold tracking-wider uppercase bg-[#EEF6F5] px-3 py-1 rounded-full border border-[#0F5C5E]/15">
                  {featuredReview.treatment}
                </span>
              </div>

              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl text-[#083F42] font-normal leading-relaxed italic">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-3.5 pt-6 border-t border-[#DDE5E2] relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#0F5C5E] text-white flex items-center justify-center font-display text-sm font-bold shadow-xs flex-shrink-0">
                TM
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-[#083F42]">
                  {featuredReview.name}
                </span>
                <span className="text-xs text-[#647070]">
                  {featuredReview.location}
                </span>
              </div>
            </div>
          </div>

          {/* Supporting Testimonials (Right — 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {supportingReviews.map((review) => (
              <div
                key={review.name}
                className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#DDE5E2] flex flex-col justify-between gap-5 shadow-soft hover:shadow-soft-lg hover:border-[#0F5C5E]/30 transition-all duration-300 flex-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <FiveStars size={16} />
                    <span className="text-[10px] font-label-caps font-semibold text-[#647070] bg-[#F8F6F1] px-2.5 py-0.5 rounded-full border border-[#DDE5E2]">
                      {review.treatment}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E2929] leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[#DDE5E2]">
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-[#083F42]">
                      {review.name}
                    </span>
                    <span className="text-[11px] text-[#647070]">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
