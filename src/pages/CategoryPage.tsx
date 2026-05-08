import { motion } from "framer-motion";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ChevronDown, ListFilter } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";

const CategoryPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [searchParams] = useSearchParams();
    const subcategory = searchParams.get("sub");
    
    const category = categories.find((c) => c.slug === slug);
    let categoryProducts = slug ? getProductsByCategory(slug) : [];

    if (subcategory) {
        categoryProducts = categoryProducts.filter((p) => {
            const searchTerms = [p.name.toLowerCase(), ...(p.tags?.map(t => t.toLowerCase()) || [])];
            return searchTerms.some(term => term.includes(subcategory.toLowerCase()));
        });
    }

    if (!category) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40 px-6 text-center">
                    <h1 className="text-display-xl text-ink mb-4">
                        Collection not found
                    </h1>
                    <Link to="/" className="btn-primary">
                        Return home
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Filters Bar - Signature Airbnb Style */}
                <div className="sticky top-[80px] z-30 bg-white border-b border-hairline py-4">
                    <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex items-center justify-between gap-8">
                        <div className="flex items-center gap-10 overflow-x-auto no-scrollbar pb-1">
                            {['All items', 'New arrivals', 'Best sellers', 'Premium', 'Hand-crafted'].map((filter, i) => (
                                <button key={filter} className={`flex flex-col items-center gap-2 group whitespace-nowrap transition-all ${i === 0 ? "opacity-100" : "opacity-60 hover:opacity-100"}`}>
                                    <span className={`text-caption text-ink font-semibold pb-2 border-b-2 ${i === 0 ? "border-ink" : "border-transparent group-hover:border-hairline"}`}>{filter}</span>
                                </button>
                            ))}
                        </div>
                        
                        <div className="flex items-center gap-3">
                           <button className="flex items-center gap-2 px-4 py-3 border border-hairline rounded-md text-caption-sm font-semibold hover:bg-surfaceSoft transition-all">
                               <SlidersHorizontal size={14} />
                               Filters
                           </button>
                           <button className="hidden md:flex items-center gap-2 px-4 py-3 border border-hairline rounded-md text-caption-sm font-semibold hover:bg-surfaceSoft transition-all">
                               <ListFilter size={14} />
                               Display total before taxes
                           </button>
                        </div>
                    </div>
                </div>

                {/* Category Header */}
                <section className="pt-12 pb-6 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-display-md text-ink capitalize">
                                    {subcategory ? `${subcategory} ${category.name}` : category.name}
                                </h1>
                                <p className="mt-2 text-body-md text-mutedText max-w-2xl">
                                    {category.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-body-sm font-semibold text-ink">
                                <span>{categoryProducts.length} listings</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Product Grid */}
                <section className="mx-auto w-full max-w-[1440px] px-6 md:px-12 py-8 pb-20">
                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-base gap-y-10">
                            {categoryProducts.map((product, i) => (
                                <ProductCard key={product.id} product={product} index={i} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32 bg-surfaceSoft rounded-md">
                            <p className="text-title-md text-ink">
                                No listings match your search.
                            </p>
                            <p className="mt-2 text-body-sm text-mutedText">Try adjusting your filters or exploring another collection.</p>
                            <Link to="/" className="btn-secondary mt-8 border-ink">Clear all filters</Link>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CategoryPage;
