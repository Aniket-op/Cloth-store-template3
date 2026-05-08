import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Kurta Pajama",
    label: "Men's Ethnic",
    slug: "kurta-pajama",
    image: "/images/kp1_primary.png",
  },
  {
    title: "Ladies Suits",
    label: "Women's Collection",
    slug: "ladies-suits",
    image: "/images/ls1_primary.png",
  },
  {
    title: "Turban",
    label: "Handcrafted",
    slug: "turban",
    image: "/images/t1_primary.png",
  },
  {
    title: "Pant Shirts",
    label: "Smart Casuals",
    slug: "pant-shirts",
    image: "/images/ps1_primary.png",
  },
];

const CategorySection = () => (
  <section className="w-full px-6 md:px-12 py-16 mx-auto max-w-[1440px]">
    {/* Section Header */}
    <div className="flex items-end justify-between mb-10">
      <div>
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-mutedText mb-2">
          Curated For You
        </p>
        <h2 className="text-[28px] font-bold text-ink leading-tight tracking-tight">
          Shop by Collection
        </h2>
      </div>
      <Link
        to="/category/men"
        className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-mutedText hover:text-ink transition-colors duration-200 group"
      >
        View all
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>

    {/* Category Grid — tall portrait cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: i * 0.08 }}
        >
          <Link
            to={`/category/${cat.slug}`}
            className="group block relative overflow-hidden rounded-xl bg-surfaceSoft cursor-pointer"
            style={{ aspectRatio: "3/4" }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent transition-opacity duration-300" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white/65 text-[10px] font-semibold tracking-[0.15em] uppercase mb-1">
                {cat.label}
              </p>
              <h3 className="text-white text-[17px] font-bold leading-tight mb-3">
                {cat.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-white text-[12px] font-medium border border-white/40 rounded-full px-3 py-1 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Shop Now
                <ArrowRight size={11} strokeWidth={2.5} />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CategorySection;
