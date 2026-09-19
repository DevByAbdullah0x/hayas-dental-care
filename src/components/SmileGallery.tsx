"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

export default function SmileGallery() {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    },
    []
  );

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
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, updateSlider]);

  return (
    <section id="smile-gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slider — lg:col-span-7 */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-col-resize select-none"
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Before image (base layer) */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoeWQTH_QisbwBqtwD1aWSBLU_dUpV5GgP6dTLMJSm7_R2AbS4mp0fngqG-nTBCjlA5sPUYrip5_swh3TyR1mFc56wSjjEFH2Qrfp-2t4v_Yo65Obsqxl0o0eFhAiWK5n5-nSicp6Ag-3SA3HyD0qGVt16xwjaZDv5iIaOvtC0zD2hk8eJQ9STOzMBDdpiar6N69cOPly0R9XXogCOymjgg6fTPkB5YddFNjCs38kbqkIsR5TSjg7"
                alt="Before whitening"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* After image (clipped overlay) */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpWWf8xQzD-HsxV02V4yHmXyo4t7pqe7Mhvl8zUq3V0CaeMAr5wQXzp1sM_3837xM0SvpvvCAX4ht_qz1Qn49oIJnSTx0PwuGVeM0WMresaEtjd2dSfVLdeItmmH_SttoITpY7NqCiEHFZEl9BP-WYeZjbtt-7gqgVqBWBEoNn9jNI5GzNELgoM5IHRFeU4wNBDewgPVZyeKx60RYE7BzuJo_hd0xSlqxV6ZPuZ5JlqOHiYvCjBV1"
                alt="After whitening"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                }}
                draggable={false}
              />

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Before label */}
              <div className="absolute bottom-4 right-4 bg-primary/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
                BEFORE: SHADE A3.5 (STAINED)
              </div>

              {/* After label */}
              <div className="absolute bottom-4 left-4 bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full pointer-events-none">
                AFTER: SHADE B1 (WHITENED)
              </div>
            </div>
          </div>

          {/* Clinical whitening facts — lg:col-span-5 */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Clinical Whitening Facts</h2>

            <div className="space-y-4">
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-1">45-Minute Procedure</h3>
                <p className="text-sm text-muted-foreground">
                  Our in-office whitening is completed in a single 45-minute session using
                  professional-grade hydrogen peroxide gel activated by LED light for maximum
                  efficacy.
                </p>
              </div>

              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-1">Gingival Barrier Gel</h3>
                <p className="text-sm text-muted-foreground">
                  A protective resin barrier is applied to the gum line before treatment,
                  ensuring zero soft-tissue irritation throughout the whitening process.
                </p>
              </div>

              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-1">Zero Enamel Abrasion</h3>
                <p className="text-sm text-muted-foreground">
                  Our chemical whitening method works through oxidation — no abrasive compounds
                  touch the enamel surface, preserving tooth integrity completely.
                </p>
              </div>
            </div>

            <div className="p-4 bg-card rounded-xl border border-border text-center">
              <p className="text-sm text-muted-foreground mb-1">Special Session Fee</p>
              <p className="text-3xl font-bold text-foreground">PKR 18,000</p>
              <Link
                href="#smart-booking"
                className="mt-3 inline-block bg-secondary text-white font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Book Whitening Slot
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
