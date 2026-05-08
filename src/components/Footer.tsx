import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-white border-t border-hairline pt-12 pb-10">
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12">
      {/* Top — Brand + Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-hairline">
        {/* Brand */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <span className="font-sans text-lg font-bold tracking-tight text-ink leading-none">
            ELITE<span className="text-rausch">ATTIRE</span>
          </span>
          <p className="text-[14px] text-mutedText leading-relaxed max-w-[220px]">
            Premium ethnic and contemporary clothing crafted for every occasion.
          </p>
          <div className="flex items-center gap-4 text-ink mt-2">
            <Instagram size={17} className="cursor-pointer hover:text-rausch transition-colors" />
            <Facebook size={17} className="cursor-pointer hover:text-rausch transition-colors" />
            <Twitter size={17} className="cursor-pointer hover:text-rausch transition-colors" />
          </div>
        </div>

        {/* Collections */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[13px] font-bold text-ink tracking-wide uppercase">Collections</h4>
          <Link to="/category/men" className="text-[14px] text-mutedText hover:text-ink transition-colors">Men's Ethnic</Link>
          <Link to="/category/women" className="text-[14px] text-mutedText hover:text-ink transition-colors">Women's Gallery</Link>
          <Link to="/category/turban" className="text-[14px] text-mutedText hover:text-ink transition-colors">Handcrafted Turbans</Link>
          <Link to="/category/sale" className="text-[14px] text-rausch font-medium hover:text-primary-active transition-colors">Sale — Up to 40% Off</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[13px] font-bold text-ink tracking-wide uppercase">Support</h4>
          <Link to="/faq" className="text-[14px] text-mutedText hover:text-ink transition-colors">Help Center</Link>
          <Link to="/contact" className="text-[14px] text-mutedText hover:text-ink transition-colors">Contact Us</Link>
          <Link to="#" className="text-[14px] text-mutedText hover:text-ink transition-colors">Shipping Policy</Link>
          <Link to="#" className="text-[14px] text-mutedText hover:text-ink transition-colors">Returns & Exchange</Link>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[13px] font-bold text-ink tracking-wide uppercase">Company</h4>
          <Link to="/about" className="text-[14px] text-mutedText hover:text-ink transition-colors">Our Story</Link>
          <Link to="#" className="text-[14px] text-mutedText hover:text-ink transition-colors">Craftsmanship</Link>
          <Link to="/privacy-policy" className="text-[14px] text-mutedText hover:text-ink transition-colors">Privacy Policy</Link>
          <Link to="/terms-condition" className="text-[14px] text-mutedText hover:text-ink transition-colors">Terms & Conditions</Link>
        </div>
      </div>

      {/* Legal Band */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
        <p className="text-[13px] text-mutedText">
          © {new Date().getFullYear()} Elite Attire. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-[13px] text-mutedText">
          <Link to="/privacy-policy" className="hover:text-ink transition-colors">Privacy</Link>
          <span>·</span>
          <Link to="/terms-condition" className="hover:text-ink transition-colors">Terms</Link>
          <span>·</span>
          <Link to="/faq" className="hover:text-ink transition-colors">FAQ</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
