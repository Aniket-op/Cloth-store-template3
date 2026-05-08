import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/images/kurta_pajama_hero.png",
    eyebrow: "New Season",
    headline: "Crafted for\nthe modern man",
    subtext: "Timeless elegance meets contemporary design.",
    cta: "Explore Men's",
    ctaSlug: "men",
    secondaryCta: "View Collection",
    secondarySlug: "kurta-pajama",
  },
  {
    image: "/images/ladies_suits_hero.png",
    eyebrow: "Women's Collection",
    headline: "Grace in\nevery fold",
    subtext: "Curated elegance for every occasion.",
    cta: "Explore Women's",
    ctaSlug: "women",
    secondaryCta: "View Collection",
    secondarySlug: "ladies-suits",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = 8000;
    const tick = 80;
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (tick / interval) * 100;
      });
    }, tick);
    return () => clearInterval(progressTimer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full bg-white">
      {/* Full-bleed Hero */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21/9", minHeight: "420px" }}>
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <img
              src={slide.image}
              alt={slide.headline}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient overlay — left-heavy for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-end md:items-center pb-12 md:pb-0">
          <div className="mx-auto max-w-[1440px] w-full px-6 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                className="max-w-xl"
              >
                {/* Eyebrow */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/70 text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
                >
                  {slide.eyebrow}
                </motion.p>

                {/* Headline */}
                <h1
                  className="text-white font-bold leading-[1.1] mb-5"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)", whiteSpace: "pre-line" }}
                >
                  {slide.headline}
                </h1>

                {/* Subtext */}
                <p className="text-white/75 text-[15px] font-normal mb-8 max-w-sm leading-relaxed">
                  {slide.subtext}
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    to={`/category/${slide.ctaSlug}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rausch text-white text-[14px] font-semibold hover:bg-primary-active transition-all duration-200 shadow-sm"
                  >
                    {slide.cta}
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </Link>
                  <Link
                    to={`/category/${slide.secondarySlug}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/60 text-white text-[14px] font-medium hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                  >
                    {slide.secondaryCta}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators — bottom right */}
        <div className="absolute bottom-6 right-8 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              className="relative h-[2px] overflow-hidden rounded-full bg-white/30 transition-all duration-300"
              style={{ width: i === current ? "40px" : "16px" }}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
