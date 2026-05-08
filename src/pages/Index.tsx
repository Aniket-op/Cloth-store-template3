import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const newArrivals = getProductsByCategory("new-arrivals").slice(0, 8);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CategorySection />

      {/* New Arrivals */}
      <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-mutedText mb-2">
              Just In
            </p>
            <h2 className="text-[28px] font-bold text-ink leading-tight tracking-tight">
              New Arrivals
            </h2>
          </div>
          <Link
            to="/category/new-arrivals"
            className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-medium text-mutedText hover:text-ink transition-colors duration-200 group"
          >
            View all
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {newArrivals.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 md:hidden flex justify-center">
          <Link
            to="/category/new-arrivals"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-hairline text-[14px] font-medium text-ink hover:shadow-airbnb transition-all duration-200"
          >
            View all arrivals
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
