import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface WishlistContextType {
    items: Product[];
    toggleWishlist: (product: Product) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
    totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<Product[]>(() => {
        const saved = localStorage.getItem("elite-attire-wishlist");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("elite-attire-wishlist", JSON.stringify(items));
    }, [items]);

    const isInWishlist = (productId: string) => {
        return items.some((item) => item.id === productId);
    };

    const toggleWishlist = (product: Product) => {
        setItems((prev) => {
            if (isInWishlist(product.id)) {
                toast.success(`Removed ${product.name} from wishlist`);
                return prev.filter((item) => item.id !== product.id);
            } else {
                toast.success(`Added ${product.name} to wishlist`);
                return [...prev, product];
            }
        });
    };

    const clearWishlist = () => setItems([]);

    const totalItems = items.length;

    return (
        <WishlistContext.Provider value={{ items, toggleWishlist, isInWishlist, clearWishlist, totalItems }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};
