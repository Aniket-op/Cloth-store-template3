import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
    Share, Heart, Star, ShieldCheck, ChevronRight,
    Globe, Award, ShoppingBag, Sparkles, Minus, Plus,
    MessageCircle, Truck, RotateCcw, Tag,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, getWhatsAppLink, products } from "@/data/products";
import EnquiryForm from "@/components/EnquiryForm";
import { useWishlist } from "@/context/WishlistContext";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(id) : undefined;
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [qty, setQty] = useState(1);
    const { toggleWishlist, isInWishlist } = useWishlist();

    const relatedProducts = product
        ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
        : [];

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="text-display-xl text-ink mb-4">Product not found</h1>
                    <Link to="/" className="btn-primary">Return home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const isWishlisted = isInWishlist(product.id);

    // Build WhatsApp message including selected size & qty
    const buildWhatsAppLink = () => {
        const sizeText = selectedSize ? selectedSize : "Not selected";
        const message = encodeURIComponent(
            `Hi! I'm interested in "${product.name}" (₹${product.price.toLocaleString("en-IN")}).\nSize: ${sizeText}\nQuantity: ${qty}\nCould you share more details?`
        );
        return `https://wa.me/918307473499?text=${message}`;
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : null;

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* ── Product Header ── */}
                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 pt-8 pb-6">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-body-sm text-mutedText mb-4">
                        <Link to="/" className="hover:text-ink transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link to={`/category/${product.category}`} className="hover:text-ink transition-colors capitalize">
                            {product.category.replace(/-/g, " ")}
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-ink font-medium truncate max-w-[200px]">{product.name}</span>
                    </nav>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-display-lg text-ink">{product.name}</h1>
                        <div className="flex items-center justify-between w-full flex-wrap gap-3">
                            <div className="flex items-center gap-2 text-body-sm font-semibold text-ink">
                                <span className="flex items-center gap-1">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={13} fill="currentColor" className="text-amber-400" />
                                    ))}
                                </span>
                                <span className="font-bold">5.0</span>
                                <span className="text-mutedText font-normal">· 24 reviews</span>
                                {product.tags?.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-surfaceSoft text-[11px] font-semibold text-ink rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1.5 text-body-sm font-semibold text-ink hover:bg-surfaceSoft px-3 py-1.5 rounded-full transition-all">
                                    <Share size={15} /> Share
                                </button>
                                <button
                                    onClick={() => toggleWishlist(product)}
                                    className={`flex items-center gap-1.5 text-body-sm font-semibold px-3 py-1.5 rounded-full transition-all ${isWishlisted ? "text-rausch bg-red-50" : "text-ink hover:bg-surfaceSoft"}`}
                                >
                                    <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} />
                                    {isWishlisted ? "Saved" : "Save"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Photo Gallery ── */}
                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 mb-12">
                    <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[2/1] rounded-xl overflow-hidden">
                        <div className="col-span-2 row-span-2 relative group overflow-hidden">
                            <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.name} />
                            {discount && (
                                <div className="absolute top-4 left-4 bg-rausch text-white text-[11px] font-bold px-3 py-1 rounded-full">
                                    {discount}% OFF
                                </div>
                            )}
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden">
                            <img src={product.secondImage || product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Detail 1" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden">
                            <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Detail 2" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden">
                            <img src={product.secondImage || product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Detail 3" />
                        </div>
                        <div className="col-span-1 row-span-1 relative group overflow-hidden">
                            <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Detail 4" />
                        </div>
                    </div>
                </div>

                {/* ── Main Content ── */}
                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-section">

                    {/* Left Rail */}
                    <div className="lg:col-span-2 space-y-0">

                        {/* Artisan Tagline */}
                        <div className="pb-8 border-b border-hairline">
                            <h2 className="text-display-sm text-ink mb-1">Crafted by Elite Artisans</h2>
                            <p className="text-body-md text-mutedText">Premium materials · Tailored fit · Timeless design</p>
                        </div>

                        {/* Rating Highlight */}
                        <div className="py-8 border-b border-hairline flex items-center justify-between gap-6">
                            <div className="flex-1 flex flex-col items-center border-r border-hairline pr-6">
                                <h3 className="text-[56px] font-bold text-ink leading-none">5.0</h3>
                                <div className="flex gap-0.5 mt-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} size={12} fill="currentColor" className="text-amber-400" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex-[2] pl-2">
                                <p className="text-title-md text-ink">Customer Favourite</p>
                                <p className="text-body-sm text-mutedText mt-1">One of the most loved pieces in our collection, based on ratings and craftsmanship.</p>
                            </div>
                            <div className="flex-1 text-center">
                                <p className="text-[32px] font-bold text-ink">24</p>
                                <p className="text-caption-sm text-ink underline font-semibold">Reviews</p>
                            </div>
                        </div>

                        {/* Trust Points */}
                        <div className="py-8 border-b border-hairline space-y-6">
                            <div className="flex items-start gap-4">
                                <Award size={24} className="text-ink mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-title-md text-ink">Master Craftsmanship</h4>
                                    <p className="text-body-sm text-mutedText">Hand-finished by our most experienced tailors.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Truck size={24} className="text-ink mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-title-md text-ink">Fast Delivery</h4>
                                    <p className="text-body-sm text-mutedText">Express shipping across India and 50+ countries.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <RotateCcw size={24} className="text-ink mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-title-md text-ink">Easy Returns</h4>
                                    <p className="text-body-sm text-mutedText">Free returns if you're not 100% satisfied with the fit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="py-8 border-b border-hairline">
                            <p className="text-body-md text-ink leading-relaxed">{product.description}</p>
                        </div>

                        {/* Product Details */}
                        <div className="py-8">
                            <h3 className="text-display-sm text-ink mb-6">Product Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {product.fabric && (
                                    <div className="flex items-center gap-3 p-4 bg-surfaceSoft rounded-lg">
                                        <ShoppingBag size={18} className="text-ink flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-mutedText">Fabric</p>
                                            <p className="text-body-sm text-ink font-medium">{product.fabric}</p>
                                        </div>
                                    </div>
                                )}
                                {product.color && (
                                    <div className="flex items-center gap-3 p-4 bg-surfaceSoft rounded-lg">
                                        <Sparkles size={18} className="text-ink flex-shrink-0" />
                                        <div>
                                            <p className="text-[10px] font-bold tracking-widest uppercase text-mutedText">Colour</p>
                                            <p className="text-body-sm text-ink font-medium">{product.color}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center gap-3 p-4 bg-surfaceSoft rounded-lg">
                                    <ShieldCheck size={18} className="text-ink flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold tracking-widest uppercase text-mutedText">Quality</p>
                                        <p className="text-body-sm text-ink font-medium">Premium Grade</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-surfaceSoft rounded-lg">
                                    <Globe size={18} className="text-ink flex-shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold tracking-widest uppercase text-mutedText">Origin</p>
                                        <p className="text-body-sm text-ink font-medium">Made in India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Rail — Order Card ── */}
                    <div className="lg:col-span-1 relative">
                        <div className="sticky top-28 space-y-4">
                            <div className="p-6 bg-white border border-hairline rounded-xl shadow-airbnb space-y-6">

                                {/* Price */}
                                <div className="flex items-baseline justify-between">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[28px] font-bold text-ink">
                                            ₹{product.price.toLocaleString("en-IN")}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-body-md text-mutedText line-through">
                                                ₹{product.originalPrice.toLocaleString("en-IN")}
                                            </span>
                                        )}
                                    </div>
                                    {discount && (
                                        <span className="flex items-center gap-1 text-[12px] font-bold text-rausch bg-red-50 px-2.5 py-1 rounded-full">
                                            <Tag size={11} /> {discount}% off
                                        </span>
                                    )}
                                </div>

                                {/* Size Selector */}
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-[11px] font-bold tracking-widest uppercase text-ink">Select Size</p>
                                        {!selectedSize && (
                                            <span className="text-[11px] text-rausch font-medium">Choose a size</span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-4 py-2 rounded-lg border text-body-sm font-semibold transition-all duration-200 ${
                                                    selectedSize === size
                                                        ? "bg-ink text-white border-ink"
                                                        : "bg-white text-ink border-hairline hover:border-ink"
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest uppercase text-ink mb-3">Quantity</p>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQty(q => Math.max(1, q - 1))}
                                            className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center hover:border-ink hover:bg-surfaceSoft transition-all"
                                            aria-label="Decrease quantity"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="text-title-md text-ink w-6 text-center font-bold">{qty}</span>
                                        <button
                                            onClick={() => setQty(q => q + 1)}
                                            className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center hover:border-ink hover:bg-surfaceSoft transition-all"
                                            aria-label="Increase quantity"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col gap-3 pt-2">
                                    <a
                                        href={buildWhatsAppLink()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full h-12 rounded-lg bg-[#25D366] text-white text-[14px] font-bold hover:bg-[#1ebe5d] transition-colors duration-200"
                                    >
                                        <MessageCircle size={18} />
                                        Enquire on WhatsApp
                                    </a>
                                    <button
                                        onClick={() => toggleWishlist(product)}
                                        className={`flex items-center justify-center gap-2 w-full h-12 rounded-lg border text-[14px] font-bold transition-all duration-200 ${
                                            isWishlisted
                                                ? "border-rausch text-rausch bg-red-50 hover:bg-red-100"
                                                : "border-hairline text-ink bg-white hover:border-ink hover:bg-surfaceSoft"
                                        }`}
                                    >
                                        <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
                                        {isWishlisted ? "Saved to Wishlist" : "Save to Wishlist"}
                                    </button>
                                </div>

                                {/* Price breakdown */}
                                <div className="space-y-3 pt-4 border-t border-hairline text-body-sm text-ink">
                                    <div className="flex justify-between">
                                        <span className="text-mutedText">Unit price</span>
                                        <span>₹{product.price.toLocaleString("en-IN")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-mutedText">Quantity</span>
                                        <span>× {qty}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-ink pt-3 border-t border-hairline text-[15px]">
                                        <span>Total</span>
                                        <span>₹{(product.price * qty).toLocaleString("en-IN")}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rare Find Banner */}
                            <div className="flex items-center gap-3 p-4 border border-hairline rounded-xl bg-amber-50">
                                <Award size={22} className="text-amber-500 flex-shrink-0" />
                                <div>
                                    <p className="text-body-sm text-ink font-bold">Rare Find</p>
                                    <p className="text-[12px] text-mutedText">This piece sells out fast — enquire now.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Related Products ── */}
                {relatedProducts.length > 0 && (
                    <section className="mx-auto w-full max-w-[1120px] px-6 md:px-12 py-section border-t border-hairline">
                        <div className="mb-8">
                            <h2 className="text-display-sm text-ink">More to explore</h2>
                            <p className="text-body-md text-mutedText mt-1">From the same collection</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-base">
                            {relatedProducts.map((p, i) => (
                                <ProductCard key={p.id} product={p} index={i} />
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Enquiry Section ── */}
                <section id="enquiry-section" className="bg-surfaceSoft py-section">
                    <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
                        <div className="max-w-3xl mx-auto bg-white p-10 md:p-12 rounded-xl shadow-airbnb border border-hairline">
                            <h2 className="text-display-md text-ink mb-3">Have questions?</h2>
                            <p className="text-body-md text-mutedText mb-10">
                                Send a message to our designers for personalized assistance on sizing, fabric, or custom orders.
                            </p>
                            <EnquiryForm prefilledProduct={product} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetail;
