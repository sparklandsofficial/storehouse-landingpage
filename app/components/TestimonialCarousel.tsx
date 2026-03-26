"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import reviewsData from "@/data/reviews.json";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  bgColor: string;
  rating: number;
  time?: string;
  profilePhoto?: string;
}

const FALLBACK = reviewsData.reviews as Testimonial[];

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews?.length > 0) setTestimonials(data.reviews);
      })
      .catch(() => {/* 保留 fallback */})
      .finally(() => setLoading(false));
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials.length]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 1000 : -1000, opacity: 0 }),
  };

  const current = testimonials[currentIndex] ?? testimonials[0];

  return (
    <div className="relative max-w-4xl mx-auto px-4 overflow-hidden py-12">
      <div className="relative h-[380px] md:h-[320px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full"
          >
            <div className="bg-surface-container-lowest cloud-shadow rounded-3xl p-8 md:p-12 border border-outline-variant/5 mx-auto max-w-3xl">
              <div className="flex gap-0.5 mb-6 text-primary-container text-xl justify-center">
                {"★".repeat(current.rating ?? 5)}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-on-surface text-center italic mb-8 leading-relaxed text-lg md:text-xl font-medium"
              >
                {loading ? "載入評論中…" : `「${current.quote}」`}
              </motion.p>
              <div className="flex items-center justify-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${current.bgColor} flex items-center justify-center text-on-surface font-bold text-lg shadow-sm overflow-hidden relative`}
                >
                  {current.profilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={current.profilePhoto}
                      alt={current.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  ) : null}
                  <span className="relative z-10">{current.avatar}</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-base text-on-surface">{current.name}</div>
                  <div className="text-sm text-on-surface-variant font-label tracking-wide">
                    {current.time ? `${current.role} · ${current.time}` : current.role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all cloud-shadow group"
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-on-surface hover:bg-primary hover:text-white transition-all cloud-shadow group"
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chevron_right</span>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-primary" : "w-2 bg-outline-variant/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
