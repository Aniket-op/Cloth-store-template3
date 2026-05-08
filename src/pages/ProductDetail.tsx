import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Share, Heart, Star, ShieldCheck, MessageCircle, ChevronRight, Globe, Award } from "lucide-react";
import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
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
    const { toggleWishlist, isInWishlist } = useWishlist();

    const relatedProducts = product
        ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
        : [];

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="text-display-xl text-ink mb-4">
                        Listing not found
                    </h1>
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const isWishlisted = isInWishlist(product.id);
    const whatsappLink = getWhatsAppLink(product);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Listing Header */}
                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 pt-8 pb-6">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-display-lg text-ink">
                            {product.name}
                        </h1>
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-2 text-body-sm font-semibold text-ink">
                                <span className="flex items-center gap-1"><Star size={14} fill="currentColor" /> 5.0</span>
                                <span>·</span>
                                <button className="underline">24 reviews</button>
                                <span>·</span>
                                <span className="text-mutedText font-normal">{product.category.replace("-", " ")}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 text-body-sm font-semibold underline hover:bg-surfaceSoft px-2 py-1 rounded-sm transition-all">
                                    <Share size={16} /> Share
                                </button>
                                <button 
                                    onClick={() => toggleWishlist(product)}
                                    className={`flex items-center gap-2 text-body-sm font-semibold underline hover:bg-surfaceSoft px-2 py-1 rounded-sm transition-all ${isWishlisted ? "text-rausch" : ""}`}
                                >
                                    <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} /> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo Gallery */}
                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 mb-12">
                    <div className="grid grid-cols-4 grid-rows-2 gap-2 aspect-[2/1] rounded-md overflow-hidden">
                        <div className="col-span-2 row-span-2 relative group overflow-hidden">
                            <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.name} />
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

                <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16 pb-section">
                    {/* Left Rail - Amenity & Info */}
                    <div className="lg:col-span-2">
                        <div className="pb-8 border-b border-hairline">
                            <h2 className="text-display-sm text-ink mb-2">Designed by Elite Artisans</h2>
                            <p className="text-body-md text-ink">Premium materials · Tailored fit · Timeless design</p>
                        </div>

                        {/* Guest Favorite Signature Display */}
                        <div className="py-8 border-b border-hairline flex items-center justify-between">
                           <div className="flex-1 flex flex-col items-center border-r border-hairline px-4">
                              <h3 className="text-[64px] font-bold text-ink leading-none">5.0</h3>
                              <div className="flex gap-0.5 mt-2">
                                 {Array.from({length: 5}).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                              </div>
                           </div>
                           <div className="flex-[2] px-8">
                              <p className="text-title-md text-ink">Guest favorite</p>
                              <p className="text-body-sm text-mutedText mt-1">One of the most loved pieces in our collection, based on ratings and craftsmanship.</p>
                           </div>
                           <div className="flex-1 text-center">
                              <p className="text-[32px] font-bold text-ink">24</p>
                              <p className="text-caption-sm text-ink underline font-semibold">Reviews</p>
                           </div>
                        </div>

                        <div className="py-8 border-b border-hairline space-y-6">
                            <div className="flex items-start gap-4">
                                <Award size={24} className="text-ink mt-1" />
                                <div>
                                    <h4 className="text-title-md text-ink">Master Craftsmanship</h4>
                                    <p className="text-body-sm text-mutedText">Hand-finished by our most experienced tailors.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe size={24} className="text-ink mt-1" />
                                <div>
                                    <h4 className="text-title-md text-ink">Global Shipping</h4>
                                    <p className="text-body-sm text-mutedText">Express delivery to over 50 countries.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <ShieldCheck size={24} className="text-ink mt-1" />
                                <div>
                                    <h4 className="text-title-md text-ink">Quality Guarantee</h4>
                                    <p className="text-body-sm text-mutedText">Free returns if you're not 100% satisfied with the fit.</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-8 border-b border-hairline">
                            <p className="text-body-md text-ink leading-relaxed">
                                {product.description}
                            </p>
                            <button className="mt-4 flex items-center gap-1 text-title-md text-ink underline font-semibold">
                                Show more <ChevronRight size={18} />
                            </button>
                        </div>

                        <div className="py-8">
                           <h3 className="text-display-sm text-ink mb-6">What this place offers</h3>
                           <div className="grid grid-cols-2 gap-y-4">
                              <div className="flex items-center gap-4 text-body-md text-ink">
                                 <ShoppingBag size={20} /> <span>Premium {product.fabric}</span>
                              </div>
                              <div className="flex items-center gap-4 text-body-md text-ink">
                                 <Sparkles size={20} /> <span>{product.color} Colorway</span>
                              </div>
                           </div>
                        </div>
                    </div>

                    {/* Right Rail - Sticky Reservation Card */}
                    <div className="lg:col-span-1 relative">
                        <div className="sticky top-28 p-6 bg-white border border-hairline rounded-md shadow-airbnb space-y-6">
                            <div className="flex justify-between items-baseline">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-display-md text-ink">₹{product.price.toLocaleString("en-IN")}</span>
                                    <span className="text-body-md text-ink font-normal">night</span>
                                </div>
                            </div>

                            <div className="border border-border-strong rounded-sm overflow-hidden">
                                <div className="grid grid-cols-2 divide-x divide-border-strong border-b border-border-strong">
                                    <div className="p-3">
                                        <p className="text-uppercase-tag text-ink">CHECK-IN</p>
                                        <p className="text-body-sm text-mutedText">Add date</p>
                                    </div>
                                    <div className="p-3">
                                        <p className="text-uppercase-tag text-ink">CHECKOUT</p>
                                        <p className="text-body-sm text-mutedText">Add date</p>
                                    </div>
                                </div>
                                <div className="p-3 relative">
                                    <p className="text-uppercase-tag text-ink">GUESTS</p>
                                    <p className="text-body-sm text-ink">1 guest</p>
                                    <ChevronRight size={18} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full h-12 text-button-md"
                                >
                                    Reserve
                                </a>
                                <p className="text-center text-body-sm text-mutedText">You won't be charged yet</p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-hairline">
                                <div className="flex justify-between text-body-md text-ink underline">
                                    <span>Premium fabric surcharge</span>
                                    <span>₹0</span>
                                </div>
                                <div className="flex justify-between text-body-md text-ink underline">
                                    <span>Elite service fee</span>
                                    <span>₹0</span>
                                </div>
                                <div className="flex justify-between text-title-md text-ink pt-4 border-t border-hairline">
                                    <span>Total before taxes</span>
                                    <span>₹{product.price.toLocaleString("en-IN")}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 flex items-center justify-center gap-2 p-6 border border-hairline rounded-md">
                           <Award size={24} className="text-rausch" />
                           <p className="text-body-sm text-ink font-semibold">This is a rare find.</p>
                           <p className="text-body-sm text-mutedText">Elite Attire pieces sell out quickly.</p>
                        </div>
                    </div>
                </div>

                {/* Related Listings */}
                {relatedProducts.length > 0 && (
                    <section className="mx-auto w-full max-w-[1120px] px-6 md:px-12 py-section border-t border-hairline">
                        <div className="mb-8">
                            <h2 className="text-display-sm text-ink">More items to explore</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-base">
                            {relatedProducts.map((p, i) => (
                                <ProductCard key={p.id} product={p} index={i} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Enquiry Section */}
                <section id="enquiry-section" className="bg-surfaceSoft py-section">
                    <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
                        <div className="max-w-3xl mx-auto bg-white p-10 md:p-12 rounded-md shadow-airbnb border border-hairline">
                            <h2 className="text-display-md text-ink mb-4">Still have questions?</h2>
                            <p className="text-body-md text-mutedText mb-10">Send a message to our designers for personalized assistance.</p>
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
