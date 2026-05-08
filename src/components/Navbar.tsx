import { ShoppingBag, Sparkles, Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Kurta Pajama", slug: "kurta-pajama" },
  { label: "Ladies Suits", slug: "ladies-suits" },
  { label: "Turban", slug: "turban" },
  { label: "Pant Shirts", slug: "pant-shirts" },
  { label: "Sale", slug: "sale", isNew: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          scrolled ? "border-b border-hairlineSoft shadow-airbnb" : "border-b border-hairlineSoft"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 md:px-12">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <ShoppingBag size={20} className="text-rausch" strokeWidth={2.5} />
            <span className="font-sans text-lg font-bold tracking-tight text-ink leading-none">
              ELITE<span className="text-rausch">ATTIRE</span>
            </span>
          </Link>

          {/* Desktop — Category Links (center) */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === `/category/${link.slug}`;
              return (
                <Link
                  key={link.slug}
                  to={`/category/${link.slug}`}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors duration-200 ${
                      isActive ? "text-ink" : "text-mutedText hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </span>
                  {link.isNew && (
                    <span className="absolute -top-0.5 -right-0.5 bg-rausch text-white rounded-full px-1.5 py-0.5 text-[7px] font-bold tracking-widest uppercase leading-none">
                      NEW
                    </span>
                  )}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-ink rounded-full transition-transform duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop — Right Utility Links */}
          <div className="hidden lg:flex items-center gap-1 flex-shrink-0">
            <Link
              to="/about"
              className="px-4 py-2 text-[15px] font-medium text-mutedText hover:text-ink transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-[15px] font-medium text-mutedText hover:text-ink transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              to="/category/sale"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-rausch text-white text-[14px] font-medium hover:bg-primary-active transition-colors duration-200"
            >
              <Sparkles size={14} />
              Shop Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-full text-ink hover:bg-surfaceSoft transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-40 flex flex-col p-8 gap-2 border-t border-hairlineSoft animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-[11px] font-bold tracking-widest uppercase text-mutedText mb-4">
            Collections
          </p>
          {navLinks.map((link) => {
            const isActive = location.pathname === `/category/${link.slug}`;
            return (
              <Link
                key={link.slug}
                to={`/category/${link.slug}`}
                className={`flex items-center justify-between py-4 border-b border-hairlineSoft text-[18px] font-medium transition-colors ${
                  isActive ? "text-ink" : "text-mutedText"
                }`}
              >
                <span>{link.label}</span>
                {link.isNew && (
                  <span className="bg-rausch text-white rounded-full px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/about"
              className="py-3 text-[16px] font-medium text-mutedText"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-3 text-[16px] font-medium text-mutedText"
            >
              Contact
            </Link>
            <Link
              to="/category/sale"
              className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-rausch text-white text-[16px] font-medium"
            >
              <Sparkles size={16} />
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
