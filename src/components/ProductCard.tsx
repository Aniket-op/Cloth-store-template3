import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Heart, Star } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
    product: Product;
    index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(product.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group cursor-pointer"
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-surfaceSoft mb-3">
                <Link to={`/product/${product.id}`} className="block h-full w-full">
                    <img
                        src={product.image}
                        alt={product.name}
                        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${product.secondImage ? "group-hover:opacity-0" : ""}`}
                        loading="lazy"
                    />
                    {product.secondImage && (
                        <img
                            src={product.secondImage}
                            alt={`${product.name} alternate`}
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                            loading="lazy"
                        />
                    )}
                </Link>

                {/* Wishlist */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product);
                    }}
                    className="absolute top-3 right-3 z-10 p-2 transition-all duration-300 active:scale-90"
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    <Heart
                        size={22}
                        className={`transition-colors duration-300 drop-shadow-md ${
                            isWishlisted ? "fill-rausch text-rausch" : "text-white fill-black/20"
                        }`}
                    />
                </button>

                {/* Sale badge */}
                {product.originalPrice && (
                    <div className="absolute top-3 left-3 z-10 bg-rausch text-white px-2.5 py-1 rounded-full">
                        <span className="text-[10px] font-bold tracking-wide uppercase">Sale</span>
                    </div>
                )}
            </div>

            {/* Meta */}
            <Link to={`/product/${product.id}`} className="block">
                <div className="flex justify-between items-start mb-0.5">
                    <h3 className="text-[15px] font-semibold text-ink line-clamp-1 flex-1 pr-2">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[13px] text-ink flex-shrink-0">
                        <Star size={11} fill="currentColor" />
                        <span className="font-medium">5.0</span>
                    </div>
                </div>
                <p className="text-[13px] text-mutedText capitalize mb-2">
                    {product.category.replace(/-/g, " ")}
                </p>
                <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-ink">
                        ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                        <span className="text-[13px] text-mutedText line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
