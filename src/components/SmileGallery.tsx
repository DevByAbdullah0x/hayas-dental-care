"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

export default function SmileGallery() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSlider(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSlider(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSlider(e.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateSlider(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updateSlider]);

  return (
    <section
      id="smile-gallery"
      className="w-full py-18 sm:py-24 md:py-28 bg-[#FFFFFF] px-4 sm:px-6 md:px-margin border-b border-[#DDE5E2]"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-xl">
          <span className="font-label-caps text-xs sm:text-[13px] text-[#0F5C5E] font-bold tracking-[0.2em] uppercase">
            Real Clinical Outcomes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#083F42] font-semibold tracking-tight">
            Before &amp; After Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#647070] leading-relaxed">
            Drag the slider to inspect the clinical shade progression achieved in a single
            45-minute cold-laser session with zero enamel damage.
          </p>
        </div>

        {/* Large Interactive Comparison Slider */}
        <div className="w-full">
          <div
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] overflow-hidden rounded-3xl cursor-col-resize select-none border border-[#DDE5E2] shadow-soft-lg touch-pan-y bg-[#F8F6F1]"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* Before image (base layer) */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoeWQTH_QisbwBqtwD1aWSBLU_dUpV5GgP6dTLMJSm7_R2AbS4mp0fngqG-nTBCjlA5sPUYrip5_swh3TyR1mFc56wSjjEFH2Qrfp-2t4v_Yo65Obsqxl0o0eFhAiWK5n5-nSicp6Ag-3SA3HyD0qGVt16xwjaZDv5iIaOvtC0zD2hk8eJQ9STOzMBDdpiar6N69cOPly0R9XXogCOymjgg6fTPkB5YddFNjCs38kbqkIsR5TSjg7"
              alt="Before teeth whitening treatment"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              draggable={false}
            />

            {/* After image (clipped overlay) */}
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpWWf8xQzD-HsxV02V4yHmXyo4t7pqe7Mhvl8zUq3V0CaeMAr5wQXzp1sM_3837xM0SvpvvCAX4ht_qz1Qn49oIJnSTx0PwuGVeM0WMresaEtjd2dSfVLdeItmmH_SttoITpY7NqCiEHFZEl9BP-WYeZjbtt-7gqgVqBWBEoNn9jNI5GzNELgoM5IHRFeU4wNBDewgPVZyeKx60RYE7BzuJo_hd0xSlqxV6ZPuZ5JlqOHiYvCjBV1"
              alt="After teeth whitening treatment"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
              draggable={false}
            />

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0F5C5E] text-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#C9A96E] pointer-events-auto cursor-col-resize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Before / After Badges */}
            <div className="absolute bottom-4 right-4 bg-[#1E2929]/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full pointer-events-none border border-white/20">
              BEFORE: SHADE A3.5
            </div>

            <div className="absolute bottom-4 left-4 bg-[#0F5C5E]/90 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full pointer-events-none shadow-md border border-[#C9A96E]/40">
              AFTER: SHADE B1
            </div>
          </div>
        </div>

        {/* Treatment Case Details & CTA Strip */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-[#F8F6F1] border border-[#DDE5E2] shadow-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-label-caps text-[11px] text-[#0F5C5E] font-bold tracking-wider uppercase">
              Treatment Highlight
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#083F42]">
              Cold-Laser In-Office Teeth Whitening
            </h3>
            <p className="text-xs sm:text-sm text-[#647070] leading-relaxed max-w-xl">
              Single 45-minute sitting using professional hydrogen peroxide gel + LED activation.
              Protective gingival barrier prevents soft tissue sensitivity with zero enamel abrasion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <div className="text-center sm:text-right">
              <span className="font-label-caps text-[10px] text-[#647070] uppercase tracking-wider block font-semibold">
                Single Session Fee
              </span>
              <span className="font-display text-2xl sm:text-3xl font-bold text-[#083F42]">
                PKR 18,000
              </span>
            </div>

            <Link
              href="#smart-booking"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white shadow-soft min-h-[48px] whitespace-nowrap"
            >
              <span>Book Whitening Session</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
